import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
