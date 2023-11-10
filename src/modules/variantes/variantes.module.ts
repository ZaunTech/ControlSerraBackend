import { Module } from '@nestjs/common';
import { VariantesService } from './variantes.service';
import { VariantesController } from './variantes.controller';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  controllers: [VariantesController],
  providers: [VariantesService, PrismaService],
})
export class VariantesModule {}
