import Home from "./pages/Home.jsx";
import Alunos from "./pages/Alunos.jsx";
import Sobre from "./pages/Sobre.jsx";

import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/sobre" element={<Sobre />} />          
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
