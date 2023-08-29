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
import { Prisma } from '@prisma/client';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() data: Prisma.TarefaCreateInput) {
    return this.tarefaService.create(data);
  }

  @Get()
  async findAll() {
    return this.tarefaService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.TarefaCreateInput,
  ) {
    return this.tarefaService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.tarefaService.delete(+id);
  }
}
