import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() data: Prisma.CategoriaCreateInput) {
    return this.categoriaService.create(data);
  }

  @Get()
  async findAll() {
    return this.categoriaService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.TarefaCreateInput,
  ) {
    return this.categoriaService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.categoriaService.delete(+id);
  }
}
