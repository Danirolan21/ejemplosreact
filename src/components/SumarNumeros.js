import React from 'react'
import imagen from './../assets/images/R2D2.jpeg'
import './SumarNumeros.css'

function SumarNumeros(props) {
    var num1 = props.numero1;
    var num2 = props.numero2;
    const mostrarNumero = (numero1, numero2) => {
        var total = parseInt(numero1) + parseInt(numero2);
        console.log("Total: " + total);
    }
  return (
    <div className='container'>
        <h1>Sumar numeros Component</h1>
        <button onClick={ () => mostrarNumero(num1, num2) }>Suma {num1} + {num2}</button><br/>
        <img src={imagen}/>
    </div>
  )
}

export default SumarNumeros