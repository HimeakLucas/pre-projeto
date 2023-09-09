import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTarefaDto {
  @IsString()
  @IsOptional()
  nome: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
