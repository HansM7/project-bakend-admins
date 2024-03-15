import { IsNumber, IsString } from 'class-validator';

export class CreateQuantityDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  amount: number;
}
