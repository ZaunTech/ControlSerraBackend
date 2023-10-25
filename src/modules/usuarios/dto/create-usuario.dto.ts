import { ApiProperty } from '@nestjs/swagger';
import { tipoUsuario } from '@prisma/client';

export class CreateUsuarioDto {
  @ApiProperty({
    description:
      'O tipo de usuario serve para descrever o nivel de acesso dele',
    example: 'Vendedor',
  })
  tipoUsuario: tipoUsuario;

  @ApiProperty({
    description:
      'O nome do usuário serve para identificar e pesquisar o usuário',
    example: 'Sérgio Moraes',
  })
  nome: string;

  @ApiProperty({
    description: 'O CPF serve para identificar o usuario',
    example: '02370334029',
  })
  cpf: string;

  @ApiProperty({
    description: 'O email serve para descrever o email do usuario',
    example: 'email@gmail.com',
  })
  email: string;

  @ApiProperty({
    description:
      'O telefone serve para descrever o numero de telefone do usuario',
    example: '1734112736',
  })
  telefone: string;

  @ApiProperty({
    description:
      'A senha serve para o usuário realizar o acesso dentro da aplicação',
    example: '1234',
  })
  senha: string;

  token: string;
}
