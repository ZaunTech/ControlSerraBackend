import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { tipoUsuario } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {

    @ApiProperty({
        description:
          'O tipo de usuario serve para descrever o nivel de acesso dele',
        example: 'Vendedor',
      })
      @IsOptional()
      @IsEnum(tipoUsuario)
      tipoUsuario?: tipoUsuario;
    
      @ApiProperty({
        description:
          'O nome do usuário serve para identificar e pesquisar o usuário',
        example: 'Sérgio Moraes',
      })
      @IsOptional()
      @IsString()
      nome?: string;
    
      @ApiProperty({
        description: 'O CPF serve para identificar o usuario',
        example: '02370334029',
      })
      @IsOptional()
      @IsString()
      @MaxLength(11,{message: "Limite Maximo de caracteres para CPF"})
      @Matches(/(?<=\D|^)(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})(?=\D|$).*$/,{
        message:"CPF Invalido"
      })
      cpf?: string;
    
      @ApiProperty({
        description: 'O email serve para descrever o email do usuario',
        example: 'email@gmail.com',
      })
      @IsOptional()
      @IsString()
      @Matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,{
      message: "Insira um endereco de email valido"
      })
      email?: string;
    
      @ApiProperty({
        description:
          'O telefone serve para descrever o numero de telefone do usuario',
        example: '1734112736',
      })
      @IsOptional()
      @IsString()
      telefone?: string;
    
      @ApiProperty({
        description:
          'A senha serve para o usuário realizar o acesso dentro da aplicação',
        example: 'acgf_HH-17_28',
      })
      @IsOptional()
      @IsString()
      @MinLength(8)
      @MaxLength(20)
      @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'senha muito fraca. A senha precisa de 8 a 20 caracteres',
      })
      senha?: string;
      token?: string;

}
