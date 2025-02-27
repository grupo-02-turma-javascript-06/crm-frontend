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
            cliente: cliente,
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
            <h2>
                <span>
                    {id !== undefined ? "Atualizar" : "Cadastrar"} Oportunidade
                </span>
            </h2>
            <form className="" onSubmit={gerarNovaOportunidade}>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        className=""
                        placeholder="Nome"
                        name="nome"
                        value={oportunidade.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                        }
                        required
                    />
                </div>
                <div>
                    <label>Valor</label>
                    <input
                        type="text"
                        className=""
                        placeholder="Valor"
                        name="valor"
                        value={oportunidade.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                        }
                        required
                    />
                </div>
                <div>
                    <label>Abertura</label>
                    <input
                        type="date"
                        className=""
                        name="abertura"
                        value={oportunidade.abertura}
                        readOnly
                    />
                </div>

                <div>
                    <label>Data de fechamento</label>
                    <input
                        type="date"
                        className=""
                        placeholder="Término"
                        name="termino"
                        value={oportunidade.termino || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                        }
                        required
                    />
                </div>
                <div>
                    <label>Status</label>
                    <select
                        name="status"
                        id="status"
                        className=""
                        onChange={(e) => atualizarEstado(e)}
                        value={oportunidade.status}
                        required
                    >
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
                    <label>Cliente da Oportunidade</label>
                    <select
                        name="cliente"
                        id="cliente"
                        className=""
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
                <button
                    type="submit"
                    className="" /* disabled={carregandoCliente} */
                >
                    <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
                </button>
            </form>
        </Modal>
    );
}

export default FormOportunidade;
