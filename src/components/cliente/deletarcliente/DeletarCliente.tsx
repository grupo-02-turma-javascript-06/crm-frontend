import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Cliente from "../../../models/Cliente";
import Modal from "../../modal/Modal";

function DeletarCliente() {
    const navigate = useNavigate();
    // navigate(`/cardclienteaberto/${id}`);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cliente, setCliente] = useState<Cliente>({} as Cliente);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/cliente/${id}`, setCliente);
        } catch (error: any) {
            alert("Tema não encontrado!");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCliente() {
        setIsLoading(true);

        try {
            await deletar(`/cliente/${id}`);

            alert("Cliente apagado com sucesso");
        } catch (error) {
            alert("Erro ao apagar o Cliente");
        }

        setIsLoading(false);
        retornar();
    }

    const [isOpen, setIsOpen] = useState<boolean>(true);

    function retornar() {
        navigate(`/cardclienteaberto/${cliente.id}`)
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <div className="container w-full mx-auto">
                <h1 className="py-4 text-4xl text-center">Deletar Cliente</h1>
                <p className="mb-4 font-semibold text-center">
                    Você tem certeza de que deseja apagar o Cliente a seguir?
                </p>
                <div className="flex flex-col justify-between overflow-hidden">
                    <p className="h-full p-8 text-3xl text-center bg-white">
                        {cliente.nome}
                    </p>
                    <div className="flex justify-center gap-5">
                        <button
                            className="w-30 rounded-xl py-2 bg-[#9B85FA] text-white hover:bg-[#5932EA] "
                            onClick={retornar}
                        >
                            Não
                        </button>
                        <button
                            className="w-30  rounded-xl bg-[#C9FFB6] text-[#323232] hover:bg-[#45FCAD]"
                            onClick={deletarCliente}
                        >
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <span>Sim</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default DeletarCliente;
