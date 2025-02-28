import { Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Cliente from "../../../models/Cliente";

interface CardClienteProps {
    cliente: Cliente;
}

function CardCliente({ cliente }: CardClienteProps) {
    return (
        <>
            <div className="flex justify-center mx-5 items-center pt-30">
                <div className="bg-white rounded-2xl shadow-lg min-h-88 min-w-74 text-center relative flex flex-col justify-center items-center">
                    <div className="absolute top-[-25%] left-[21%]">
                        <img
                            src={cliente.foto ? cliente.foto : "https://ik.imagekit.io/q5tv5x3k8/Design%20sem%20nome.svg?updatedAt=1740748816473"} 
                            alt="Foto Perfil"
                            className="w-43 h-43 rounded-full bg-[#f0f3ff] border-5 border-[#f0f3ff]"
                        />
                    </div>
                    <div className="flex flex-col justify-center pt-12 items-center text-center gap-3">
                        <div className="text-lg">
                            <h2 className="pb-1 font-bold text-gray-800">
                                {cliente.nome}
                            </h2>
                            <p className="text-gray-600">{cliente.email}</p>
                            <p className="text-gray-600">{cliente.telefone}</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#9B85FA] text-white mt-8 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#5932EA] duration-500">
                            <Link
                                to={`/cardclienteaberto/${cliente.id}`}
                                className="flex items-center gap-2"
                            >
                                <Plus size={20} />
                                <p>Ver Mais</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCliente;
