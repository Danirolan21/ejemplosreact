import React from 'react'
import imagen from './../assets/images/R2D2.jpeg'
import './SumarNumeros.css'

function SumarNumeros() {
    const mostrarNumero = (numero1, numero2) => {
        var total = 0;
        total = numero1 + numero2;
        console.log("Total: " + total);
    }
  return (
    <div className='container'>
        <h1>Sumar numeros Component</h1>
        <button onClick={ () => mostrarNumero(7, 3) }>Suma 7 + 3</button>
        <button onClick={ () => mostrarNumero(8, 1) }>Suma 8 + 1</button><br/>
        <img src={imagen}/>
    </div>
  )
}

export default SumarNumeros