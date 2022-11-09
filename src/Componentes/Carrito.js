import React from "react";
import {useCart} from "react-use-cart";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import {Route} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useAuth0} from "@auth0/auth0-react";

const Carrito = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();



    if (isEmpty) return <div>
        <br/>
        <br/>
        <h1 className="text-center">Carrito vacío</h1>
    </div>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <br/>
                    <h5>Carrito ({totalUniqueItems}) total de elementos: ({totalItems})</h5>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-basket" viewBox="0 0 16 16">
                                    <path
                                        d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                                </svg></th>
                            <th>Producto</th>
                            <th>Valor</th>
                            <th>Cantidad</th>
                        </tr>

                        </thead>
                        <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}} alt="dad"/>
                                    </td>
                                    <td> {item.Nombre}</td>
                                    <td> ${item.price.toLocaleString(undefined, {maximumFractionDigits:2})} </td>
                                    <td> {item.quantity}</td>
                                    <td>
                                        <Button variant="dark"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>

                                        <Button variant="dark"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>

                                        <Button variant="danger"
                                                onClick={() => removeItem(item.id)}>Quitar producto</Button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                    <div>
                        <h2>Precio total: {cartTotal.toLocaleString(undefined, {maximumFractionDigits:2})} </h2>
                    </div>
                    <div>
                        <Row>
                            <Col md={4}>



                                <a href="/checkout"><Button>Pagar</Button></a>
                            </Col>
                            <Col md={{span:2 , offset: 4}}>
                                <Button variant="danger"
                                        onClick={() => emptyCart()}>Vaciar carrito</Button>
                            </Col>
                        </Row>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carrito;