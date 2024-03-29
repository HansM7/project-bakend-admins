import { IsNumber, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
