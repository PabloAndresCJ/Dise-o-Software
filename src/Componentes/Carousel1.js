import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";


const Carrusel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={4000} >
                <img
                    className="d-block w-100 h-150"
                    src={require("./imgs/Carrusel/Sennheiser-HP.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 style={{color:"black"}}> <strong>Productos Premium</strong> </h1>
                    <p style={{color: "black"}}>Tenemos una amplia colección</p>
                    <Button href="Catalog_Headphones" variant="dark" size="lg">Ver todos</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} >
                <img
                    className="d-block w-100 h-150"
                    src={require("./imgs/Carrusel/Sony-HP.jpg")}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 ><strong>Headphones</strong></h1>
                    <p >Inalambricos y con cancelación de ruido.</p>
                    <Button href="Headphones" variant="dark" size="lg">Revisar promociones</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100"
                    src={require("./imgs/Carrusel/Bose-EP.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1><strong>Nueva Gama De Deportivos Bose</strong></h1>
                    <p>
                        Disponible exclusivamente en nuestra página
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100 h-150"
                    src={require("./imgs/Carrusel/JBL-SP.jpg")}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h1><strong>Speakers</strong></h1>
                    <p>
                        Con resistencia al agua IP67
                    </p>
                    <Button href="/Parlantes" variant="dark" size="lg">Revisar parlantes</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;