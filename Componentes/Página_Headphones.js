import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Itemcard from "./Product";
import data_HP from "./Data";
import Col from "react-bootstrap/Col";


const Pagina_Headphones= () => {

    const [sortState, setSortState] = useState('none');

    const sortMethods ={
        none: {method: (a, b) => null},
        ascending: {method: (a, b) => (a.price > b.price ? 1 : -1)},
        descending: {method: (a, b) => (a.price < b.price ? 1 : -1)}
    };

    return (
        <>
            <br/>
            <br/>
            <h1>Headphones</h1>
            <br/>
            <div>
                <select className='form-select' defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                    <option selected value='none'>Ordenar por</option>
                    <option value='ascending'>Precio menor a mayor</option>
                    <option value='descending'>Precio mayor a menor</option>
                </select>
                <br/>
                <Row md={2} lg={3} xs={1} style={{alignItems: "center"}}>
                    {data_HP.Headphones.sort(sortMethods[sortState].method).map((item, index) => {
                        return(
                            <div>
                                <Col>
                                    <Itemcard img={item.img}
                                              title={item.Nombre}
                                              price={item.price}
                                              item ={item}
                                              key={index}/>
                                </Col>
                                <br/>
                            </div>
                        )
                    })}
                    <br/>
                </Row>
            </div>

        </>
    )
};

export default Pagina_Headphones;


