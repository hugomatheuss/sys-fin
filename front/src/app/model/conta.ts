export interface Conta {
    id?: number;
    fornecedor: string;
    valor: string;
    descricao: string;
    status: string;
    tipo: string;
    numeroDocumento: string;
    dataPagamento: string;
    dataVencimento: string;
}