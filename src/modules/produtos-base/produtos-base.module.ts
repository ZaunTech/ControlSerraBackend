import { Module } from '@nestjs/common';
import { ProdutosBaseService } from './produtos-base.service';
import { ProdutosBaseController } from './produtos-base.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProdutosBaseController],
  providers: [ProdutosBaseService],
  exports: [ProdutosBaseService],
})
export class ProdutosBaseModule {}
