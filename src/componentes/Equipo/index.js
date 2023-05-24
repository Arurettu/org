import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {backgroundColor: hexToRgba(colorPrimario, 0.6)}    //cambiamos secundario por primario
    
    
    const estiloTitulo = {borderColor: colorPrimario}   //style={{borderColor: props.datos.colorPrimario}}


    return <>
    {
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}     //cambiamos secundario por primario
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}         //En inputs o formularios cuando estamos modificando o agregando un value que viene de una prop o una variable necesitamos controlarlo, es decir quitarle la responsabilidad al navegador para que nosotros nos encarguemos de qué va a pasar cuando el ususario interactue con este input. OnChange va a tener una función que se ejecutará cada vez que haya un cambio en el input
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">            
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }
            
        </div>
    </section>
    }
    </>
}

export default Equipo