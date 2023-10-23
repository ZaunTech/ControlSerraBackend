import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { tipoUsuario } from "@prisma/client";

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    tipoUsuario?: tipoUsuario;
    nome?: string;
    cpf?: string;
    email?: string;
    telefone?: string;
    senha?: string;
}
