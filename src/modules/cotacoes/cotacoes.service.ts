import { Injectable } from '@nestjs/common';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { recotarDto } from './dto/recotar.dto';
import { Cotacao } from './entities/cotacao.entity';

@Injectable()
export class CotacoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async recotar(idCotacao: number, recotarDto: recotarDto) {
    const oldQuotation = await this.prismaService.cotacao.update({
      where: { id: idCotacao },
      data: {
        obsoleta: true,
      },
    });
    if (!oldQuotation) {
      return { data: { message: 'Não foi possivel criar a nova cotação' } };
    }
    const newQuotation = await this.prismaService.cotacao.create({
      data: {
        idVariante: oldQuotation.idVariante,
        idFornecedor: oldQuotation.idFornecedor,
        valor: recotarDto.valor,
        data: recotarDto.data,
      },
    });
    if (!newQuotation) {
      return { data: { message: 'Não foi possivel criar a nova cotação' } };
    }

    return newQuotation;
  }

  async findAllWithPagination(
    id: number,
    page: number,
    perPage: number,
    nome_like?: string,
    idfornecedor?: number,
  ) {
    const skip = (page - 1) * perPage;
    let cotacoes = Cotacao[''];
   
    if (id && idfornecedor) {
      cotacoes = await this.prismaService.cotacao.findMany({
        skip,
        take: perPage,
        where: {
          idVariante: id,
          idFornecedor: idfornecedor,
          obsoleta:false,
          OR: [
            { variante: { insumo: { titulo: { contains: nome_like, mode: 'insensitive' } } } },
            { fornecedor: { nome: { contains: nome_like, mode: 'insensitive' } } },
            { fornecedor: { nomeFantasia: { contains: nome_like, mode: 'insensitive' } } },
            { fornecedor: { razaoSocial: { contains: nome_like, mode: 'insensitive' } } },
          ],
        },
      });
    } else if (id) {
      cotacoes = await this.prismaService.cotacao.findMany({
        skip,
        take: perPage,
        where: {
          idVariante: id,
          obsoleta:false,
          OR: [
            { variante: { insumo: { titulo: { contains: nome_like, mode: 'insensitive' } } } },
            { fornecedor: { nome: { contains: nome_like, mode: 'insensitive' } } },
            { fornecedor: { nomeFantasia: { contains: nome_like, mode: 'insensitive' } } },
            { fornecedor: { razaoSocial: { contains: nome_like, mode: 'insensitive' } } },
          ],
        },
      });
    } else {
      cotacoes = await this.prismaService.cotacao.findMany({
        skip,
        take: perPage,
        where: {
          OR: [
            { variante: { insumo: { titulo: { contains: nome_like, mode: 'insensitive' } }  } },
            { fornecedor: { nome: { contains: nome_like, mode: 'insensitive' } } },
            { fornecedor: { nomeFantasia: { contains: nome_like , mode: 'insensitive'} } },
            { fornecedor: { razaoSocial: { contains: nome_like , mode: 'insensitive'} } },
          ],
        },
      });
    }

    return cotacoes;
  }

  async countAllCotacaos() {
    return await this.prismaService.cotacao.count({});
  }

  async countByIdInsumoCotacaos(id: number) {
    return await this.prismaService.cotacao.count({
      where: {
        idVariante: id,
      },
    });
  }

  async create(createCotacaoDto: CreateCotacaoDto) {
    const fornecedorExists = await this.prismaService.fornecedor.findFirst({
      where: { id: createCotacaoDto.idFornecedor },
    });
    if (fornecedorExists) {
      const insumoExists = await this.prismaService.variante.findFirst({
        where: { id: createCotacaoDto.idVariante },
      });
      if (insumoExists) {
        return await this.prismaService.cotacao.create({
          data: createCotacaoDto,
        });
      }
      return { data: { message: 'Insumo não existe' } };
    }
    return { data: { message: 'Fornecedor não existe' } };
  }

  async findAll() {
    return await this.prismaService.cotacao.findMany();
  }

  async findManyByFornecedor(id: number) {
    return await this.prismaService.cotacao.findMany({
      where: { idFornecedor: id },
    });
  }

  async findManyByInsumo(id: number) {
    return await this.prismaService.cotacao.findMany({
      where: { idVariante: id },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.cotacao.findFirst({
      where: {
        id,
      },
      
    });
  }

  async update(id: number, updateCotacaoDto: UpdateCotacaoDto) {
    const cotacaoExists = await this.findOne(1);
    if (cotacaoExists) {
      const notObsolete = await this.findOne(id);
      if (notObsolete.obsoleta === false) {
        const fornecedorExists = await this.prismaService.fornecedor.findFirst({
          where: { id: updateCotacaoDto.idFornecedor },
        });
        if (fornecedorExists) {
          const insumoExists = await this.prismaService.variante.findFirst({
            where: { id: updateCotacaoDto.idVariante },
          });
          if (insumoExists) {
            return await this.prismaService.cotacao.update({
              where: { id },
              data: updateCotacaoDto,
            });
          }
          return { data: { message: 'Insumo não existe' } };
        }
        return { data: { message: 'Fornecedor não existe' } };
      }
      return { data: { message: 'Cotação selecionada é obsoleta' } };
    }
    return { data: { message: 'Cotação não existe' } };
  }

  async remove(id: number) {
    const cotacaoExists = await this.findOne(id);
    if (cotacaoExists) {
      return await this.prismaService.cotacao.delete({ where: { id } });
    }
    return { data: { message: 'Cotação não existe' } };
  }
}
