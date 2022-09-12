import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

function Catalog_Deporte() {
    return (
        <div>
        <h1>Deportivo</h1>
        <Container>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Image src={require('./Deportivos/Bose-SoundSport-Wireless.jpg')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Deportivos/JBL IN EAR TUNE 125BT.jpg')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Deportivos/Motorola Earbuds Sport.jpeg')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Deportivos/Philips ActionFit RunWild.png')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Deportivos/Pioneer SE-IM5BT.png')} className='card-img-top' fluid></Image>
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
                        <Image src={require('./Deportivos/Shokz Openrun Cosmic.jpg')} className='card-img-top' fluid></Image>
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
    </div>
    );
}

export default Catalog_Deporte;