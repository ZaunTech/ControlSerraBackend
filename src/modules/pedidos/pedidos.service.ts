import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { Pedido } from './entities/pedido.entity';
import { Orcamento } from '../orcamentos/entities/orcamento.entity';

@Injectable()
export class PedidosService {
  constructor(private readonly prismaService: PrismaService) {}
  async countAll(titulo_like: string = '') {
    return await this.prismaService.pedido.count({ where:{
      OR: [
       
        { orcamento:{ cliente: { nome: { contains: titulo_like, mode: 'insensitive' } }} },
        { orcamento:{ cliente: { razaoSocial: { contains: titulo_like , mode: 'insensitive'} }} },
        { orcamento:{ cliente: { nomeFantasia: { contains: titulo_like , mode: 'insensitive'} }} },
      ],
    },});
  }

  async findAllWithPagination(page: number, perPage: number, titulo_like? : string) {
    const skip = (page - 1) * perPage;
    let  pedidos = Pedido[""];
    if(titulo_like){

      pedidos = await this.prismaService.pedido.findMany({
      skip,
      take: perPage,
      where:{
        OR: [
         
          { orcamento:{ cliente: { nome: { contains: titulo_like, mode: 'insensitive' } }} },
          { orcamento:{ cliente: { razaoSocial: { contains: titulo_like , mode: 'insensitive'} }} },
          { orcamento:{ cliente: { nomeFantasia: { contains: titulo_like , mode: 'insensitive'} }} },
        ],
      },
    });
  }else{
    pedidos = await this.prismaService.pedido.findMany({
      skip,
      take: perPage,
    });
  } 
    return  pedidos ;
  }

  async create(createPedidoDto: CreatePedidoDto) {
    const orcamentoExists = await this.prismaService.orcamento.findFirst({
      where: {
        id: createPedidoDto.idOrcamento,
      },
    });
    if (orcamentoExists) {
      if (orcamentoExists.status === 'Concluido') {
        const pedidoExists = await this.findOne(createPedidoDto.idOrcamento);
        if (!pedidoExists) {
          return await this.prismaService.pedido.create({
            data: createPedidoDto,
          });
        }
        return { data: { message: 'Pedido já existe' } };
      }
      return { data: { message: 'Orçamento ainda não foi concluido' } };
    }
    return { data: { message: 'Orçamento não existe' } };
  }

  async findAll() {
    return await this.prismaService.pedido.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.pedido.findFirst({ where: { id }, include: {orcamento: true} });
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const orcamentoExists = await this.prismaService.orcamento.findFirst({
      where: {
        id: updatePedidoDto.idOrcamento,
      },
    });
    if (orcamentoExists) {
      const pedidoExists = await this.findOne(id);
      if (pedidoExists) {
        return await this.prismaService.pedido.update({
          where: { id },
          data: updatePedidoDto,
        });
      }
      return { data: { message: 'Pedido não existe' } };
    }
    return { data: { message: 'Orçamento não existe' } };
  }

  async remove(id: number) {
    const pedidoExists = await this.findOne(id);
    if (pedidoExists) {
      return await this.prismaService.pedido.delete({ where: { id } });
    }
    return { data: { message: 'Pedido não existe' } };
  }
}
