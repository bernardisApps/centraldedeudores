import React, { useState } from 'react'
import './buscador.css';

const Buscador = ({ response, setResponse }) => {
    const [textCuil, setTextCuil] = useState("");
    const url = "https://api.bcra.gob.ar/CentralDeDeudores/v1.0/Deudas/"

    const onClick = async () => {
        try {
            const urlFull = url + textCuil;
            const respuesta = await fetch(urlFull);
            const respObject = await respuesta.json();
            setResponse(respObject);

        } catch (error) {
            console.log(error);
        }

    };

    const HtmlBuscador = <div className='buscador'>
        <h3>Ingrese su cuil para acceder a sus datos:</h3>
        <input onChange={(ev)=>{setTextCuil(ev.target.value)}} type='number' placeholder='Ingrese su cuil'></input><br /><br />
        <button onClick={onClick} className='btnBuscar'>Buscar</button>
    </div>

    return HtmlBuscador;
}

export default Buscador;