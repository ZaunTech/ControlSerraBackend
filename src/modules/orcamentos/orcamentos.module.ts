import { Module, forwardRef } from '@nestjs/common';
import { OrcamentosService } from './orcamentos.service';
import { OrcamentosController } from './orcamentos.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { ProdutosModule } from '../produtos/produtos.module';
import { ProdutosBaseModule } from '../produtos-base/produtos-base.module';
import { InsumosProdutosBaseModule } from '../insumos-produtos-base/insumos-produtos-base.module';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => ProdutosModule),
    ProdutosBaseModule,
    InsumosProdutosBaseModule,
  ],
  controllers: [OrcamentosController],
  providers: [OrcamentosService],
  exports: [OrcamentosService],
})
export class OrcamentosModule {}
