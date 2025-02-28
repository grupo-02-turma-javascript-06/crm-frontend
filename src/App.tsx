import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCliente from "./components/cliente/formcliente/FormCliente";
import ListarClientes from "./components/cliente/listarcliente/ListarCliente";

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
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
