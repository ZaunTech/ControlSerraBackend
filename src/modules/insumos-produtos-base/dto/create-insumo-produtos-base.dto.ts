import { ApiProperty } from "@nestjs/swagger";

export class CreateInsumosProdutosBaseDto {
  @ApiProperty({
    description: 'A quantidade serve para descrever quantas unidades deste insumo serão necessárias para produzir o produto',
    example: '5',
  })
  quantidade: number;
  
  @ApiProperty({
    description: 'O id do produto base serve para descrever a qual produto base que um determinado insumo pertence',
    example: '1',
  })
  idProdutoBase: number;
  
  @ApiProperty({
    description: 'O id do insumo serve para descrever para qual insumo este insumo produto base aponta',
    example: '1',
  })
  idInsumo: number;
}
