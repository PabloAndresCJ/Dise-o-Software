import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardImg} from "react-bootstrap";

function Cards(props) {
  return (
    <Card className='text-white text-center' style={{ width: '34rem' }}>
      <Card.Img variant="top" src={props.Link} />
      <Card.ImgOverlay>
          <Card.Title><h1>{props.SobreTitulo}</h1></Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Content}
        </Card.Text>
        <Button variant="outline-dark">Ver producto {props.caracter}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;