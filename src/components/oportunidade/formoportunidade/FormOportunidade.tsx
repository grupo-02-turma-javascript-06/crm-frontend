import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Modal from "../../modal/Modal";
import Oportunidade, { StatusOportunidade } from "../../../models/Oportunidade";
import Cliente from "../../../models/Cliente";

function FormOportunidade() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [oportunidade, setOportunidade] = useState<Oportunidade>({
        nome: "",
        valor: "",
        abertura: new Date().toISOString().split("T")[0],
        termino: "",
        status: StatusOportunidade.ABERTA,
        cliente: undefined,
    });
    
    const statusOptions = Object.values(StatusOportunidade);

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [cliente, setCliente] = useState<Cliente>({ id: 0, nome: "" });

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        buscarClientes();
        if (id !== undefined) {
            buscarClientePorId(id);
        }
    }, [id]);

    useEffect(() => {
        setOportunidade({ 
            ...oportunidade, 
            cliente: cliente 
        });
    }, [cliente]);

    async function buscarClientes() {
        try {
            await buscar("/clientes", setClientes);
        } catch (error: any) {}
    }

    async function buscarClientePorId(id: string) {
        try {
            await buscar(`/clientes/${id}`, setCliente);
        } catch (error: any) {}
    }

    function atualizarEstado(
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;

        if (name === "abertura") return;

        setOportunidade((prev) => ({
            ...prev,
            [name]: name === "status" ? (value as StatusOportunidade) : value,
        }));
    }

    async function gerarNovaOportunidade(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const dadosOportunidade = {
            ...oportunidade,
            abertura: 
                oportunidade.abertura || new Date().toISOString().split("T")[0],
        };

        if (id !== undefined) {
            try {
                await atualizar(
                    "/oportunidades", 
                    dadosOportunidade, 
                    setOportunidade
                );
                ToastAlerta("Oportunidade atualizada com sucesso", "sucesso");
            } catch (error) {
                ToastAlerta("Erro ao atualizar a Oportunidade", "erro");
            }
        } else {
            try {
                await cadastrar(
                    "/oportunidade", 
                    dadosOportunidade, 
                    setOportunidade
                );
                ToastAlerta("Oportunidade cadastrada com sucesso", "sucesso");
            } catch (error) {
                ToastAlerta("Erro ao cadastrar a Oportunidade", "erro");
            }
        }
        retornar();
    }

    function retornar() {
        setIsOpen(false);
        navigate("/oportunidades");
    }

    const carregandoCliente = cliente.nome === "";

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <div className="h-auto min-h-screen flex items-center justify-center bg-[#FFFFFF] p-4">
                <div className="w-full max-w-xl bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-bg-black mb-6">
                        {id !== undefined ? "Atualizar" : "Cadastrar"} Oportunidade
                    </h2>
                    <form className="space-y-4" onSubmit={gerarNovaOportunidade}>
                        <div>
                            <label className="text-sm text-[#9197B3]"
                            >
                                Nome:
                            </label>
                            <input 
                            type="text" 
                            name="nome" 
                            value={oportunidade.nome} 
                            onChange={atualizarEstado} 
                            required className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-[#9197B3]"
                            >
                                Valor:
                                </label>
                            <input 
                            type="text" 
                            name="valor" 
                            value={oportunidade.valor} 
                            onChange={atualizarEstado} 
                            required className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-[#9197B3]"
                            >
                                Data de fechamento:
                            </label>
                            <input 
                            type="date" 
                            name="termino" 
                            value={oportunidade.termino || ""} 
                            onChange={atualizarEstado} 
                            required className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-[#9197B3]"
                            >
                                Status:
                            </label>
                            <select 
                                name="status" 
                                value={oportunidade.status} 
                                onChange={atualizarEstado} 
                                required className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2">
                                
                                    <option value="" disabled>
                                        Selecione o Status da Oportunidade
                                    </option>

                                        {statusOptions.map((status) => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div>
                        <label className="text-sm text-[#9197B3]">Cliente:</label>
                        <select
                            name="cliente"
                            id="cliente"
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                            onChange={(e) =>
                                buscarClientePorId(e.currentTarget.value)
                        }
                        value={
                            oportunidade.id === undefined
                                ? ""
                                : oportunidade.cliente?.id
                        }
                        >
                                <option value="" disabled>
                                    Selecione um Cliente
                                </option>
                                {clientes.map((cliente) => {
                                    <>
                                    <option value={cliente.id}>
                                        {cliente.nome}
                                    </option>
                                </>;
                            })}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <button 
                                type="button" 
                                onClick={retornar} 
                                className="w-full bg-[#9B85FA] hover:bg-[#5932EA] text-[#FFFFFF] rounded-full py-2"
                                >
                                    Cancelar
                                </button>
                            <button 
                                type="submit" 
                                className="w-full bg-[#C9FFB6] hover:bg-[#45FCAD] text-[#323232] rounded-full py-2"
                                >
                                <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
export default FormOportunidade;