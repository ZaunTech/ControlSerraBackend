import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutosBaseDto {
  @ApiProperty({
    description:
      'O titulo serve para identificar e pesquisar o produto base',
    example: 'Portão',
  })
  titulo: string;
  
  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes sobre o produto base',
    example: '2" x 6 m',
  })
  observacoes?: string;
}
