import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefaModule } from './modules/tarefa/tarefa.module';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [TarefaModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
