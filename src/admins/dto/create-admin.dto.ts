import { IsEmail, IsString, Min, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MinLength(4)
  private readonly name: string;

  @IsString()
  @MinLength(4)
  private readonly last_name: string;

  @IsEmail()
  private readonly email: string;

  @IsString()
  @MinLength(4)
  private readonly password: string;
}
