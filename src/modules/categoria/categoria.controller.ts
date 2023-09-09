import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dtos/create-categoria';
import { UpdateCategoriaDto } from './dtos/update-categoria';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() data: CreateCategoriaDto) {
    return this.categoriaService.create(data);
  }

  @Get()
  async findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.findUnique(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCategoriaDto,
  ) {
    return this.categoriaService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(+id);
  }
}
