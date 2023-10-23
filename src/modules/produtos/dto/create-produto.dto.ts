import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto {
  @ApiProperty({
    description:
      'O titulo serve para identificar o produto',
    example: 'Portão',
  })
  titulo: string;
  
  @ApiProperty({
    description:
      'A quantidade serve para descrever quantas unidades deste produto serão necessárias para o orçamento',
    example: '3',
  })
  quantidade: number;
  
  @ApiProperty({
    description:
      'O valor unitario serve para descrever o valor do produto como uma unica unidade',
    example: '340',
  })
  valorUnitario?: number;
  
  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes sobre o produto',
    example: '2" x 6 m',
  })
  observacoes?: string;
  
  @ApiProperty({
    description:
      'O id do orçamento serve para indentificar qual o orçamento a quem este produto pertence',
    example: '1',
  })
  orcamentoId: number;
}
