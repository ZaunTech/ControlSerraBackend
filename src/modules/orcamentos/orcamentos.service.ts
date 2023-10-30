import { Injectable } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { ProdutosService } from '../produtos/produtos.service';

@Injectable()
export class OrcamentosService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly produtoService: ProdutosService,
  ) {}
  async countAll() {
    return await this.prismaService.cliente.count({});
  }

  async findCliente(id: number) {
    return await this.prismaService.cliente.findFirst({ where: { id } });
  }

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const orcamentos = await this.prismaService.orcamento.findMany({
      skip,
      take: perPage,
    });
    return { orcamentos };
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
    const orcamentoExists = await this.findOne(id);
    if (orcamentoExists) {
      const clienteExists = await this.findCliente(
        updateOrcamentoDto.idCliente,
      );
      if (clienteExists) {
        if (orcamentoExists.status === 'Concluido') {
          return await this.prismaService.orcamento.update({
            where: { id },
            data: {
              status: updateOrcamentoDto.status,
            },
          });
        }
        console.log(orcamentoExists.status);
        return await this.prismaService.orcamento.update({
          where: { id },
          data: updateOrcamentoDto,
        });
      }
      return { data: { message: 'Cliente não existe' } };
    }
    return { data: { message: 'Orçamento não existe' } };
  }

  async remove(id: number) {
    const produtos = await this.prismaService.produto.findMany({
      where: {
        orcamentoId: id,
      },
    });
    for (const produto of produtos) {
      await this.produtoService.remove(produto.id);
    }
    const removeOrcamento = await this.prismaService.orcamento.delete({
      where: { id },
    });
    return { removeOrcamento };
  }
}
