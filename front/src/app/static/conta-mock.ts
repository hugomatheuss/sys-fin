import { Conta } from "../model/conta"

export const ContasMock: Array<Conta> = [
    {
        id: 1,
        fornecedor: 'PROFARMA',
        valor: '353,59',
        descricao: '',
        status: 'Pago',
        numeroDocumento: '62642',
        tipo: 'Não Operacional',
        dataVencimento: '2023-05-20',
        dataPagamento: '2023-05-07'
    },
    {
        id: 1,
        fornecedor: 'PROFARMA',
        valor: '500,59',
        descricao: '',
        status: 'Pago',
        numeroDocumento: '24234',
        tipo: 'Não Operacional',
        dataVencimento: '2023-05-20',
        dataPagamento: '2023-05-07'
    },
    {
        id: 1,
        fornecedor: 'FARMA',
        valor: '200,59',
        descricao: '',
        status: 'Pago',
        numeroDocumento: '435435',
        tipo: 'Não Operacional',
        dataVencimento: '2023-05-20',
        dataPagamento: '2023-05-07'
    }
]