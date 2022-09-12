import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Carousel1 from './Components/Carousel1';
// import Cards from './Components/Catalog';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Button from "react-bootstrap/Button";
// import {Card, Image} from "react-bootstrap";
import Catalog_Headphones from "./Components/Catalog_Headphones";
import Catalog_Principal from "./Components/Catalog_Principal";
import Catalog_Deporte from "./Components/Catalog_Deporte";
import Catalog_InEar from "./Components/Catalog_InEar";
import Catalog_Parlantes from "./Components/Catalog_Parlantes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<div><Carousel1/><Catalog_Principal/></div>}/>

          <Route path='/Catalog_Deporte' element={<Catalog_Deporte/>}/>

          <Route path='/Catalog_InEar' element={<Catalog_InEar/>}/>

          <Route path='/Catalog_Headphones' element={<Catalog_Headphones/>}/>

          <Route path='/Catalog_Parlantes' element={<Catalog_Parlantes/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
