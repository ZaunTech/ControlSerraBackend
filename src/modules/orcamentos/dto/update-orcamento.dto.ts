import { PartialType } from '@nestjs/mapped-types';
import { CreateOrcamentoDto } from './create-orcamento.dto';
import { status as Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateOrcamentoDto extends PartialType(CreateOrcamentoDto) {
  @ApiProperty({
    description:
      'A validade serve para descrever até qual data o orçamento será valido',
    example: '2023-10-23T17:30:44.382Z',
  })
  @IsDate({message: 'Validade inserida não é uma data'})
  validade?: Date;

  @ApiProperty({
    description:
      'O total mão de obra serve para descrever o custo total de mão de obra para produzir os itens do orçamento',
    example: '750',
  })
  @IsNumber({},{ message: 'Valor total de mao de obra deve ser um numero'})
  totalMaoObra?: number;

  @ApiProperty({
    description:
      'O total materiais serve para descrever o custo total das compras do materiais para produzir os itens do orçamento',
    example: '700',
  })
  @IsNumber({},{ message: 'Valor total de materiais deve ser um numero'})
  totalMateriais?: number;

  @ApiProperty({
    description:
      'O status serve para descrever a atual situação do orçamento',
    example: 'Pendente',
  })
  @IsNotEmpty({ message: 'Status não pode ser vazio'})
  status?: Status;

  @ApiProperty({
    description:
      'O prazo estimado de produção serve para descrever uma estimativa de quanto tempo será necessário para concluir o orçamento, descrito em dias',
    example: '90',
  })
  @IsNumber({},{ message: 'Prazo estimado deve ser um numero'})
  prazoEstimadoProducao?: number;

  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes obre o orçamento',
    example: '2 portões e 1 grade para janela',
  })
  @IsString({ message: 'Observação não é de um tipo valido'})
  observacoes?: string;

  @ApiProperty({
    description:
      'O id do cliente serve para indentificar qual o cliente a quem este orçamento pertence',
    example: '1',
  })
  @IsNotEmpty({ message: 'Cliente não pode ser vazio'})
  @IsNumber({},{ message: 'Id do cliente deve ser um numero'})
  idCliente?: number;
}
