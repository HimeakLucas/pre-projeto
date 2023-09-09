import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTarefaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @IsOptional()
  categoriaId?: number;
}
