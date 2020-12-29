import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid';


const Formulario = ({crearCita}) => {
    // Crear Statede citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [ error, actualizarError ] = useState(false)

    // Funcion que se ejecuta cuando el usuario escribe en el input

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    // extraer los valores de la funcion.

    const {mascota, propietario, fecha, hora, sintomas} = cita;
    //Cuando el usuario presiona enviar el formulario


    const submitCita = (e) => {
        e.preventDefault();

        //Validar el formulario antes de enviar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear cita.
        crearCita(cita);

        //Reiniciar Form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p>   : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la mascota'
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />
               <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />
               <label>Sintomas</label>
                    <textarea
                        className='u-full-width'
                        name='sintomas'
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>

                    <button
                        type='submit'
                        className='u-full-width button-primary'
                    >Agregar cita</button>

            </form>
        </Fragment>
     );
}
 


export default Formulario;