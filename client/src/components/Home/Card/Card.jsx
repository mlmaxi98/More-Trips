import React from 'react'
import { Cards } from './StyledCard'
import { NavLink } from 'react-router-dom'
const Card = ({ act, pais }) => {
    return (
        <Cards act={act}>
            <img src={pais.flag} alt='#'></img>
            <div className='info'>
                <h2>{pais.name}</h2>
                <p>{pais.region}</p>
                <NavLink to={`/pais/${pais.alpha3Code}`}>
                    <button>Ver más</button>
                </NavLink>
            </div>
        </Cards>
    )
}

export default Card
