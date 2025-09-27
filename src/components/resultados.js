import './resultados.css';

const Resultados = ({ response }) => {
    let HtmlResponse = null;
    let fechaFormateada = "";

    if (response && response.status === 200) {
        const fecha = response.results.periodos[0].periodo; // puede venir como string o número
        const anio = fecha.slice(0, 4);   // "2025"
        const mes = fecha.slice(4, 6);    // "08"
        fechaFormateada = `${mes}/${anio}`; // "08/2025"
        const sit = ["normal", "con deuda", "en mora"];

        HtmlResponse = <div className="resultados">
            <p><strong>Nombre: </strong>{response.results.denominacion}</p>
            <p><strong>Cuil: </strong>{response.results.identificacion}</p>

            <p><strong>Periodo: </strong> {fechaFormateada} </p>

            <table className='tablaResultados'>
                <thead>
                    <tr>
                        <th>Entidad</th>
                        <th>Situacion</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {response.results.periodos[0].entidades.map((entidad, index) => {
                        return (<tr>
                            <td key={index}>{entidad.entidad}</td>
                            <td style={{ "color": entidad.situacion === 3 ? "red" : "black" }} key={index + 1}>{sit[entidad.situacion - 1]}</td>
                            <td key={index + 2}>{"$" + entidad.monto * 1000}</td>
                        </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    } else if (response && response.status === 400) {
        HtmlResponse = <div className='resultados'>
            <p> {response.errorMessages[0]} </p>
        </div>
    } else if (response && response.status === 404) {
        HtmlResponse = <div className='resultados'>
            <p> {response.errorMessages[0]} </p>
        </div>
    }

    return HtmlResponse;
}

export default Resultados;