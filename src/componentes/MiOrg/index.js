import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks --> funcionalidades que nos ayudan a trabajar con el comportamiento de React
    //useState
    //useState() --> función
    
    //const [nombreVariable, funciónActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState() // valor inicial del estado
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg