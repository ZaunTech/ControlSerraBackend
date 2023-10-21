import { tipoUsuario } from "@prisma/client";
import { Orcamento } from "../../orcamentos/entities/orcamento.entity";

export class Usuario {
    id: number;
    tipoUsuario: tipoUsuario;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
    idOrcamento?: number;
    orcamento?: Orcamento
    createdAt: Date;
    updatedAt: Date;
}
