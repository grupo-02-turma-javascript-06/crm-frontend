import { Link, MagnifyingGlass, Plus } from '@phosphor-icons/react';
import CardOportunidade from '../cardoportunidade/CardOportunidade';
import { useEffect, useState } from 'react';
import Oportunidade from '../../../models/Oportunidade';
import { buscar } from '../../../services/Service';
import { InfinitySpin } from 'react-loader-spinner';

function ListaOportunidade() {

    const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarOportunidade();
    }, []);

    async function buscarOportunidade() {
        setIsLoading(true);

        try {
            await buscar("/oportunidade", setOportunidades);
        } catch (error) {
            console.error("Erro ao buscar oportunidades:", error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleUpdateStatus(id: number, status: string) {
        // Lógica para atualizar o status da oportunidade
    }

    return (
        <>
            {isLoading && (
                <InfinitySpin width="200" arial-label="infinity-spin-loading" />
            )}

            {!isLoading && (
                <div className='m-15'>
                    <div className='flex justify-between'>
                        <button className="bg-[#4D4AEA] text-white px-4 py-2 rounded-lg flex items-center gap-2 ml-auto">
                            <Link to={'/oportunidade/items'}><Plus size={20} />Criar Oportunidade</Link>
                        </button>
                    </div>

                    <div className='w-full'>
                        <div className="flex flex-col items-center p-4 bg-gray-100 h-screen w-full">
                            {/* Cabeçalho */}
                            <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 mb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-semibold">Todas as Oportunidades</h2>

                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <MagnifyingGlass size={20} className="absolute left-3 top-2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Pesquisar..."
                                                className="pl-10 pr-4 py-2 border rounded-lg w-full"
                                            />
                                        </div>

                                        <div className=" text-[14px] font-poppins">
                                            <span>Ordenar por:</span>
                                            <select name="status" id="status" className="font-normal">
                                                <option value="" selected disabled>STATUS</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="relative overflow-x-auto w-full max-w-5xl bg-white shadow-md rounded-xl p-6">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Nome</th>
                                            <th scope="col" className="px-6 py-3">Abertura</th>
                                            <th scope="col" className="px-6 py-3">Atualização</th>
                                            <th scope="col" className="px-6 py-3">Fechamento</th>
                                            <th scope="col" className="px-6 py-3">Valor</th>
                                            <th scope="col" className="px-6 py-3">Status</th>
                                            <th scope="col" className="px-6 py-3">Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {oportunidades.map((oportunidade) => (
                                            <CardOportunidade
                                                key={oportunidade.id}
                                                oportunidade={oportunidade}
                                                onUpdateStatus={handleUpdateStatus}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListaOportunidade;



