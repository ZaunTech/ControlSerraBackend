import { Module, forwardRef } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProdutosBaseModule } from '../produtos-base/produtos-base.module';
import { InsumosProdutosBaseModule } from '../insumos-produtos-base/insumos-produtos-base.module';
import { OrcamentosModule } from '../orcamentos/orcamentos.module';

@Module({
  imports: [
    forwardRef(() => OrcamentosModule),
    PrismaModule,
    ProdutosBaseModule,
    InsumosProdutosBaseModule,
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
