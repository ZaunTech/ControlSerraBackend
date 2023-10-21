import { Injectable } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class OrcamentosService {
  constructor(private readonly prismaService: PrismaService) {}
  async create() {
    return `This action returns all orcamentos`;
  }
  /*async create(createOrcamentoDto: CreateOrcamentoDto) {
    return await this.prismaService.orcamento.create({
      data: {
        validade?: createOrcamentoDto.validade,
        totalMaoObra?: createOrcamentoDto.totalMaoObra,
        totalMateriais?: createOrcamentoDto.totalMateriais,
        valorPago?: createOrcamentoDto.valorPago,
        status: createOrcamentoDto.status,
        prazoEstimadoProducao: createOrcamentoDto.prazoEstimadoProducao,
        observacoes?: createOrcamentoDto.observacoes,
        idCliente: createOrcamentoDto.idCliente,
        idPedido?: createOrcamentoDto.idPedido,
        produtos?: createOrcamentoDto.produtos
      }
    })
  }*/

  async findAll() {
    return `This action returns all orcamentos`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} orcamento`;
  }

  async update(id: number, updateOrcamentoDto: UpdateOrcamentoDto) {
    return `This action updates a #${id} orcamento`;
  }

  async remove(id: number) {
    return `This action removes a #${id} orcamento`;
  }
}