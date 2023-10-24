import { ApiProperty } from '@nestjs/swagger';
import { status as Status } from '@prisma/client';

export class CreateOrcamentoDto {
  @ApiProperty({
    description:
      'A validade serve para descrever até qual data o orçamento será valido',
    example: '2023-10-23T17:30:44.382Z',
  })
  validade?: Date;

  @ApiProperty({
    description:
      'O total mão de obra serve para descrever o custo total de mão de obra para produzir os itens do orçamento',
    example: '750',
  })
  totalMaoObra?: number;

  @ApiProperty({
    description:
      'O total materiais serve para descrever o custo total das compras do materiais para produzir os itens do orçamento',
    example: '700',
  })
  totalMateriais?: number;

  @ApiProperty({
    description:
      'O status serve para descrever a atual situação do orçamento',
    example: 'Pendente',
  })
  status: Status;

  @ApiProperty({
    description:
      'O prazo estimado de produção serve para descrever uma estimativa de quanto tempo será necessário para concluir o orçamento, descrito em dias',
    example: '90',
  })
  prazoEstimadoProducao: number;

  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes obre o orçamento',
    example: '2 portões e 1 grade para janela',
  })
  observacoes?: string;

  @ApiProperty({
    description:
      'O id do cliente serve para indentificar qual o cliente a quem este orçamento pertence',
    example: '5',
  })
  idCliente: number;
}
