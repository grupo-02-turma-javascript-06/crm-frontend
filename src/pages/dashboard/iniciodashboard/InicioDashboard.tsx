import GraficoPizza from "../graficopizza/GraficoPizza"


function InicioDashboard() {
    return (
        <div className="flex justify-center mt-30 mb-20 items-center flex-col">
            <div className="container flex justify-center items-center"> 
                <div className="flex items-center h-20 mb-10">
                        <h2 className="text-[1.5rem] font-bold">Bem vindo a central de resultados!</h2>
                </div>
            </div>
            <div className="flex justify-center gap-4 flex-col xl:flex-row">
                <div className="container items-center ">  
                    <div className="flex items-center gap-4 flex-col md:flex-row ">
                        <div className="p-4 rounded-xl drop-shadow-lg bg-white pl-10 ">
                            <GraficoPizza/>
                        </div>
                        
                        <div className="flex flex-col justify-center gap-3 p-4 bg-white h-82 w-95 rounded-xl drop-shadow-lg">
                            <div className="text-center pb-2 border-b border-[#AEB5D6]">
                                <h2 className="text-xl font-semibold">Resumo de valores</h2>
                            </div>
                            
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex justify-center gap-4 items-center text-center py-4 ml-4">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/zBotao1.svg?updatedAt=1740697966544" alt="" />
                                    <p className="text-3xl font-semibold">R$ 112.975,85</p>
                                </div>
                                <div className="flex justify-center gap-4 items-center py-4 ml-4">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/zBotao2.svg?updatedAt=1740697967112" alt="" />
                                    <p className="text-3xl font-semibold">R$ 67.975,85</p>
                                </div>
                                <div className="flex justify-center gap-4 items-center py-4 ml-4">
                                    <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/zBotao3.svg?updatedAt=1740697966598" alt="" />
                                    <p className="text-3xl font-semibold">R$ 67.975,85</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container items-center">
                    <div className="flex  justify-center text-center gap-4 flex-col md:flex-row xl:flex-col w-95 md:w-full">
                        <div className="flex justify-between items-center p-4 bg-white rounded-xl drop-shadow-lg h-30 w-full gap-1 xl:h-39">
                            <div  className="w-full pl-6">
                                <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/Oportunidades-dash.svg?updatedAt=1740703721671" alt="Icone de perfil" className="w-[90px]"/>
                            </div>
                            <div className="flex justify-center flex-col w-full gap-3 pr-6">
                                <p className="text-lg text-[#AEB5D6]">Clientes</p>
                                <p className="font-bold text-3xl ">50</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-xl drop-shadow-lg h-30 w-full gap-1 xl:h-39">
                            <div  className="w-full pl-6">
                                <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/Oportunidades-dash.svg?updatedAt=1740703721671" alt="Icone de perfil" className="w-[90px]"/>
                            </div>
                            <div className="flex justify-center flex-col w-full gap-3 pr-6">
                                <p className="text-lg text-[#AEB5D6]">Oportunidades</p>
                                <p className="font-bold text-3xl ">50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default InicioDashboard