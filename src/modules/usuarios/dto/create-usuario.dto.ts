import { tipoUsuario } from "@prisma/client";
import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    tipoUsuario: tipoUsuario;
    @IsString()
    nome: string;
    @IsString()
    @MaxLength(11)
    @Matches(/(?<=\D|^)(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})(?=\D|$).*$/,{
        message:"CPF Invalido"
    })
    cpf: string;
    @IsString()
    @Matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+).*$/i,{
        message:"Envie um email valido para acesso"
    })
    email: string;
    @IsString()
    @Matches(/(\(\d{2}\)\s)(\d{4,5}\-\d{4}).*$/)
    telefone: string;
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'senha muito fraca',
    })
    senha: string;
}
