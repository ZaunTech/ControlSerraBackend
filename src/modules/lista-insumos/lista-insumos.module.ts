import { Module } from '@nestjs/common';
import { ListaInsumosService } from './lista-insumos.service';
import { ListaInsumosController } from './lista-insumos.controller';
import { ProdutosModule } from '../produtos/produtos.module';
import { CotacoesModule } from '../cotacoes/cotacoes.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProdutosModule, CotacoesModule],
  controllers: [ListaInsumosController],
  providers: [ListaInsumosService],
})
export class ListaInsumosModule {}
