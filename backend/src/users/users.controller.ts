import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { PublicUser } from './types/public-user.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: any) {
    const userId = req.user.sub;
    return this.usersService.findById(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateMe(
    @Req() req: any,
    @Body() dto: UpdateUserDto,
  ): Promise<PublicUser> {
    return this.usersService.updateProfile(req.user.sub, dto);
  }
}
