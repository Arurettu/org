import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map (cuando queramos utilizar o recorrer un arreglo) -> arreglo.map( (equipo, index) => {
    // return <option></option>
    //}) ---- Map va a tomar un arreglo de información y a partir de eso lo va a transformar y nos va a regresar un nuevo arreglo con esos datos transformados

    
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option> ) }
        </select>
    </div>
}

export default ListaOpciones