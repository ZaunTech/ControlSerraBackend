import { Injectable } from '@nestjs/common';
import { CreateVarianteDto } from './dto/create-variante.dto';
import { UpdateVarianteDto } from './dto/update-variante.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { Variante } from './entities/variante.entity';

@Injectable()
export class VariantesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVarianteDto: CreateVarianteDto) {
    return this.prismaService.variante.create({ data: createVarianteDto });
  }

  async findAll(page: number, perPage: number, titulo_like?: string) {
    const skip = (page - 1) * perPage;
    let variantes = Variante[''];
    if (titulo_like) {
      variantes = await this.prismaService.variante.findMany({
        skip,
        take: perPage,
        where: {
          OR: [
            /*
            { nome: { contains: titulo_like } },
            { email: { contains: titulo_like } },
            { cpf: { contains: titulo_like } },
            */
          ],
        },
        include: { insumo: true },
      });
    } else {
      variantes = await this.prismaService.variante.findMany({
        skip,
        take: perPage,
      });
    }
    return variantes;
  }

  async findOne(id: number) {
    return await this.prismaService.variante.findFirst({ where: { id } });
  }

  async update(id: number, updateVarianteDto: UpdateVarianteDto) {
    return await this.prismaService.variante.update({
      where: { id },
      data: updateVarianteDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.variante.delete({ where: { id } });
  }

  async countAll() {
    return await this.prismaService.variante.count();
  }
}
