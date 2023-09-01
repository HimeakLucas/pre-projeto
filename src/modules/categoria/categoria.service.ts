import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { error } from 'console';
import { PrismaService } from 'src/database/Prisma.Service';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CategoriaCreateInput) {
    const categoria = await this.prisma.categoria.create({
      data,
    });
    return categoria;
  }

  async update(id: number, data: Prisma.CategoriaCreateInput) {
    const categoriaExists = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExists) {
      throw new Error('Categoria not found');
    }

    await this.prisma.categoria.update({
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
      throw new error('Categoria not found');
    }

    return categoria;
  }

  async delete(id: number) {
    const categoriaExists = this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExists) {
      throw new Error('Categoria not found');
    }

    await this.prisma.categoria.delete({
      where: {
        id,
      },
    });
  }
}
