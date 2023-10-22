import { tipoUsuario } from "@prisma/client";

export class CreateUsuarioDto {
    tipoUsuario: tipoUsuario;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
}
