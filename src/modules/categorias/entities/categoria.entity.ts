import { Insumo } from '../../insumos/entities/insumo.entity';

export class Categoria {
    id:        number
    tipo:      string
    titulo:    string
    descricao: string
    insumos:   Insumo[]
    createdAt: Date
    updatedAt: Date
}
