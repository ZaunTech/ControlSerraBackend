import { Module } from '@nestjs/common';
import { CotacaosService } from './cotacaos.service';
import { CotacaosController } from './cotacaos.controller';

@Module({
  controllers: [CotacaosController],
  providers: [CotacaosService],
})
export class CotacaosModule {}
