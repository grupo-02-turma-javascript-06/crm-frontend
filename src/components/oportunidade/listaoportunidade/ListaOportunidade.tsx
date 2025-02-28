import { MagnifyingGlass, Plus } from '@phosphor-icons/react';
import CardOportunidade from '../cardoportunidade/CardOportunidade';
import { useEffect, useState } from 'react';
import Oportunidade from '../../../models/Oportunidade';
import { buscar } from '../../../services/Service';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

function ListaOportunidade() {

    const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarOportunidade();
    }, [oportunidades.length]);

    async function buscarOportunidade() {
        setIsLoading(true);

        try {
            await buscar("/oportunidades", setOportunidades);
        } catch (error) {
            console.error("Erro ao buscar oportunidades:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const [query, setQuery] = useState("");

    const filterOportunidade = oportunidades.filter((oportunidade) =>
        oportunidade.nome.toLowerCase().includes(query.toLowerCase())
    );


    return (
        <>
            {isLoading && (
                <InfinitySpin width="200" arial-label="infinity-spin-loading" />
            )}

            {!isLoading && (
                <div className='m-25'>
                    <div className='flex justify-between'>
                        <button className="bg-[#4D4AEA] text-white px-4 py-2 rounded-lg flex items-center gap-2 ml-auto">
                            <Link to={'/oportunidades/store'} className='flex'><Plus size={20} />Criar Oportunidade</Link>
                        </button>
                    </div>

                    <div className=''>
                        <div className="flex flex-col items-center p-4 bg-gray-100">
                            {/* Cabeçalho */}
                            <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-6 mb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-semibold">Todas as Oportunidades</h2>

                                    <div className="flex items-center gap-4">
                                        <form className="flex justify-center items-center max-w-sm mx-auto w-full">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative w-[60vw]">
                                                <input
                                                    type="text"
                                                    id="simple-search"
                                                    className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-bl-lg rounded-tr-lg w-full p-2.5"
                                                    placeholder="Pesquisar Nome"
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                />
                                            </div>
                                        </form>

                                        {/*                                         <div className=" text-[14px] font-poppins">
                                            <span>Ordenar por:</span>
                                            <select name="status" id="status" className="font-normal">
                                                <option value="" selected disabled>STATUS</option>
                                            </select>
                                        </div> */}

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



