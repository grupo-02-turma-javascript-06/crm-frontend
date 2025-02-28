import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import InicioDashboard from "./pages/dashboard/iniciodashboard/InicioDashboard";

function App() {
  return <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dashboard" element={<InicioDashboard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  </>;
}

export default App;
