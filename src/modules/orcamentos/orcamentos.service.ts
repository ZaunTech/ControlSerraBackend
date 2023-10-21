import { Injectable } from '@nestjs/common';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class OrcamentosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrcamentoDto: CreateOrcamentoDto) {
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
        produtos?: {
          create: 
        }
      }
    })
  }

  async findAll() {
    return await this.prismaService.orcamento.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.orcamento.findFirst({ where: { id } })
  }

  async update(id: number, updateOrcamentoDto: UpdateOrcamentoDto) {
    return await this.prismaService.orcamento.update({
      where: { id },
      data: {
        totalMaoObra?: updateOrcamentoDto.totalMaoObra,
        totalMateriais?: updateOrcamentoDto.totalMateriais,
        valorPago?: updateOrcamentoDto.valorPago,
        status?: updateOrcamentoDto.status,
        prazoEstimadoProducao?: updateOrcamentoDto.prazoEstimadoProducao,
        observacoes?: updateOrcamentoDto.observacoes,
        idCliente?: updateOrcamentoDto.idCliente,
        idPedido?: updateOrcamentoDto.idPedido,
        produtos?: updateOrcamentoDto.produtos,
    })
  }

  async remove(id: number) {
    return await this.prismaService.orcamento.delete({ where: { id } })
  }
}