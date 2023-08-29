import { Module } from '@nestjs/common';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { TarefaModule } from './modules/tarefa/tarefa.module';

@Module({
  imports: [TarefaModule, CategoriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
