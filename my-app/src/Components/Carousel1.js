import Carousel from 'react-bootstrap/Carousel';
import '../carousel.rtl.css';
import Button from 'react-bootstrap/Button';
function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-150 w-100"
          src="Sennheiser-HP.jpg"
          alt="First slide"
        />
        <div className='carousel-caption text-md-start'>
          <h1>Productos Premium</h1>
          <p>Tenemos una amplia colección</p>
          <Button href="Catalog_Headphones" variant="dark" size="lg">Ver todos</Button>
        </div> 
        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-150 w-100"
          src="Sony-HP.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Headphones En Promoción</h1>
          <p>Inalambricos y con cancelación de ruido.</p>
          <Button href="Catalog_Headphones" variant="dark" size="lg">Revisar promociones</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Bose-EP.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Nueva Gama De Deportivos Bose</h1>
          <p>
            Disponible exclusivamente en nuestra página
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-100 w-100"
          src="JBL-SP.jpg"
          alt="Fourth slide"
        />

        <div class="carousel-caption text-end">
          <h1>Parlantes</h1>
          <p>
            Con resistencia al agua IP67
          </p>
          <Button href="/Catalog_Parlantes" variant="dark" size="lg">Revisar parlantes</Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;