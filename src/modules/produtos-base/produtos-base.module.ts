import { Module } from '@nestjs/common';
import { ProdutosBaseService } from './produtos-base.service';
import { ProdutosBaseController } from './produtos-base.controller';

@Module({
  controllers: [ProdutosBaseController],
  providers: [ProdutosBaseService],
})
export class ProdutosBaseModule {}
