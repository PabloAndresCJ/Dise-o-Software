import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { useCart } from "react-use-cart";


const Itemcard = (props) => {
    const {addItem} = useCart();

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <h5>${props.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</h5>
                </Card.Text>
                <a href="/Carrito"><Button variant="dark" onClick={() => addItem(props.item)}>Agregar al carrito</Button></a>
            </Card.Body>
        </Card>
    )

}
export default Itemcard;