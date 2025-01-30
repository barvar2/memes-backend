import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
