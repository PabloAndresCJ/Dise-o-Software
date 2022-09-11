import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import { Carousel } from 'bootstrap';
import Carousel1 from './Components/Carousel1';
import Deportivo from './Components/Deportivo';
import ProductData from './Components/Catalog'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Carousel1/>}/>
          <Route path='/Catalog' element={<ProductData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
