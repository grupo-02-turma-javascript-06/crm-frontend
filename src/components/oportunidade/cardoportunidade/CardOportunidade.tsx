import { PencilSimple, Trash } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Oportunidade, { StatusOportunidade } from '../../../models/Oportunidade';
import { atualizar } from '../../../services/Service';

interface CardOportunidadeProps {
    oportunidade: Oportunidade;
    onUpdateStatus: (id: number, status: StatusOportunidade) => void; // Callback para atualizar status no pai
}

function CardOportunidade({ oportunidade, onUpdateStatus }: CardOportunidadeProps) {
    const [status, setStatus] = useState<StatusOportunidade>(oportunidade.status);

    const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value as StatusOportunidade;

        if (oportunidade.id) {
            try {
                await atualizar(`/oportunidades/${oportunidade.id}`, { status: newStatus }, () => { });
                setStatus(newStatus);
                onUpdateStatus(oportunidade.id, newStatus);
                console.log(`Status atualizado para: ${newStatus}`);
            } catch (error) {
                console.error("Erro ao atualizar status:", error);
            }
        }
    };

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
                <div className='w-[120px] h-[32px] rounded-[4px] flex justify-center items-center'>
                    <select
                        name="status"
                        id="status"
                        className='border p-2 border-slate-800 rounded w-full'
                        value={status}
                        onChange={handleStatusChange}
                    >
                        {Object.values(StatusOportunidade).map((statusOption) => (
                            <option key={statusOption} value={statusOption}>
                                {statusOption}
                            </option>
                        ))}
                    </select>
                </div>
            </td>
            <td className="px-0 py-4 flex justify-center items-center">
                <button onClick={() => console.log(`Excluir oportunidade ${oportunidade.id}`)} className="mr-2">
                    <Trash size={25} />
                </button>
                <Link to={`/editaroportunidade/${oportunidade.id}`}>
                    <PencilSimple size={25} />
                </Link>
            </td>
        </tr>
    );
}

export default CardOportunidade;
