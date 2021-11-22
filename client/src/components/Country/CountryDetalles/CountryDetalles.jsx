import React from 'react'
import { Details } from './StyledCDetails'
const CountryDetalles = ({ Detalles }) => {
    return (
        <Details>
            {
                Detalles
                    ? <>
                        <div className='nombre'>
                            <span>{Detalles.name}</span>
                        </div>
                        <div className='id'>
                            <span>( {Detalles.id} )</span>
                        </div>
                        <div className='flag'>
                            <img src={Detalles.flag} alt={Detalles.name} />
                        </div>
                        <div className='continente'>
                            <span>Continente: {Detalles.region}</span>
                        </div>
                        <div className='capital'>
                            <span>Capital: {Detalles.capital}</span>
                        </div>
                        <div className='subregion'>
                            <span>Subregión: {Detalles.subregion}</span>
                        </div>
                        <div className='area'>
                            <span>Area: {Detalles.area} km²</span>
                        </div>
                        <div className='poblacion'>
                            <span>Poblacion: {Detalles.population} Habitantes</span>
                        </div>
                    </>
                    : <h1>Error</h1>
            }
        </Details>
    )
}

export default CountryDetalles
