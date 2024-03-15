import { IsEmail, IsString, Min, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MinLength(4)
  readonly name: string;

  @IsString()
  @MinLength(4)
  readonly last_name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(4)
  readonly password: string;
}
