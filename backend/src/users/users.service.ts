import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PublicUser } from './types/public-user.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async setRefreshToken(userId: string, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);
    await this.usersRepo.update({ id: userId }, { refreshTokenHash: hash });
  }

  async clearRefreshToken(userId: string) {
    await this.usersRepo.update(
      { id: userId },
      { refreshTokenHash: undefined },
    );
  }

  private toPublicUser(user: User): PublicUser {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...rest } = user;
    return rest;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepo.findOne({ where: { email } });
  }

  async findById(id: string): Promise<PublicUser> {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.toPublicUser(user);
  }

  async create(dto: CreateUserDto): Promise<PublicUser> {
    const existing = await this.findByEmail(dto.email);
    if (existing) throw new BadRequestException('Email already in use');

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = this.usersRepo.create({
      email: dto.email,
      passwordHash,
      firstName: dto.firstName,
      lastName: dto.lastName,
      country: dto.country,
      city: dto.city,
      phoneNumber: dto.phoneNumber,
      dateOfBirth: dto.dateOfBirth,
      avatarUrl: dto.avatarUrl,
    });

    const saved = await this.usersRepo.save(user);
    return this.toPublicUser(saved);
  }

  async updateProfile(userId: string, dto: UpdateUserDto): Promise<PublicUser> {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // Apply only provided fields
    Object.assign(user, dto);

    const saved = await this.usersRepo.save(user);
    return this.toPublicUser(saved);
  }
}
