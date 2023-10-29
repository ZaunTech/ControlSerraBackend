import { ApiProperty } from '@nestjs/swagger';
import { contaTipo } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Matches,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({
    description: 'O email serve para descrever o email do cliente',
    example: 'email@gmail.com',
  })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  @IsEmail({}, { message: 'O e-mail inserido não é válido' })
  email: string;

  @ApiProperty({
    description:
      'O telefone serve para descrever o numero de telefone do cliente',
    example: '1734112736',
  })
  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @IsNumberString({}, { message: 'O telefone inserido não é válido' })
  telefone: string;

  @ApiProperty({
    description: 'O tipo serve para diferenciar entre pessoa fisica e juridica',
    example: 'Fisica',
  })
  @IsNotEmpty({ message: 'O tipo da conta não pode estar vazio' })
  @IsEnum(contaTipo, {
    message: 'O tipo da conta não condiz com as opções disponíveis',
  })
  contaTipo: contaTipo;

  @ApiProperty({
    description:
      'O nome serve para identificar o cliente, caso seja pessoa fisica',
    example: 'João Pedro',
  })
  @IsString({ message: 'O nome inserido não é válido' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O nome só pode ter letras' })
  nome?: string;

  @ApiProperty({
    description:
      'O CPF serve para identificar o cliente, caso seja pessoa fisica',
    example: '02370334029',
  })
  @IsNumberString({}, { message: 'O CPF inserido não é válido' })
  cpf?: string;

  @ApiProperty({
    description:
      'O RG serve para identificar o cliente, caso seja pessoa fisica',
    example: '114421225',
  })
  @IsNumberString({}, { message: 'O RG inserido não é válido' })
  rg?: string;

  @ApiProperty({
    description:
      'O nome fantasia serve para identificar o cliente, caso seja pessoa juridica',
    example: 'ZawnTech',
  })
  @IsString({ message: 'O nome fantasia inserido não é válido' })
  nomeFantasia?: string;

  @ApiProperty({
    description:
      'A razão social serve para identificar o cliente, caso seja pessoa juridica',
    example: 'Industria mecanica modelo Ltda.',
  })
  @IsString({ message: 'A razão social inserida não é válida' })
  razaoSocial?: string;

  @ApiProperty({
    description:
      'O CNPJ serve para identificar o cliente, caso seja pessoa juridica',
    example: '31895255000193',
  })
  @IsNumberString({}, { message: 'O CNPJ inserido não é válido' })
  cnpj?: string;

  @ApiProperty({
    description:
      'O pais serve para identificar a região onde o cliente se encontra',
    example: 'Brasil',
  })
  @IsString({ message: 'O país inserido não é válido' })
  pais?: string;

  @ApiProperty({
    description:
      'O CEP serve para identificar a região onde o cliente se encontra',
    example: '69918170',
  })
  @IsNumberString({}, { message: 'O CEP inserido não é válido' })
  cep?: string;

  @ApiProperty({
    description:
      'O estado serve para identificar a região onde o cliente se encontra',
    example: 'SP',
  })
  @IsString({ message: 'O estado inserido não é válido' })
  estado?: string;

  @ApiProperty({
    description:
      'A cidade serve para identificar a região onde o cliente se encontra',
    example: 'Sorocaba',
  })
  @IsString({ message: 'A cidade inserida não é válida' })
  cidade?: string;

  @ApiProperty({
    description:
      'O bairro serve para identificar o local onde o cliente se encontra',
    example: 'Vila Barão',
  })
  @IsString({ message: 'O bairro inserido não é válido' })
  bairro?: string;

  @ApiProperty({
    description:
      'A rua serve para identificar o local onde o cliente se encontra',
    example: 'Rua Manuel Lourenço Rodrigues',
  })
  @IsString({ message: 'A rua inserida não é válida' })
  rua?: string;

  @ApiProperty({
    description:
      'O numero serve para identificar o local onde o cliente se encontra',
    example: '44',
  })
  @IsNumberString({}, { message: 'O numero inserido não é válido' })
  numero?: string;

  @ApiProperty({
    description:
      'O complemento serve para dar informações adicionais para identificar o local onde o cliente se encontra',
    example: 'apt. 42',
  })
  @IsString({ message: 'O complemento inserido não é válido' })
  complemento?: string;
}
