import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import NavBar from './component/NavBar';
import ProductList, {  } from "./pages/home";
import ItemListContainer from './component/ItemListContainer';
import { RiMotorbikeFill } from "react-icons/ri";


function App() {
  return (
   
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/suspencion" element={<suspencion/>}/>
          <Route path="/motor" element={<motor/>}/>
          <Route path="/trendelantero" element={<trendelantero/>}/>
  
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
