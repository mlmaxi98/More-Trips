import React from 'react'
import { Activity } from './StyledActivities'
const Activities = ({ activities }) => {

    return (
        <Activity >
            <div className='titulo'><span>Actividades</span></div>

            <div className='actividades'>
                {activities && activities.length > 0 ? activities.map((actividad) => {
                    return <div className='notas' key={actividad.id}>
                        <div className='nombre'>{actividad.Nombre}</div>
                        <div className='detalles'>
                            <div><span>Dificultad: {actividad.Dificultad}</span></div>
                            <div><span>Duracion: {actividad.Duracion}</span></div>
                            <div><span>Temporada: {actividad.Temporada}</span></div>
                        </div>
                    </div>
                }) : <div className='notFound'><h1>No se registraron Actividades en este país</h1></div>
                }
            </div>
        </Activity>
    )
}

export default Activities
