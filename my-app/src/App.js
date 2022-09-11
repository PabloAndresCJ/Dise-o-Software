import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Carousel1 from './Components/Carousel1';
import Cards from './Components/Catalog';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Carousel1/>}/>
          <Route path='/Catalog_Deporte' element={
        <Container>
          <Row xs={1} md={2} className="g-4">
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bose' Content='Descripción' boton=''/></Col>
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bos' Content='Descr' boton=''/></Col>
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bos' Content='Descr' boton=''/></Col>
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bos' Content='Descr' boton=''/>
          </Col>
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bos' Content='Descr' boton=''/>
          </Col>
          <Col sm>
          <Cards Link='Sennheiser-HP.jpg' Title='Bos' Content='Descr' boton=''/>
          </Col>
            </Row>
          </Container> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
