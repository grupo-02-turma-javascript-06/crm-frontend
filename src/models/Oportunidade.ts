import Cliente from "./Cliente";

export default interface Oportunidade {
    id: number;
    nome: string;
    valor: number;
    abertura: string;
    data_atualizacao: string;
    termino: string;
    status: string;
    cliente: Cliente;
}
