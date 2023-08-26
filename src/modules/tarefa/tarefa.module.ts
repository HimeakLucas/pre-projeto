import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.Service';
import { TarefaController } from './tarefa.controller';
import { TarefaService } from './tarefa.service';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService, PrismaService],
})
export class TarefaModule {}
