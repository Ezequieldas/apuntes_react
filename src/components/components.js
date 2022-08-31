/*
En react se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.

Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas unas de otras.

El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar

Se le pueden pasar datos a un componente a través de algo llamado propr y devuelven a React elementos que describen lo que se debe ver en la pantalla.

React permite definir componentes como clases o como funciones.
*/

import React, {Component} from "react";


// Componente como clase
class Componente extends Component {
  render(){
    return <h2>{this.props.msj}</h2>
  }
}

export default Componente

// Componente como función
function ComponentFunction (props) {
  return <h2>{props.msg}</h2>
}

ComponentFunction();

// Componente como función expresada
const ComponentfunctExp = props => <h2>{props.msj}</h2>
