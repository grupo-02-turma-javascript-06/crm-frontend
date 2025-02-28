import { PencilSimple, Trash, WhatsappLogo } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cliente from "../../../models/Cliente";
import Modal from "../../modal/Modal";

interface CardClienteAbertoProps {
    cliente: Cliente;
}

function CardClienteAberto({ cliente }: CardClienteAbertoProps) {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(true);

    function retornar() {
        setIsOpen(false);
        navigate("/cardcliente");
    }

    return (
        <Modal isOpen={isOpen} onClose={retornar}>
            <div className="flex justify-between items-center ">
                <div className="flex flex-col justify-between items-center bg-white p-8 min-w-[90%] md:min-h-112 md:min-w-171 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center md:mt-10">
                        <div className="w-60 h-60 rounded-full overflow-hidden">
                            <img
                                src="https://ik.imagekit.io/madsik/REACT/PERFIL/perfil-catarina.svg?updatedAt=1739678162067" /* {cliente.foto} */
                                alt="Foto Cliente"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col mt-5">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {cliente.nome}
                            </h2>
                            <p className="text-gray-600 text-lg pt-4">
                                {cliente.email}
                            </p>
                            <p className="text-gray-600 text-lg pt-2">
                                {cliente.telefone}
                            </p>
                            <p className="text-gray-600 text-lg pt-2">
                                {cliente.data_inscricao}
                            </p>
                            <p className="text-gray-600 text-lg pt-2">
                                {cliente.historico}
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between mt-10 top-100">
                        <div className="flex gap-3">
                            <Link to={"/deletarcliente"}>
                                <button className="text-gray-500 hover:text-red-500">
                                    <Trash size={40} weight="light" />
                                </button>
                            </Link>

                            <button className="text-gray-500 hover:text-[#5932EA]">
                                <PencilSimple size={40} weight="light" />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button className="text-green-500">
                                <WhatsappLogo size={40} weight="fill" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default CardClienteAberto;
