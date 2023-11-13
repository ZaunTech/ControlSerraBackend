import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDto } from './create-insumo.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export class UpdateInsumoDto extends PartialType(CreateInsumoDto) {
  @ApiProperty({
    description: 'O titulo serve para pesquisar insumos',
    example: 'Tubo de metalon',
  })
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo?: string;
  
  @ApiProperty({
    description:
      'O Id da categoria serve para conectar o insumo a uma categoria',
    example: '1',
  })
  @IsNotEmpty({ message: 'Selecione uma categoria' })
  @IsNumber({}, { message: 'A categoria inserida não é válida' })
  idCategoria: number;
}
