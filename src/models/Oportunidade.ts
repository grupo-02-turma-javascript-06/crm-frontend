import Cliente from "./Cliente.ts";

export enum StatusOportunidade {
    ABERTA = "Aberta",
    PERDIDA = "Perdida",
    FECHADA = "Fechada",
}
export default interface Oportunidade {
    id?: number;
    nome: string;
    valor: string;
    abertura: string;
    data_atualizacao?: string;
    termino: string;
    status: StatusOportunidade;
    cliente: Cliente;
}
