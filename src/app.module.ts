import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumosModule } from './modules/insumos/insumos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';

@Module({
  imports: [InsumosModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
