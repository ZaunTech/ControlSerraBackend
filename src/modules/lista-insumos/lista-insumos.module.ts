import { Module } from '@nestjs/common';
import { ListaInsumosService } from './lista-insumos.service';
import { ListaInsumosController } from './lista-insumos.controller';
import { ProdutosModule } from '../produtos/produtos.module';
import { CotacoesModule } from '../cotacoes/cotacoes.module';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { OrcamentosModule } from '../orcamentos/orcamentos.module';

@Module({
  imports: [PrismaModule, ProdutosModule, CotacoesModule,OrcamentosModule],
  controllers: [ListaInsumosController],
  providers: [ListaInsumosService],
})
export class ListaInsumosModule {}
