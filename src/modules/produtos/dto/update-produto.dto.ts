import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @ApiProperty({
    description: 'O titulo serve para identificar o produto',
    example: 'Portão',
  })
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo?: string;

  @ApiProperty({
    description:
      'A quantidade serve para descrever quantas unidades deste produto serão necessárias para o orçamento',
    example: '3',
  })
  @IsNotEmpty({ message: 'Informe a Quantidade' })
  @IsNumber({}, { message: 'A quantidade inserida não é válida' })
  quantidade: number;

  @ApiProperty({
    description:
      'O valor unitario serve para descrever o valor do produto como uma unica unidade',
    example: '340',
  })
  @IsOptional()
  @IsNumber({}, { message: 'O valor unitário inserido não é válido' })
  valorUnitario?: number;

  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes sobre o produto',
    example: '2" x 6 m',
  })
  @IsOptional()
  @IsString({ message: 'A observação inserida não é válida' })
  observacoes?: string;

  @ApiProperty({
    description:
      'O id do orçamento serve para indentificar qual o orçamento a quem este produto pertence',
    example: '1',
  })
  @IsNotEmpty({ message: 'O orçamento não pode estar vazio' })
  @IsNumber({}, { message: 'O orçamento inserido não é válido' })
  orcamentoId?: number;
}
