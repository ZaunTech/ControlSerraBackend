import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, ValidateIf } from 'class-validator';

export class CreateInsumoDto {
  @ApiProperty({
    description: 'O titulo serve para pesquisar insumos',
    example: 'Tubo de metalon',
  })
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo: string;
  
  @ApiProperty({
    description:
      'O Id da categoria serve para conectar o insumo a uma categoria',
    example: '1',
  })
  @ValidateIf((object, value) => value !== undefined)
  @IsNumber({}, { message: 'A categoria inserida não é válida' })
  idCategoria: number;
}
