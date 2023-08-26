import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.Service';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService, PrismaService],
})
export class CategoriaModule {}
