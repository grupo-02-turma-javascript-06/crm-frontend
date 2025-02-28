import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { InfinitySpin } from "react-loader-spinner";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Cliente from "../../../models/Cliente";
import CardCliente from "../cardcliente/CardCliente";

function ListarCliente() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarClientes();
    }, [clientes.length]);

    async function buscarClientes() {
        setIsLoading(true);

        try {
            await buscar("/cliente", setClientes);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && (
                <InfinitySpin width="200" arial-label="infinity-spin-loading" />
            )}

            <div className="flex flex-col items-center justify-center md:px-8  pt-8 bg-[#F0F3FF] m-25">
                <div className="container flex flex-col md:flex-row justify-between items-center text-center w-full gap-2">
                    <div className="">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Todos os Clientes
                        </h2>
                    </div>
                    <div className="flex w-2/3 items-center text-center justify-center gap-1 flex-row md:gap-3 md:justify-end">
                        <div className="flex md:w-1/3 gap-2 relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 w-full pr-4 py-2 border-none bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                            />

                            <MagnifyingGlass
                                size={30}
                                className="absolute text-neutral-400 top-1 left-1"
                            />
                        </div>
                        <div className="hidden lg:flex p-2 justify-center items-center text center gap-1 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300">
                            <div className="">
                                <p>Ordernar por: </p>
                            </div>
                            <select className="hidden lg:block border-none ">
                                <option>A - Z</option>
                                <option>Z - A</option>
                            </select>
                        </div>

                        <div className="">
                            <button className="bg-[#5932EA]  text-white px-4 py-2 rounded-lg flex justify-center text-center items-center gap-2 hover:bg-[#4A24D9] duration-300 shadow-md">
                                <Link to={"/cliente/store"} className="flex gap-1 text-center items-center">
                                    <Plus size={20} />
                                    <p className="hidden md:flex">Cadastrar Cliente</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col justify-center items-center">
                    {!isLoading && clientes.length === 0 && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum cliente foi encontrado
                        </span>
                    )}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {clientes.map((cliente) => (
                            <CardCliente key={cliente.id} cliente={cliente} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCliente;
