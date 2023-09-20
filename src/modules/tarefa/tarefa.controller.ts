import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTarefaDto } from './dtos/create-tarefa';
import { UpdateTarefaDto } from './dtos/update-tarefa';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  async create(@Body() data: CreateTarefaDto) {
    return this.tarefaService.create(data);
  }

  @Get()
  async findAll() {
    return this.tarefaService.findAll();
  }

  @Get('getById/:id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.tarefaService.findUnique(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTarefaDto,
  ) {
    return this.tarefaService.update(+id, data);
  }

  @Delete('deleteById/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.tarefaService.delete(+id);
  }

  @Delete('deleteAllComplete')
  async deleteAllComplete() {
    return this.tarefaService.deleteAllInactive();
  }

  @Get('filterBy')
  async findAllActive(@Query('isActive', ParseBoolPipe) active: boolean) {
    return this.tarefaService.findAllActive(active);
  }

  @Get('fromCategoria/:categoriaId')
  async findAllFromCategoria(
    @Param('categoriaId', ParseIntPipe) categoriaId: number,
  ) {
    return this.tarefaService.findAllFromCategoria(categoriaId);
  }
}
