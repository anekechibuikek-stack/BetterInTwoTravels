import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsDateString({}, { message: 'dateOfBirth must be YYYY-MM-DD' })
  dateOfBirth?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
