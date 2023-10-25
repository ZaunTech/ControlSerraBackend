import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @ApiProperty({
    description:
      'O titulo serve para identificar o produto',
    example: 'Portão',
  })
  @IsOptional()
  @IsString()
  titulo?: string;
  
  @ApiProperty({
    description:
      'A quantidade serve para descrever quantas unidades deste produto serão necessárias para o orçamento',
    example: '3',
  })
  @IsOptional()
  @IsNumber()
  quantidade?: number;
  
  @ApiProperty({
    description:
      'O valor unitario serve para descrever o valor do produto como uma unica unidade',
    example: '340',
  })
  @IsOptional()
  @IsNumber()
  valorUnitario?: number;
  
  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes sobre o produto',
    example: '2" x 6 m',
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
  
  @ApiProperty({
    description:
      'O id do orçamento serve para indentificar qual o orçamento a quem este produto pertence',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  orcamentoId?: number;
}
