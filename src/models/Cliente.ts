import Oportunidade from "./Oportunidade.ts";

export default interface Cliente {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    foto: string;
    historico: string;
    data_inscricao: string;
    oportunidade?: Oportunidade | null;
}
