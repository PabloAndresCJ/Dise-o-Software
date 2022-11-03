import React from "react";
import Row from 'react-bootstrap/Row';
import Itemcard from "./Product";
import data_HP from "./Data";
import Col from "react-bootstrap/Col";

const Pagina_InEar= () => {

    return (
        <>
            <br/>
            <h1>InEar</h1>
            <div>
                <Row md={2} lg={3} xs={1} style={{alignItems: "center"}}>
                    {data_HP.InEar.map((item, index) => {
                        return(
                            <Col>
                                <Itemcard img={item.img}
                                          title={item.Nombre}
                                          price={item.price}
                                          item ={item}
                                          key={index}/>
                            </Col>
                        )
                    })}
                    <br/>
                </Row>
            </div>
        </>
    )
};

export default Pagina_InEar;