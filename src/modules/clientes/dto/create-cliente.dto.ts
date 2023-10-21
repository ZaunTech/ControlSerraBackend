import { contaTipo } from "@prisma/client";
import { Orcamento } from "../../orcamentos/entities/orcamento.entity";

export class CreateClienteDto {
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
}
