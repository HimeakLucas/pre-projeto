import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/Prisma.Service';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TarefaCreateInput) {
    const tarefa = await this.prisma.tarefa.create({
      data,
    });
    return tarefa;
  }

  async findAll() {
    return this.prisma.tarefa.findMany();
  }

  async update(id: number, data: Prisma.TarefaCreateInput) {
    const tarefaExists = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },
    });

    if (!tarefaExists) {
      throw new Error('Tarefa not found');
    }

    await this.prisma.tarefa.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const tarefaExists = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },
    });

    if (!tarefaExists) {
      throw new Error('Tarefa not found');
    }

    await this.prisma.tarefa.delete({
      where: {
        id,
      },
    });
  }
}
