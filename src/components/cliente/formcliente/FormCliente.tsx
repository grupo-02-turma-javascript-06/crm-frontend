import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Cliente from "../../../models/Cliente";

function FormCliente() {
    const navigate = useNavigate();

    const [cliente, setCliente] = useState<Cliente>({} as Cliente);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovoCliente(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!id) {
            cliente.data_inscricao = new Date().toString();
        }

        if (id !== undefined) {
            try {
                await atualizar("/cliente", cliente, setCliente);

                ToastAlerta("O cliente foi atualizado com sucesso!", "sucesso");
            } catch (error) {
                ToastAlerta("Erro ao atualizar o cliente!", "error");
            }
        } else {
            try {
                await cadastrar("/cliente", cliente, setCliente);

                ToastAlerta("O cliente foi cadastrado com sucesso!", "sucesso");
            } catch (error) {
                ToastAlerta("Erro ao cadastrar o cliente!", "error");
            }
        }

        retornar();
    }

    async function buscarPorId(id: string) {
        try {
            await buscar(`/cliente/${id}`, setCliente);
        } catch (error) {}
    }

    function retornar() {
        navigate("/cliente");
    }

    return (
        <div className="h-auto min-h-screen flex items-center justify-center bg-[#FFFFFF] p-4">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto bg-[#FFFFFF] rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-bg-black mb-6 sm:mb-8">
                    <span>
                        {id === undefined ? "Cadastrar" : "Editar"} Cliente
                    </span>
                </h2>

                <form
                    className="space-y-4 mt-2 sm:mt-4"
                    onSubmit={gerarNovoCliente}
                >
                    <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Nome:
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome do cliente"
                            name="nome"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            value={cliente.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                            required
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            E-mail:
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o E-mail"
                            name="email"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            value={cliente.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                            required
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Telefone:
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o telefone"
                            name="telefone"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            value={cliente.telefone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                            required
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Foto:
                        </label>
                        <input
                            type="text"
                            placeholder="Insira o link da imagem"
                            name="foto"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            value={cliente.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Histórico de contato:
                        </label>
                        <input
                            type="text"
                            placeholder="Descreva o histórico de contato"
                            name="historico"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            value={cliente.historico}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <button
                            type="button"
                            className="w-full bg-[#9B85FA] hover:bg-[#5932EA] text-[#FFFFFF] rounded-full py-2"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-[#C9FFB6] hover:bg-[#45FCAD] text-[#323232] rounded-full py-2"
                        >
                            <span>
                                {id === undefined ? "Cadastrar" : "Editar"}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCliente;
