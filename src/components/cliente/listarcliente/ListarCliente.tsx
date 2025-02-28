import { useEffect, useState } from "react"
import Cliente from "../../../models/Cliente"
import { InfinitySpin } from "react-loader-spinner";

function ListarClientes() {
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarClientes() {
        setIsLoading(true)

        try {
            await listar('/clientes', setClientes)
        } catch (error: any) {
            console.log("Erro ao listar os Clientes!")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarClientes()
    }, [clientes.length])

    return (
        <>
            {isLoading && (
                <InfinitySpin
                    visible={true}
                    width="200"
                    color="blue"
                    ariaLabel="infinity-spin-loading"
                    />              
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-4">
                    {(!isLoading && clientes.length === 0) && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum cliente foi encontrado
                        </span>
                    )}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {clientes.map((cliente) => (
                            <CardClientes
                                key={cliente.id}
                                cliente={cliente}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarClientes