import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

function Catalog_Principal() {
    return (<Container>
            <Row>
                <Col lg={6}>
                    <h1>Headphones</h1>
                    <Card>
                        <Image src={require('./Catalog_Principal/Marshall-HP-Ajuste.jpg')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Catalog_Principal/deporte-Ajuste.jpg')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Catalog_Principal/Bose-EP-II-Ajuste.jpg')} className='card-img-top' fluid>
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
                        <Image src={require('./Catalog_Principal/Marshall-SP.jpg')} className='card-img-top' fluid></Image>
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

    );
}

export default Catalog_Principal;