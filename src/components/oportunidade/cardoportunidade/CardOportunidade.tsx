import { PencilSimple, Trash } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Oportunidade from '../../../models/Oportunidade';


interface CardOportunidadeProps {
    oportunidade: Oportunidade;
}

function CardOportunidade({ oportunidade }: CardOportunidadeProps) {

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {oportunidade.nome}
            </th>
            <td className="px-6 py-4">{oportunidade.abertura}</td>
            <td className="px-6 py-4">{oportunidade.data_atualizacao}</td>
            <td className="px-6 py-4">{oportunidade.termino}</td>
            <td className="px-6 py-4">{oportunidade.valor}</td>
            <td className="px-0 py-4">
                {/*             <div className='w-[120px] h-[32px] rounded-[4px] flex justify-center items-center'>
                    <select
                        name="status"
                        id="status"
                        className='border p-2 border-slate-800 rounded w-full'
                        value={oportunidade.status}
                    >
                    </select>
                </div> */}
            </td>
            <td className="px-0 py-4 flex justify-center items-center">
                <Link to={`/deletaroportunidade/${oportunidade.id}`}>
                    <button className="text-gray-500 hover:text-red-500">
                        <Trash size={40} weight="light" />
                    </button>
                </Link>

                <Link to={`/oportunidade/update/${oportunidade.id}`}>
                    <button className="text-gray-500 hover:text-[#5932EA]">
                        <PencilSimple size={40} weight="light" />
                    </button>
                </Link>

            </td>
        </tr>
    );
}

export default CardOportunidade;
