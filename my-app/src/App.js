import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import {Route,Routes} from 'react-router-dom';
import { Carousel } from 'bootstrap';
import Carousel1 from './Components/Carousel1';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel1/>
    </div>
  );
}

export default App;
