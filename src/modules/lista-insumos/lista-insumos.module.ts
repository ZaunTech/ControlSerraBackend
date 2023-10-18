import { Module } from '@nestjs/common';
import { ListaInsumosService } from './lista-insumos.service';
import { ListaInsumosController } from './lista-insumos.controller';

@Module({
  controllers: [ListaInsumosController],
  providers: [ListaInsumosService],
})
export class ListaInsumosModule {}
