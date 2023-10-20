import { contaTipo } from "@prisma/client"
import { Orcamento } from "../../orcamentos/entities/orcamento.entity";

export class Cliente {
    id: number;
    email: string;
    telefone: string;
    contaTipo: contaTipo;
    nome?:        string;
    cpf?:         string;
    rg?:          string;
    nomeFantasia?: string;
    razaoSocial?: string;
    cnpj?:        string;
    rua?:       string;
    numero?:    string;
    complemento?: string;
    cep?:         string;
    bairro?:      string;
    cidade?:      string;
    estado?:      string;
    pais?:        string;
    orcamentos?: Orcamento[];
    createdAt: Date;
    updatedAt: Date;
}
