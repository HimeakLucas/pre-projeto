import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.Service';
import { CreateTarefaDto } from './dtos/create-tarefa';
import { UpdateTarefaDto } from './dtos/update-tarefa';
import { defaultSelect } from './tarefa.default-select';

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
      select: defaultSelect,
    });
  }

  async findUnique(id: number) {
    const tarefa = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },

      select: defaultSelect,
    });

    if (!tarefa) {
      throw new HttpException('Tarefa not found', HttpStatus.BAD_REQUEST);
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
      throw new HttpException('Tarefa not found', HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.tarefa.update({
      data,
      where: {
        id,
      },
      select: defaultSelect,
    });
  }

  async delete(id: number) {
    const tarefaExists = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },
    });

    if (!tarefaExists) {
      throw new HttpException('Tarefa not found', HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.tarefa.delete({
      where: {
        id,
      },
      select: defaultSelect,
    });
  }

  async deleteAllInactive() {
    return await this.prisma.tarefa.deleteMany({
      where: {
        isActive: false,
      },
    });
  }

  async findAllActive(active: boolean) {
    if (active) {
      return await this.prisma.tarefa.findMany({
        where: {
          isActive: true,
        },
      });
    } else {
      return await this.prisma.tarefa.findMany({
        where: {
          isActive: false,
        },
      });
    }
  }
}
