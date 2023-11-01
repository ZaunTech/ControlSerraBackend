import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Cotacao {
  id: number;
  @IsNotEmpty({ message: 'A data não pode estar vazia' })
  @IsDateString({}, { message: 'A data inserida não é válida' })
  data: Date;
  obsoleta: boolean;
  @IsNotEmpty({ message: 'O valor não pode estar vazio' })
  @IsNumber({}, { message: 'O valor inserido não é válido' })
  valor: number;
  @IsNotEmpty({ message: 'O fornecedor não pode estar vazio' })
  @IsNumber({}, { message: 'O fornecedor inserido não é válido' })
  idFornecedor: number;
  @IsNotEmpty({ message: 'O insumo não pode estar vazio' })
  @IsNumber({}, { message: 'O insumo inserido não é válido' })
  idInsumo: number;
  @IsNotEmpty({ message: 'A unidade não pode estar vazia' })
  @IsString({ message: 'A unidade inserida não é válida' })
  unidade: string;
  createdAt: Date;
  updatedAt: Date;
}
