import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import NavBar from './component/NavBar';
import ProductList, {  } from "./pages/home";
import DetalleProducto, {  } from "./pages/detalleproductos";
import ClaseMotor, {  } from "./pages/motor";
import ClaseSuspencion, {  } from "./pages/suspencion";
import ClaseFrenos, {  } from "./pages/frenos";
import ItemListContainer from './component/ItemListContainer';
import { RiMotorbikeFill } from "react-icons/ri";


function App() {
  return (
   
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/productos/:id" element={<DetalleProducto/>}/>
          <Route path="/frenos" element={<ClaseFrenos/>}/>
          <Route path="/motor" element={<ClaseMotor/>}/>
          <Route path="/suspencion" element={<ClaseSuspencion/>}/>
  
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
