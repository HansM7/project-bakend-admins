import { IsString } from 'class-validator';

export class CreateDetailDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
