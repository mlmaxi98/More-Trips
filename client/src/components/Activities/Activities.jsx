import React from 'react'
import { Activity } from './StyledActivities'
const Activities = ({ activities }) => {

    return (
        <Activity >
            <div className='titulo'><span>Actividades</span></div>

            <div className='actividades'>
                {activities && activities.length > 0 ? activities.map((activity) => {
                    return <div className='notas' key={activity.id}>
                        <div className='nombre'>{activity.name}</div>
                        <div className='detalles'>
                            <div><span>Dificultad: {activity.difficult}</span></div>
                            <div><span>Duracion: {activity.duration}</span></div>
                            <div><span>Temporada: {activity.season}</span></div>
                        </div>
                    </div>
                }) : <div className='notFound'><h1>No se registraron Actividades en este país</h1></div>
                }
            </div>
        </Activity>
    )
}

export default Activities
