import { Injectable } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class OrcamentosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findCliente(id: number) {
    return await this.prismaService.cliente.findFirst({ where: { id } });
  }

  async create(createOrcamentoDto: CreateOrcamentoDto) {
    const clienteExists = await this.findCliente(createOrcamentoDto.idCliente);
    if (clienteExists) {
      return await this.prismaService.orcamento.create({
        data: createOrcamentoDto,
      });
    }
    return { data: { message: 'Cliente não existe' } };
  }

  async findAll() {
    const orcamentos = await this.prismaService.orcamento.findMany();
    if (orcamentos) {
      return orcamentos;
    }
    return { data: { message: 'Não há orçamentos' } };
  }

  async findOne(id: number) {
    return await this.prismaService.orcamento.findFirst({ where: { id } });
  }

  async update(id: number, updateOrcamentoDto: UpdateOrcamentoDto) {
    const orcamento = await this.prismaService.orcamento.update({
      where: { id },
      data: updateOrcamentoDto,
    });

    if (orcamento) {
      return orcamento;
    }

    return { data: { message: 'Ocorreu um erro ao atualizar o orcamento' } };
  }

  async remove(id: number) {
    return await this.prismaService.orcamento.delete({ where: { id } });
  }
}
