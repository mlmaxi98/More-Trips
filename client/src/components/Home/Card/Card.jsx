import React from 'react'
import { Cards } from './StyledCard'
import { NavLink } from 'react-router-dom'
const Card = ({ act, country }) => {
    return (
        <Cards act={act}>
            <img src={country.flag} alt='#'></img>
            <div className='info'>
                <h2>{country.name}</h2>
                <p>{country.region}</p>
                <NavLink to={`/pais/${country.id}`}>
                    <button>Ver más</button>
                </NavLink>
            </div>
        </Cards>
    )
}

export default Card
