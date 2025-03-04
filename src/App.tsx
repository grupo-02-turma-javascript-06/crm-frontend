import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormCliente from "./components/cliente/formcliente/FormCliente";
import ListarClientes from "./components/cliente/listarcliente/ListarCliente";
import CardClienteAberto from "./components/cliente/cardcliente/CardClienteAberto";
import DeletarCliente from "./components/cliente/deletarcliente/DeletarCliente";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import InicioDashboard from "./pages/dashboard/iniciodashboard/InicioDashboard";
import ListaOportunidade from "./components/oportunidade/listaoportunidade/ListaOportunidade";
import FormOportunidade from "./components/oportunidade/formoportunidade/FormOportunidade";
import DeletarOportunidade from "./components/oportunidade/deletaroportunidade/DeletarOportunidade";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route
                            path="/dashboard"
                            element={<InicioDashboard />}
                        />
                        <Route path="/cliente" element={<ListarClientes />} />
                        <Route
                            path="/cliente/store"
                            element={<FormCliente />}
                        />
                        <Route
                            path="/cliente/update/:id"
                            element={<FormCliente />}
                        />
                        <Route
                            path="/cardclienteaberto/:id"
                            element={<CardClienteAberto />}
                        />
                        <Route
                            path="/deletarcliente/:id"
                            element={<DeletarCliente />}
                        />
                        <Route path="/oportunidade" element={<ListaOportunidade />} />
                        <Route
                            path="/deletaroportunidade/:id"
                            element={<DeletarOportunidade />}
                        />
                        <Route
                            path="/oportunidade/update/:id"
                            element={<FormOportunidade />}
                        />
                        <Route
                            path="/oportunidades/store"
                            element={<FormOportunidade />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
