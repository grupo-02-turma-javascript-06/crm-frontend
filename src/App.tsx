import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCliente from "./components/cliente/formcliente/FormCliente";
import ListarClientes from "./components/cliente/listarcliente/ListarCliente";
import CardClienteAberto from "./components/cliente/cardcliente/CardClienteAberto";
import DeletarCliente from "./components/cliente/deletarcliente/DeletarCliente";

function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/cliente" element={<ListarClientes />} />
                        <Route
                            path="/cliente/store"
                            element={<FormCliente />}
                        />
                        <Route
                            path="/cliente/store/:id"
                            element={<FormCliente />}
                        />
                        <Route path="/cardclienteaberto/:id" element={<CardClienteAberto />} />
                        <Route path="/deletarcliente/:id" element={<DeletarCliente/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
