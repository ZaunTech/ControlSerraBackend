import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { PrismaService } from '../../databases/prisma.service';

@Injectable()
export class FornecedoresService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const fornecedores = await this.prismaService.fornecedor.findMany({
    skip,
    take: perPage,
  });
  return { fornecedores };
  }

  async findOneByFornecedor(nome: string,email: string,telefone:string) {
    return await this.prismaService.fornecedor.findFirst({
      where: { nome,email,telefone },
    });
  }
  async findManyByFornecedor(nome: string,email: string,telefone:string){
    return await this.prismaService.fornecedor.findMany({
      where: {nome,email,telefone}
    })
  }
  async countAllFornecedor(){
    return await this.prismaService.fornecedor.count({
    });
  }

  async findExistingFornecedor(id: number, termo: string) {
    const emailExists = await this.prismaService.fornecedor.findUnique({
      where: {
        email: termo,
        NOT: {
          id: id,
        },
      },
    });
    const cpfExists = await this.prismaService.fornecedor.findUnique({
      where: {
        cpf: termo,
        NOT: {
          id: id,
        },
      },
    });
    const rgExists = await this.prismaService.fornecedor.findUnique({
      where: {
        rg: termo,
        NOT: {
          id: id,
        },
      },
    });
    const cnpjExists = await this.prismaService.fornecedor.findUnique({
      where: {
        cnpj: termo,
        NOT: {
          id: id,
        },
      },
    });
    const razaoExists = await this.prismaService.fornecedor.findUnique({
      where: {
        razaoSocial: termo,
        NOT: {
          id: id,
        },
      },
    });
    if (
      !emailExists &&
      !cpfExists &&
      !rgExists &&
      !cnpjExists &&
      !razaoExists
    ) {
      return await 0;
    }
    return await 1;
  }

  async create(createFornecedoresDto: CreateFornecedorDto) {
    if (
      !(await this.findExistingFornecedor(undefined, createFornecedoresDto.email)) &&
      !(await this.findExistingFornecedor(undefined, createFornecedoresDto.cpf)) &&
      !(await this.findExistingFornecedor(undefined, createFornecedoresDto.rg)) &&
      !(await this.findExistingFornecedor(undefined, createFornecedoresDto.cnpj)) &&
      !(await this.findExistingFornecedor(undefined, createFornecedoresDto.razaoSocial))
    ) {
      return await this.prismaService.fornecedor.create({
        data: createFornecedoresDto,
      });
    }

    return { data: { message: 'fornecedor com dados repetidos' } };
  }

  async findAll() {
    return await this.prismaService.fornecedor.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.fornecedor.findFirst({where: {id}})
  }

  async update(id: number, updateFornecedoresDto: UpdateFornecedorDto) {
    const fornecedorExists = await this.findOne(id);
    if (fornecedorExists) {
      if (
        !(await this.findExistingFornecedor(fornecedorExists.id, updateFornecedoresDto.email)) &&
        !(await this.findExistingFornecedor(fornecedorExists.id, updateFornecedoresDto.cpf)) &&
        !(await this.findExistingFornecedor(fornecedorExists.id, updateFornecedoresDto.rg)) &&
        !(await this.findExistingFornecedor(fornecedorExists.id, updateFornecedoresDto.cnpj)) &&
        !(await this.findExistingFornecedor(fornecedorExists.id, updateFornecedoresDto.razaoSocial))
      ) {
        return await this.prismaService.fornecedor.update({
          where: { id },
          data: updateFornecedoresDto,
        });
      }
      return { data: { message: 'fornecedor com dados repetidos' } };
    }
    return { data: { message: 'fornecedor não existe' } };
  }

  async remove(id: number) {
    const fornecedorExists = await this.findOne(id);
    if (fornecedorExists) {
      return await this.prismaService.fornecedor.delete({ where: { id } });
    }
    return { data: { message: 'fornecedor não existe' } };
  }
}
