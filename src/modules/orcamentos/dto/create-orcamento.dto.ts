import { ApiProperty } from '@nestjs/swagger';
import { status as Status } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrcamentoDto {
  @ApiProperty({
    description:
      'A validade serve para descrever até qual data o orçamento será valido',
    example: '2023-10-23T17:30:44.382Z',
  })
  @IsOptional()
  @IsDate()
  validade?: Date;

  @ApiProperty({
    description:
      'O total mão de obra serve para descrever o custo total de mão de obra para produzir os itens do orçamento',
    example: '750',
  })
  @IsOptional()
  @IsNumber()
  totalMaoObra?: number;

  @ApiProperty({
    description:
      'O total materiais serve para descrever o custo total das compras do materiais para produzir os itens do orçamento',
    example: '700',
  })
  @IsOptional()
  @IsNumber()
  totalMateriais?: number;

  @ApiProperty({
    description:
      'O status serve para descrever a atual situação do orçamento',
    example: 'Pendente',
  })
  @IsEnum(Status)
  status: Status;

  @ApiProperty({
    description:
      'O prazo estimado de produção serve para descrever uma estimativa de quanto tempo será necessário para concluir o orçamento, descrito em dias',
    example: '90',
  })
  @IsNotEmpty({message:'O Orcamento precisa ter um valor estimado'})
  prazoEstimadoProducao: number;

  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes obre o orçamento',
    example: '2 portões e 1 grade para janela',
  })
  @IsOptional()
  @IsString()
  observacoes?: string;

  @ApiProperty({
    description:
      'O id do cliente serve para indentificar qual o cliente a quem este orçamento pertence',
    example: '5',
  })
  @IsNotEmpty({message: 'O orcamento precisa ter um cliente relacionado a ele'})
  @IsNumber()
  idCliente: number;
}
