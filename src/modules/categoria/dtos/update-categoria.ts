import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}
