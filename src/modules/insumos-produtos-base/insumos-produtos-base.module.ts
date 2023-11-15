import { Module } from '@nestjs/common';
import { InsumosProdutosBaseService } from './insumos-produtos-base.service';
import { InsumosProdutosBaseController } from './insumos-produtos-base.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsumosProdutosBaseController],
  providers: [InsumosProdutosBaseService],
  exports: [InsumosProdutosBaseService],
})
export class InsumosProdutosBaseModule {}
