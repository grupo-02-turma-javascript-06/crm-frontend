import { List, X, } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);


    return (
        <>
            <div className="w-full flex justify-center items-center h-20 bg-[#080036]">
                <div className="container flex justify-between items-center p-4">

                    <Link to="/home">
                        <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/Logo%202connect.svg?updatedAt=1740683586539" alt="Logo da 2Connect" className="w-[150px]"/>
                    </Link>

                    <button 
                        onClick={() => setMenuAberto(!menuAberto)} 
                        className="md:hidden text-[#AEB5D6] focus:outline-none"
                        aria-label="Abrir menu"
                    >
                        {menuAberto ? <X size={28} /> : <List size={28} />}
                    </button>

                    <div className={`absolute md:static top-16 right-0 ${
                            menuAberto ? "bg-[#080036]" : "md:bg-transparent"
                        } w-full md:w-auto flex flex-col md:flex-row md:gap-5 items-center text-lg font-bold transition-all duration-300 ${
                            menuAberto ? "flex" : "hidden md:flex"}`}>
                        <Link
                            to=""
                            className="flex justify-center items-center gap-1 text-sm font-medium text-[#AEB5D6] p-2 transition duration-300 hover:bg-[#5932EA] hover:text-white rounded-lg"
                        >
                            <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/key-square.svg?updatedAt=1740681819556" alt="Home" />
                            <h2>Home</h2>
                            
                        </Link>
                        <Link
                            to=""
                            className="flex justify-center items-center gap-1 text-sm font-medium text-[#AEB5D6] p-2 transition duration-300 hover:bg-[#5932EA] hover:text-white rounded-lg"
                        >
                            <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/user.svg?updatedAt=1740682060573" alt="Home" />
                            <h2>Clientes</h2>
                        </Link>
                        <Link
                            to=""
                            className="flex justify-center items-center gap-1 text-sm font-medium text-[#AEB5D6] p-2 transition duration-300 hover:bg-[#5932EA] hover:text-white rounded-lg"
                        >
                            <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/oportunidades.svg?updatedAt=1740682141596" alt="Home" />
                            <h2>Oportunidades</h2>
                        </Link>
                        <Link
                            to=""
                            className="flex justify-center items-center gap-1 text-sm font-medium text-[#AEB5D6] p-2 transition duration-300 hover:bg-[#5932EA] hover:text-white rounded-lg"
                        >
                            <img src="https://ik.imagekit.io/q5tv5x3k8/CRM/sobre.svg?updatedAt=1740682060198" alt="Home" />
                            <h2>Sobre</h2>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    ) 

}

export default Navbar;