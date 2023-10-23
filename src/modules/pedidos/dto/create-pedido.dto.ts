import { ApiProperty } from '@nestjs/swagger';
import { status } from '@prisma/client';
export class CreatePedidoDto {
  @ApiProperty({
    description:
      'O pagamento serve para descrever o quanto o cliente pagará no total para o orçamento',
    example: '2400',
  })
  pagamento: number;
  
  @ApiProperty({
    description:
      'O status serve para descrever a atual situação do orçamento',
    example: 'Concluido',
  })
  status: status;
  
  @ApiProperty({
    description:
      'O id do orçamento serve para descrever a qual orçamento este pedido pertence',
    example: '1',
  })
  idOrcamento?: number;
}
