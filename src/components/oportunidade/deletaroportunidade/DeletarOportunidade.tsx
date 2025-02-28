import { useEffect, useState } from "react";
import { deletar, buscar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../modal/Modal";
import Oportunidade from "../../../models/Oportunidade";

function DeletarOportunidade() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>()

    const [isLoading, setIsLoading] = useState(false);
    const [oportunidade, setOportunidade] = useState<Oportunidade>({} as Oportunidade);
    const [isOpen, setIsOpen] = useState(true);




    async function buscarPorId(id: string) {
        try {
            await buscar(`/oportunidades/${id}`, setOportunidade);
        } catch (error) {
            alert("Oportunidade não encontrada!");
            retornar();
        }
    }

    useEffect(() => {
        if (id) buscarPorId(id);
    }, [id]);

    async function handleDeletarOportunidade() {
        if (!id) return;

        setIsLoading(true);
        try {
            await deletar(`/oportunidades/${id}`);
            alert("Oportunidade apagada com sucesso!");
        } catch (error) {
            alert("Erro ao apagar a oportunidade!");
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        setIsOpen(false);
        navigate("/oportunidade");
    }

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <div className="container w-full mx-auto">
                <h1 className="py-4 text-4xl text-center">Deletar Oportunidade</h1>
                <p className="mb-4 font-semibold text-center">
                    Você tem certeza de que deseja apagar a oportunidade a seguir?
                </p>

                {oportunidade ? (
                    <div className="flex flex-col justify-between overflow-hidden">
                        <p className="h-full p-8 text-3xl text-center bg-white">
                            {oportunidade.nome}
                        </p>
                        <div className="flex justify-center gap-5">
                            <button
                                className="w-30 rounded-xl py-2 bg-[#9B85FA] text-white hover:bg-[#5932EA]"
                                onClick={retornar}
                            >
                                Não
                            </button>
                            <button
                                className="w-30 rounded-xl bg-[#C9FFB6] text-[#323232] hover:bg-[#45FCAD]"
                                onClick={handleDeletarOportunidade}
                                disabled={isLoading}
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
                ) : (
                    <p className="text-center text-red-500">Oportunidade não encontrada.</p>
                )}
            </div>
        </Modal>
    );
}

export default DeletarOportunidade;
