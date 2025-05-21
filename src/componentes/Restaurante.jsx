import React from "react";
import "./Restaurante"; //importamos el css

class Restaurante extends React.Component {

    render() { // el render es una funcion que se ejecuta cada vez que cambie alguno de estos elementos, las props o el estado del componente

        const { nombre, direccion, tipo, imagen } = this.props ; //Desestructuramos las propiedades del componente Restaurante, es un objeto

        return (//todo lo que esta dentro de return es jsx y todo lo que esta afuera es js/
            <div>
                <h1>{nombre}</h1>
                <h3>{direccion}</h3>
                <h4>{tipo}</h4>
                <img src={imagen} alt={nombre}/>
            </div>
        );
    }


}

export default Restaurante;  //disponible para otros archivos

