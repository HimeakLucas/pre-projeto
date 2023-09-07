import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/database/Prisma.Service';
import { CreateTarefaDto } from './dtos/create-tarefa';
import { UpdateTarefaDto } from './dtos/update-tarefa';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTarefaDto) {
    const tarefa = await this.prisma.tarefa.create({
      data,
    });
    return tarefa;
  }

  async findAll() {
    return await this.prisma.tarefa.findMany({
      select: {
        id: true,
        nome: true,
        isActive: true,
        categoria: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findUnique(id: number) {
    const tarefa = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        nome: true,
        isActive: true,
        categoria: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!tarefa) {
      throw new error('Tarefa not found');
    }

    return tarefa;
  }

  async update(id: number, data: UpdateTarefaDto) {
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
