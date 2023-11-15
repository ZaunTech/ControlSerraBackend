import { Module } from '@nestjs/common';
import { CotacoesService } from './cotacoes.service';
import { CotacoesController } from './cotacoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CotacoesController],
  providers: [CotacoesService],
  exports: [CotacoesService],
})
export class CotacoesModule {}
