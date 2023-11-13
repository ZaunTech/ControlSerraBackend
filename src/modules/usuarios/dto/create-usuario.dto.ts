import { ApiProperty } from '@nestjs/swagger';
import { tipoUsuario } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { Usuario } from '../entities/usuario.entity';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O tipo do usuário não poder estar vazio' })
  @IsEnum(tipoUsuario, { message: 'O tipo de usuário inserido não é válido' })
  tipoUsuario: tipoUsuario;

  @IsString({ message: 'O nome inserido não é válido' })
  nome: string;

  @IsNumberString({}, { message: 'O CPF inserido não é válido' })
  cpf: string;

  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  @IsEmail({}, { message: 'O e-mail inserido não é válido' })
  email: string;

  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @IsNumberString({}, { message: 'O telefone inserido não é válido' })
  telefone: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  senha: string;
}
