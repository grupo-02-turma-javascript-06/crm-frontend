import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  </>;
}

export default App;
