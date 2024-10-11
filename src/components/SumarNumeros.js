import React from 'react'
import imagen from './../assets/images/R2D2.jpeg'
import './SumarNumeros.css'

function SumarNumeros(props) {
    const mostrarNumero = (numero1, numero2) => {
        var total = parseInt(props.numero1) + parseInt(props.numero2);
        console.log("Total: " + total);
    }
  return (
    <div className='container'>
        <h1>Sumar numeros Component</h1>
        <button onClick={ () => mostrarNumero(7, 3) }>Suma {props.numero1} + {props.numero2}</button>
        <button onClick={ () => mostrarNumero(8, 1) }>Suma {props.numero1} + {props.numero2}</button><br/>
        <img src={imagen}/>
    </div>
  )
}

export default SumarNumeros