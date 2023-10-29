import { ApiProperty } from '@nestjs/swagger';
import { tipoUsuario } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, Matches } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({
    description:
      'O tipo de usuario serve para descrever o nivel de acesso dele',
    example: 'Vendedor',
  })
  @IsNotEmpty({message: 'O tipo do usuário não poder estar vazio'})
  @IsEnum(tipoUsuario, {message: 'O tipo de usuário inserido não é válido'})
  tipoUsuario: tipoUsuario;

  @ApiProperty({
    description:
      'O nome do usuário serve para identificar e pesquisar o usuário',
    example: 'Sérgio Moraes',
  })
  @IsString({ message: 'O nome inserido não é válido' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O nome só pode ter letras' })
  nome: string;

  @ApiProperty({
    description: 'O CPF serve para identificar o usuario',
    example: '02370334029',
  })
  @IsNumberString({}, { message: 'O CPF inserido não é válido' })
  cpf: string;

  @ApiProperty({
    description: 'O email serve para descrever o email do usuario',
    example: 'email@gmail.com',
  })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  @IsEmail({}, { message: 'O e-mail inserido não é válido' })
  email: string;

  @ApiProperty({
    description:
      'O telefone serve para descrever o numero de telefone do usuario',
    example: '1734112736',
  })
  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @IsNumberString({}, { message: 'O telefone inserido não é válido' })
  telefone: string;

  @ApiProperty({
    description:
      'A senha serve para o usuário realizar o acesso dentro da aplicação',
    example: '1234',
  })
  @IsString({message: 'A senha inserida não é válida'})
  senha: string;
  
  @IsString({message: 'O token inserido não é válido'})
  token: string;
}
