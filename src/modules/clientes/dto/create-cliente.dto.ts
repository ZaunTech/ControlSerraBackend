import { ApiProperty } from '@nestjs/swagger';
import { contaTipo } from '@prisma/client';

export class CreateClienteDto {
  @ApiProperty({
    description: 'O email serve para descrever o email do cliente',
    example: 'email@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'O telefone serve para descrever o numero de telefone do cliente',
    example: '1734112736',
  })
  telefone: string;

  @ApiProperty({
    description: 'O tipo serve para diferenciar entre pessoa fisica e juridica',
    example: 'Fisica',
  })
  contaTipo: contaTipo;

  @ApiProperty({
    description: 'O nome serve para identificar o cliente, caso seja pessoa fisica',
    example: 'João Pedro',
  })
  nome?: string;

  @ApiProperty({
    description: 'O CPF serve para identificar o cliente, caso seja pessoa fisica',
    example: '02370334029',
  })
  cpf?: string;

  @ApiProperty({
    description: 'O RG serve para identificar o cliente, caso seja pessoa fisica',
    example: '114421225',
  })
  rg?: string;

  @ApiProperty({
    description: 'O nome fantasia serve para identificar o cliente, caso seja pessoa juridica',
    example: 'ZawnTech',
  })
  nomeFantasia?: string;

  @ApiProperty({
    description: 'A razão social serve para identificar o cliente, caso seja pessoa juridica',
    example: 'Industria mecanica modelo Ltda.',
  })
  razaoSocial?: string;

  @ApiProperty({
    description: 'O CNPJ serve para identificar o cliente, caso seja pessoa juridica',
    example: '31895255000193',
  })
  cnpj?: string;

  @ApiProperty({
    description: 'O pais serve para identificar a região onde o cliente se encontra',
    example: 'Brasil',
  })
  pais?: string;

  @ApiProperty({
    description: 'O CEP serve para identificar a região onde o cliente se encontra',
    example: '69918170',
  })
  cep?: string;

  @ApiProperty({
    description: 'O estado serve para identificar a região onde o cliente se encontra',
    example: 'SP',
  })
  estado?: string;

  @ApiProperty({
    description: 'A cidade serve para identificar a região onde o cliente se encontra',
    example: 'Sorocaba',
  })
  cidade?: string;

  @ApiProperty({
    description: 'O bairro serve para identificar o local onde o cliente se encontra',
    example: 'Vila Barão',
  })
  bairro?: string;

  @ApiProperty({
    description: 'A rua serve para identificar o local onde o cliente se encontra',
    example: 'Rua Manuel Lourenço Rodrigues',
  })
  rua?: string;

  @ApiProperty({
    description: 'O numero serve para identificar o local onde o cliente se encontra',
    example: '44',
  })
  numero?: string;

  @ApiProperty({
    description: 'O complemento serve para dar informações adicionais para identificar o local onde o cliente se encontra',
    example: 'apt. 42',
  })
  complemento?: string;
}
