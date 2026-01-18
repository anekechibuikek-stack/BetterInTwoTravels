import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsDateString({}, { message: 'dateOfBirth must be YYYY-MM-DD' })
  dateOfBirth: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
