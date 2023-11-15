import { Module } from '@nestjs/common';
import { VariantesService } from './variantes.service';
import { VariantesController } from './variantes.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VariantesController],
  providers: [VariantesService],
})
export class VariantesModule {}
