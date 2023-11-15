import { Module } from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { InsumosController } from './insumos.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsumosController],
  providers: [InsumosService],
})
export class InsumosModule {}
