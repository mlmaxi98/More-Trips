import React from 'react'
import { Details } from './StyledCDetails'
const CountryDetalles = ({ Detalles }) => {
    return (
        <Details>
            {Detalles ? <>
                <div className='nombre'><span>{Detalles.Nombre}</span></div>
                <div className='id'><span>( {Detalles.id} )</span></div>
                <div className='flag'>
                    <img src={Detalles.Bandera} alt='#'></img>
                </div>
                <div className='continente'>
                    <span>Continente: {Detalles.Continente}</span>
                </div>
                <div className='capital'><span>Capital: {Detalles.Capital}</span></div>
                <div className='subregion'><span>Subregión: {Detalles.Subregion}</span></div>
                <div className='area'><span>Area: {Detalles.Area} km²</span></div>
                <div className='poblacion'><span>Poblacion: {Detalles.Poblacion} Habitantes</span></div>
            </> : <h1>Error</h1>
            }
        </Details>
    )
}

export default CountryDetalles
