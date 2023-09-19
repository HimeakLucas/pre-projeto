import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateTarefaDto {
  @IsString()
  @IsOptional()
  nome: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsInt()
  @IsOptional()
  categoriaId?: number;
}
