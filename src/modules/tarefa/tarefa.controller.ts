import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTarefaDto } from './dtos/create-tarefa';
import { UpdateTarefaDto } from './dtos/update-tarefa';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() data: CreateTarefaDto) {
    return this.tarefaService.create(data);
  }

  @Get()
  async findAll() {
    return this.tarefaService.findAll();
  }

  @Get(':id')
  async findUnique(@Param('id') id: number) {
    return this.tarefaService.findUnique(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: UpdateTarefaDto) {
    return this.tarefaService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.tarefaService.delete(+id);
  }
}
