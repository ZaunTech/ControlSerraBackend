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
    pais?:        string;
    cep?:         string;
    estado?:      string;
    cidade?:      string;
    bairro?:      string;
    rua?:       string;
    numero?:    string;
    complemento?: string;
    orcamentos?: Orcamento[];
    createdAt: Date;
    updatedAt: Date;
}
