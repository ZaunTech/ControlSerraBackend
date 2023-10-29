import { tipoUsuario } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, Matches } from 'class-validator';

export class Usuario {
  id: number;
  @IsNotEmpty({message: 'O tipo do usuário não poder estar vazio'})
  @IsEnum(tipoUsuario, {message: 'O tipo de usuário inserido não é válido'})
  tipoUsuario: tipoUsuario;
  @IsString({ message: 'O nome inserido não é válido' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O nome só pode ter letras' })
  nome: string;
  @IsNumberString({}, { message: 'O CPF inserido não é válido' })
  cpf: string;
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  @IsEmail({}, { message: 'O e-mail inserido não é válido' })
  email: string;
  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @IsNumberString({}, { message: 'O telefone inserido não é válido' })
  telefone: string;
  @IsString({message: 'A senha inserida não é válida'})
  senha: string;
  @IsString({message: 'O token inserido não é válido'})
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
