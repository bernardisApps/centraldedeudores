import { useState, useEffect } from 'react';
import './divisas.css';

const Divisas = () => {

    const [div, setDiv] = useState([]);

    useEffect(() => {
        try {

            fetch('https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones')
                .then(response => response.json())
                .then(data => {
                    setDiv(data);
                });
        } catch (error) {
            setDiv([{ status: 400, errorMessages: ["problemas para conectar con el servidor"] }]);
        }
    }, []);

    let HtmlResponse = null;

    if (div.status === 400) {
        HtmlResponse = <div className='resultados'>
            <p> {div.errorMessages[0]} </p>
        </div>
    } else if (div.status === 404) {
        HtmlResponse = <div className='resultados'>
            <p> {div.errorMessages[0]} </p>
        </div>
    } else if (div.status === 200) {
        HtmlResponse = <div className='divisasContainer'>

            {div.results.detalle.filter(item => item.codigoMoneda === "USD" || item.codigoMoneda === "EUR" || item.codigoMoneda === "JPY").map((item, index) => {
                return <div className='divisa'>
                    {item.codigoMoneda} =💲{item.tipoCotizacion}
                </div>
            })}

        </div>
    }
    return (
        <div>
            {HtmlResponse}
        </div>
    );


}

export default Divisas;