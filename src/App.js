import './App.css';
import Navbar from "./Componentes/Header";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Carrusel from "./Componentes/Carousel1";
import Catalog_Principal from "./Componentes/Catalog_Principal";
import data_HP from "./Componentes/Data";
import Carrito from "./Componentes/Carrito";
import {CartProvider} from "react-use-cart";

import Pagina_Headphones from "./Componentes/Página_Headphones";
import Pagina_Deportes from "./Componentes/Página_Deportes";
import Pagina_InEar from "./Componentes/Página_InEar";
import Pagina_Parlantes from "./Componentes/Página_Parlantes";

function App() {
    const {Headphones, Deportes} = data_HP
  return (
      <div className="App">
          <BrowserRouter>
              <Navbar/>
              <br/>
              <Routes>
                  <Route path='/' element={<div><Carrusel/><Catalog_Principal/></div>}/>

                  <Route path='/Headphones' element={<CartProvider> <Pagina_Headphones/></CartProvider>}/>

                  <Route path='/Deportes' element={<CartProvider> <Pagina_Deportes/> </CartProvider>}/>

                  <Route path='/InEar' element={<CartProvider> <Pagina_InEar/> </CartProvider>} />

                  <Route path='/Parlantes' element={<CartProvider> <Pagina_Parlantes/> </CartProvider>} />

                  <Route path='/Carrito' element={<CartProvider> <Carrito/> <Catalog_Principal/> </CartProvider>}/>
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
