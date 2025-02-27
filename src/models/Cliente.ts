export default interface Cliente{
    id: number;
    nome: string;
    telefone: string;
    email: string;
    foto: string;
    historico: string;
    data_inscricao: Date;
    oportunidade?: Oportunidade | null
}