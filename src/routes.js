import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "componentes/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import VoltarTopo from "componentes/VoltarTopo";


function AppRoutes() {
  return (
    <BrowserRouter>
    <VoltarTopo />
    <Menu/>
      <Routes>
    <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Inicio/>}/>
    </Route>

        <Route path="posts/:id" element={<Post/>}/>
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
