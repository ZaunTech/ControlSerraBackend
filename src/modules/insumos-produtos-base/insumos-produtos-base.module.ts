import { Module } from '@nestjs/common';
import { InsumosProdutosBaseService } from './insumos-produtos-base.service';
import { InsumosProdutosBaseController } from './insumos-produtos-base.controller';

@Module({
  controllers: [InsumosProdutosBaseController],
  providers: [InsumosProdutosBaseService],
})
export class InsumosProdutosBaseModule {}
