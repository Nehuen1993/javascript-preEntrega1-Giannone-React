import React from 'react';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';


function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <ItemListContainer greeting="Primer Pre entrega!" />
    </div>
  );
}

export default App;
