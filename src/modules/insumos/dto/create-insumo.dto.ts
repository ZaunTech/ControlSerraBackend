import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class CreateInsumoDto {
  @ApiProperty({
    description: 'O titulo serve para pesquisar insumos',
    example: 'Tubo de metalon',
  })
  @IsNotEmpty({ message: 'O insumo deve ter um titulo' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O nome do insumo só pode ter letras' })
  titulo: string;

  @ApiProperty({
    description: 'A descrição serve para detalhar o insumo',
    example: '20 x 30 x 6.000 mm',
  })
  descricao?: string;

  @ApiProperty({
    description: 'A unidade de medida serve para destacar a forma que o insumo é medido',
    example: 'mm',
  })
  unidadeMedida?: string;

  @ApiProperty({
    description: 'O Id da categoria serve para conectar o insumo a uma categoria',
    example: '1',
  })
  idCategoria?: number;

}
