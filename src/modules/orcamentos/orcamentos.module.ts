import { Module, forwardRef } from '@nestjs/common';
import { OrcamentosService } from './orcamentos.service';
import { OrcamentosController } from './orcamentos.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';
import { ProdutosModule } from '../produtos/produtos.module';

@Module({
  imports: [
    ProdutosModule,
    PrismaModule,
  ],
  controllers: [OrcamentosController],
  providers: [OrcamentosService],
  exports: [OrcamentosService],
})
export class OrcamentosModule {}
