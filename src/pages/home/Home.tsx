import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="flex justify-center h-screen">
                <div className="container grid grid-cols-1 md:grid-cols-2 items-center px-4 py-8 gap-8 ">
                    <div className="flex flex-col items-center text-center md:text-left gap-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#080036] text-center">Seja bem vinde a 2Connect!</h1>
                        <p className="text-lg md:text-xl text-center text-[#A1A1A1]">Não geramos apenas leads, geramos conecções reais</p>
                        <Link to={""} className="rounded py-2 px-8 text-white bg-[#5932EA] hover:bg-[#080036] hover:text-[#AEB5D6]">Dashboard</Link>
                    </div>
                    <div className="flex justify-center">
                        <img
                                className="w-3/4 md:w-2/3 lg:w-1/2 max-w-[300px] md:max-w-none"
                                src="https://ik.imagekit.io/q5tv5x3k8/CRM/HOME%20-%20cell.svg?updatedAt=1740687953430"
                                alt="Imagem da Página Home"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;