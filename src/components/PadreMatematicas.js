import React from 'react'
import Matematicas from './Matematicas'

function PadreMatematicas(props) {
    const TripleNumero = () => {
        var triple = props.numero * 3;
        console.log("Triple: " + triple);
        
    }
  return (
    <div>
        <h1>Comunicación Entre Components</h1>
        <Matematicas tripleNumero={TripleNumero} num={props.numero}/>
    </div>
  )
}

export default PadreMatematicas