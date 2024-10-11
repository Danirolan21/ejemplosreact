import React from 'react'

function SaludoHijo(props) {
    //CAPTURAMOS EN UNA VARIABLE EL METODO DEL PARENT
    //QUE VIENE EN PROPS
    var ejecutarPadre = props.metodoPadre;
  return (
    <div>
        <h1 style={{color: "blue"}}>SaludoHijo</h1>
        <button onClick={ () => ejecutarPadre() }>Llamar al Parent</button>
    </div>
  )
}

export default SaludoHijo