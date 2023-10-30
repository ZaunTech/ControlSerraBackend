import { PartialType } from '@nestjs/mapped-types';
import { CreateCotacaoDto } from './create-cotacao.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber,IsOptional, IsString } from 'class-validator';

export class UpdateCotacaoDto extends PartialType(CreateCotacaoDto) {
  @ApiProperty({
    description:
      'A data serve para descrever quando esta cotação foi realizada',
    example: '2023-10-23T17:30:44.382Z',
  })
  @IsOptional()
  @IsDate({ message: 'A data inserida não é válida' })
  data?: Date;

  @ApiProperty({
    description:
      'O valor serve para descrever o quanto o insumo de uma cotação especifica esta custando',
    example: '100',
  })
  @IsOptional()
  @IsNumber({}, { message: 'O valor inserido não é válido' })
  valor?: number;

  @ApiProperty({
    description:
      'O id do fornecedor serve para descrever com qual fornecedor foi realizada a cotação',
    example: 'NK Serralheria',
  })
  @IsNumber({}, { message: 'O fornecedor inserido não é válido' })
  @IsOptional()
  idFornecedor?: number;

  @ApiProperty({
    description:
      'O id do insumo serve para descrever para qual insumo esta cotação foi realizada',
    example: '1',
  })
  @IsOptional()
  @IsNumber({}, { message: 'O insumo inserido não é válido' })
  idInsumo?: number;

  @IsOptional()
  @IsString({ message: 'A unidade inserida não é válida' })
  unidade?: string;
}
