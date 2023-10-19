import { contaTipo } from "@prisma/client"

export class Fornecedor {
    id: number
    email: string
    telefone: string
    contaTipo: contaTipo
    rua?:       string 
    numero?:    string
    complemento?: string
    cep?:         string
    bairro?:      string
    cidade?:      string
    estado?:      string
    pais?:        string
    Nome?:        string
    cpf?:         string
    rg?:          string
    nomeFantasia?: string
    razaoSocial?: string
    cnpj?:        string
    createdAt: Date
    updatedAt: Date
}
