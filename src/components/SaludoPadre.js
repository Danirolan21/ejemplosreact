import React from 'react'
import SaludoHijo from './SaludoHijo'

function SaludoPadre() {
    //NECESITAMOS UN METODO EN ESTE CODIGO PARA 
    //QUE EL HIJO SEA CAPAZ DE EJECUTARLO
    const metodoPadre = () => {
        console.log("Ejecutando método del PARENT");
        
    }
  return (
    <div>
        <h1 style={{color: "red"}}>SaludoPadre</h1>
        {/* DESDE PROPS ENVIAREMOS EL METODO DEL PARENT
        PARA QUE EL HIJO PUEDA REALIZAR LA LLAMADA */}
        <SaludoHijo metodoPadre={metodoPadre}/>
    </div>
  )
}

export default SaludoPadre