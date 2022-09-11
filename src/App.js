import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Carousel1 from './Components/Carousel1';
import Cards from './Components/Catalog';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GridExample from "./Components/Catalog-Principal";
import Button from "react-bootstrap/Button";
import {Card, Image} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<div><Carousel1/>
            <Container>
              <Row>
                <Col lg={6}>
                  <h1>Headphones</h1>
                  <Card>
                    <Image src={require('./img/Marshall-HP-Ajuste.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>

                      <a href="/Catalog_Headphones"><Button variant="outline-dark">Ver productos<svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button></a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <h1>Deportivos</h1>
                  <Card>
                    <Image src={require('./img/deporte-Ajuste.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <a href="/Catalog_Deporte"><Button variant="outline-dark">Ver productos <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        className="bi bi-headphones"
                                                                        viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button></a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <h1>In-Ear</h1>
                  <Card>
                    <Image src={require('./img/Bose-EP-II-Ajuste.jpg')} className='card-img-top' fluid>
                    </Image>
                    <Card.Body>
                      <a href="/Catalog_InEar"><Button variant="outline-dark">Ver productos <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button></a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <h1>Speakers</h1>
                  <Card>
                    <Image src={require('./img/Marshall-SP.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <a href="/Catalog_Parlantes"><Button variant="outline-dark">Ver productos <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button></a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>}/>

          <Route path='/Catalog_Deporte' element={<div>
              <h1>Deportivo</h1>
              <Container>
                <Row>
                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/Bose-SoundSport-Wireless.jpg')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>Bose SoundSport Wireless</Card.Title>
                        <Card.Text>
                          $149.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/JBL IN EAR TUNE 125BT.jpg')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>JBL In Ear Tune 125</Card.Title>
                        <Card.Text>
                          $34.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/Motorola Earbuds Sport.jpeg')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>Motorola Earbuds Sport</Card.Title>
                        <Card.Text>
                          $14.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/Philips ActionFit RunWild.png')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>Philips ActionFit RunWild</Card.Title>
                        <Card.Text>
                          $7.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/Pioneer SE-IM5BT.png')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>Pioneer SE-IM5BT</Card.Title>
                        <Card.Text>
                          $16.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card>
                      <Image src={require('./img/Productos/Deportivos/Shokz Openrun Cosmic.jpg')} className='card-img-top' fluid></Image>
                      <Card.Body>
                        <Card.Title>Shokz Openrun Cosmic</Card.Title>
                        <Card.Text>
                          $149.990
                        </Card.Text>
                        <Button variant="outline-dark">Ver producto <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                            viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                        </svg></Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>}/>

          <Route path='/Catalog_InEar' element={<div>
            <h1>In-Ear</h1>
            <Container>
              <Row>
                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Apple Airpods PRO.jpeg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Apple Airpods PRO</Card.Title>
                      <Card.Text>
                        $279.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Beats Studio Buds.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Beats Studio Buds</Card.Title>
                      <Card.Text>
                        $149.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Bose Earbuds QuietComfort.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Bose Earbuds QuietComfort</Card.Title>
                      <Card.Text>
                        $299.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Samsung Galaxy Buds Live.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Samsung Galaxy Buds Live</Card.Title>
                      <Card.Text>
                        $149.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Sony XB700 BT.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Sony XB700</Card.Title>
                      <Card.Text>
                        $119.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/In-Ear/Xiaomi Redmi Buds 3 Lite.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Xiaomi Redmi Buds 3 Lite</Card.Title>
                      <Card.Text>
                        $27.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-earbuds"
                          viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container> </div>}/>

          <Route path='/Catalog_Headphones' element={<div>
            <h1>Headphones</h1>
            <Container>
              <Row>
                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/Bose QuietComfort 35 II.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Bose QuietComfort 35 II</Card.Title>
                      <Card.Text>
                        $329.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/JBL Free WFH.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>JBL Free WFH</Card.Title>
                      <Card.Text>
                        $34.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/JBL Over Ear BT Tune 760.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>JBL Over Ear BT Tune 760</Card.Title>
                      <Card.Text>
                        $79.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/Sony.jpeg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Sony WH-CH710N</Card.Title>
                      <Card.Text>
                        $119.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/Marhall Major 4.jpeg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Marshall Major IV</Card.Title>
                      <Card.Text>
                        $134.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Headphones/Sennheiser HD 350 BT.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Sennheiser HD 350</Card.Title>
                      <Card.Text>
                        $149.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-headphones" viewBox="0 0 16 16">
                        <path
                            d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container> </div>}/>

          <Route path='/Catalog_Parlantes' element={<div>
            <h1>Speakers</h1>
            <Container>
              <Row>
                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/Blik Booster 1.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Blik Booster 1</Card.Title>
                      <Card.Text>
                        $34.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/Bose Flex Soundlink.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Bose Flex Soundlink</Card.Title>
                      <Card.Text>
                        $199.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/JBL Charge 5 Bluetooth.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>JBL Charge 5</Card.Title>
                      <Card.Text>
                        $154.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/Marshall Emberton BT.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Marshall Emberton</Card.Title>
                      <Card.Text>
                        $179.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/Sony XG500.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Sony XG500</Card.Title>
                      <Card.Text>
                        $279.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6}>
                  <Card>
                    <Image src={require('./img/Productos/Parlantes/Master-G Bazuka GBass Micro.jpg')} className='card-img-top' fluid></Image>
                    <Card.Body>
                      <Card.Title>Master-G Bazuka GBass Micro</Card.Title>
                      <Card.Text>
                        $9.990
                      </Card.Text>
                      <Button variant="outline-dark">Ver producto <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                       height="16" fill="currentColor"
                                                                       className="bi bi-speaker" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path
                            d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg></Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container> </div>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
