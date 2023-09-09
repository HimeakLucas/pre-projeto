import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.Service';
import { CreateCategoriaDto } from './dtos/create-categoria';
import { UpdateCategoriaDto } from './dtos/update-categoria';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoriaDto) {
    const categoria = await this.prisma.categoria.create({
      data,
    });
    return categoria;
  }

  async update(id: number, data: UpdateCategoriaDto) {
    const categoriaExists = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExists) {
      throw new HttpException('Categoria not found', HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.categoria.update({
      data,
      where: {
        id,
      },
    });
  }

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findUnique(id: number) {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoria) {
      throw new HttpException('Categoria not found', HttpStatus.BAD_REQUEST);
    }

    return categoria;
  }

  async delete(id: number) {
    const categoriaExists = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExists) {
      throw new HttpException('Categoria not found', HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.categoria.delete({
      where: {
        id,
      },
    });
  }
}
