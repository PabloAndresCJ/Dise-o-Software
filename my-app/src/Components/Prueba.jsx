import React, { Component, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
class Prueba extends Component {
    state = { 
        contador:1+10
     }
     handleSize(){
        const size= 60
        let style={
            fontSize:size,
            fontWeight: BeforeUnloadEvent,
            color: "white"
        }
        return style
     }
    render() { 
        return (<Button variant="outline-danger" >Hello World {}</Button>);
    }
}

export default Prueba;