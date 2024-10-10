import React from 'react'
import imagen from './../assets/images/R2D2.jpeg'
import './SumarNumeros.css'

function SumarNumeros() {
    var total = 0;
    const mostrarNumero = (numero) => {
        console.log(numero);
        total += numero;
        console.log("Total: " + total);
    }
  return (
    <div className='container'>
        <button onClick={ () => mostrarNumero(1) }>Numero 1</button>
        <button onClick={ () => mostrarNumero(2) }>Numero 2</button>
        <img src={imagen}/>
    </div>
  )
}

export default SumarNumeros