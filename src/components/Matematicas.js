import React from 'react'
import './SumarNumeros.css'

function Matematicas(props) {
    var tripleDelNumero = props.tripleNumero;

    const dobleDelNumero = () => {
        var doble = props.num * 2;
        console.log("Doble: " + doble);        
    }
  return (
    <div className='container'>
        <button onClick={ () => dobleDelNumero() }>Doble de {props.num}</button>
        <button onClick={ () => tripleDelNumero() }>Triple de {props.num}</button>
    </div>
  )
}

export default Matematicas