import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ProdutosService } from '../produtos/produtos.service';
import { Orcamento } from './entities/orcamento.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class OrcamentosService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly produtoService: ProdutosService,
  ) {}
  async countAll() {
    return await this.prismaService.orcamento.count({where:{pedido: null}});
  }

  async findCliente(id: number) {
    return await this.prismaService.cliente.findFirst({ where: { id } });
  }

  async findAllWithPagination(
    page: number,
    perPage: number,
    titulo_like: string,
  ) {
    const skip = (page - 1) * perPage;

    let orcamentos = Orcamento[''];
    if (titulo_like) {
      const isNumero = !isNaN(parseInt(titulo_like));

      if (isNumero) {
        return   orcamentos = await this.prismaService.orcamento.findMany({
          skip,
          take: perPage,
          where: {
            OR: [
              { id: { equals: parseInt(titulo_like) } },
              { cliente: { nome: { contains: titulo_like } } },
              { cliente: { nomeFantasia: { contains: titulo_like } } },
              { cliente: { razaoSocial: { contains: titulo_like } } },
            ],
            pedido: null,
          },
        });
      } else {
       return orcamentos = await this.prismaService.orcamento.findMany({
          skip,
          take: perPage,
          where: {
            OR: [
              { cliente: { nome: { contains: titulo_like } } },
              { cliente: { nomeFantasia: { contains: titulo_like } } },
              { cliente: { razaoSocial: { contains: titulo_like } } },
            ],
            pedido: null,
          },
        });
      }
    }
    
    
    orcamentos = await this.prismaService.orcamento.findMany({
      skip,
      take: perPage,
      where: {
        pedido: null,
      },
    });

    return orcamentos;
  }

  async create(createOrcamentoDto: CreateOrcamentoDto, usuario: Usuario) {
    console.log(usuario);
    const clienteExists = await this.findCliente(createOrcamentoDto.idCliente);
    if (clienteExists) {
      return await this.prismaService.orcamento.create({
        data: createOrcamentoDto,
      });
    }
    return { data: { message: 'Cliente não existe' } };
  }

  async findAllconcluded() {
    const orcamentos = await this.prismaService.orcamento.findMany({
      where: {
        status: 'Concluido',
        pedido: null,
      },
      include: { cliente: true },
    });

    if (orcamentos.length > 0) {
      return orcamentos;
    }

    return { data: { message: 'Não há orçamentos concluídos sem pedidos' } };
  }

  async findOneFull(id: number) {
    const orcamento = await this.prismaService.orcamento.findFirst({
      where: { id },
      include: { cliente: true, produtos: true },
    });
    return orcamento;
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
    const orcamentoExists = await this.findOne(id);
    if (orcamentoExists) {
      const produtos = await this.prismaService.produto.findMany({
        where: {
          idOrcamento: id,
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
    return { data: { message: 'Orçamento não existe' } };
  }

  async recalcular(idOrcamento: number, idProduto: number) {
   await this.produtoService.recalcularValor(idProduto);
    const produtos = await this.produtoService.findProdutoOrc(idOrcamento);

    const valorTotalMaterial = produtos.reduce(
      (total, produto) => total + produto.valorMaterial * produto.quantidade,
      0,
    );
    const valorTotalMaoDeObra = produtos.reduce(
      (total, produto) => total + produto.valorMaoDeObra * produto.quantidade,
      0,
    );
   await this.update(idOrcamento, {
      totalMateriais: valorTotalMaterial,
      totalMaoObra: valorTotalMaoDeObra,
    });
  }
}
