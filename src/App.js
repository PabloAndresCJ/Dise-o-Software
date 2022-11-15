import './App.css';
import { Form } from '@formio/react';
import React from 'react';
import Navbar from "./Componentes/Header";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Carrusel from "./Componentes/Carousel1";
import Catalog_Principal from "./Componentes/Catalog_Principal";
import data_HP from "./Componentes/Data";
import Carrito from "./Componentes/Carrito";
import {CartProvider} from "react-use-cart";
import {Container} from "react-bootstrap";

import Pagina_Headphones from "./Componentes/Página_Headphones";
import Pagina_Deportes from "./Componentes/Página_Deportes";
import Pagina_InEar from "./Componentes/Página_InEar";
import Pagina_Parlantes from "./Componentes/Página_Parlantes";
import PaypalOrder from "./Componentes/PaypalOrder";
import Profile from "./Componentes/Profile";
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
                    
                  <Route path='/Contacto' element={<Container
                        style={{
                        position: "relative",
                        transform: "translate(0, 10%)"
                      }}
                        ><div className='card text-white bg-secondary p-3 '>
                      <br/>
                      <h5 className='card-header'>Contacto</h5><div className='card-body rounded-3'>
                        <Form src={'https://nskwitolzecqjbm.form.io/mensajes'}/></div></div></Container>}/>

                  <Route path='/checkout' element={<CartProvider> <PaypalOrder/> </CartProvider>}/>
                  <Route path='/Perfil' element={<Profile/>}/>
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
