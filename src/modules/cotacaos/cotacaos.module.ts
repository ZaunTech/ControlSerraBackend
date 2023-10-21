import { Module } from '@nestjs/common';
import { CotacaosService } from './cotacaos.service';
import { CotacaosController } from './cotacaos.controller';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  controllers: [CotacaosController],
  providers: [CotacaosService, PrismaService],
})
export class CotacaosModule {}
