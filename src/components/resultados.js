import './resultados.css';

const Resultados = ({ response }) => {
    let HtmlResponse = null;
    const fecha = response.results?response.results.periodos[0].periodo:"00000000"; // puede venir como string o número
    const anio = fecha.slice(0, 4);   // "2025"
    const mes = fecha.slice(4, 6);    // "08"

    const fechaFormateada = `${mes}/${anio}`; // "08/2025"

    if (response && response.status === 200) {
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
                            <td key={index + 1}>{entidad.situacion}</td>
                            <td key={index + 2}>{entidad.monto}</td>
                        </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    } else if (response) {
        HtmlResponse = <div className='resultados'>
            <p>No se encontraron datos</p>
        </div>
    }

    return HtmlResponse;
}

export default Resultados;