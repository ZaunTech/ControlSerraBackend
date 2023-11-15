import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { ProdutosBaseModule } from '../produtos-base/produtos-base.module';
import { InsumosProdutosBaseModule } from '../insumos-produtos-base/insumos-produtos-base.module';

@Module({
  imports: [
    PrismaModule,
    ProdutosBaseModule,
    InsumosProdutosBaseModule,
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
