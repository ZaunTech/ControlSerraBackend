export class CreateProdutoDto {
  titulo: string;
  quantidade?: number;
  valorUnitario?: number;
  observacoes: string;
  orcamentoId: number;
}
