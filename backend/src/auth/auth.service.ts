import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  private signAccessToken(user: { id: string; email: string; role: string }) {
    return this.jwt.signAsync(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: this.config.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.config.get<number>('JWT_ACCESS_EXPIRES_IN') ?? 15 * 60, // 15 minutes
      },
    );
  }

  private signRefreshToken(user: { id: string; email: string; role: string }) {
    return this.jwt.signAsync(
      { sub: user.id, email: user.email, role: user.role },
      {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
        expiresIn:
          this.config.get<number>('JWT_REFRESH_EXPIRES_IN') ?? 7 * 24 * 60 * 60, // 7 days
      },
    );
  }

  async signup(dto: CreateUserDto) {
    const user = await this.usersService.create(dto);

    const accessToken = await this.signAccessToken(user);
    const refreshToken = await this.signRefreshToken(user);

    await this.usersService.setRefreshToken(user.id, refreshToken);

    return { user, accessToken, refreshToken };
  }

  async login(email: string, password: string) {
    const userEntity = await this.usersService.findByEmail(email);
    if (!userEntity) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(password, userEntity.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const { passwordHash, refreshTokenHash, ...user } = userEntity as any;

    const accessToken = await this.signAccessToken(user);
    const refreshToken = await this.signRefreshToken(user);

    await this.usersService.setRefreshToken(user.id, refreshToken);

    return { user, accessToken, refreshToken };
  }

  async refresh(refreshToken: string) {
    let payload: any;
    try {
      payload = await this.jwt.verifyAsync(refreshToken, {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new ForbiddenException('Invalid refresh token');
    }

    const userEntity = await this.usersService.findByEmail(payload.email);
    if (!userEntity || !userEntity.refreshTokenHash) {
      throw new ForbiddenException('Refresh token not allowed');
    }

    const matches = await bcrypt.compare(
      refreshToken,
      userEntity.refreshTokenHash,
    );
    if (!matches) throw new ForbiddenException('Refresh token not allowed');

    const user = {
      id: userEntity.id,
      email: userEntity.email,
      role: userEntity.role,
    };

    // rotate refresh token (recommended)
    const newAccessToken = await this.signAccessToken(user);
    const newRefreshToken = await this.signRefreshToken(user);

    await this.usersService.setRefreshToken(user.id, newRefreshToken);

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }

  async logout(userId: string) {
    await this.usersService.clearRefreshToken(userId);
  }
}
