import { Details } from './StyledCDetails'
const CountryDetalles = ({ country }) => {
    const { id, name, flag, region, capital, subregion, area, population } = country
    return (
        <Details>
            <div className='nombre'>
                <span>{name}</span>
            </div>
            <div className='id'>
                <span>( {id} )</span>
            </div>
            <div className='flag'>
                <img src={flag} alt={name} />
            </div>
            <div className='continente'>
                <span>Continente: {region}</span>
            </div>
            <div className='capital'>
                <span>Capital: {capital}</span>
            </div>
            <div className='subregion'>
                <span>Subregión: {subregion}</span>
            </div>
            <div className='area'>
                <span>Area: {area} km²</span>
            </div>
            <div className='poblacion'>
                <span>Poblacion: {population} Habitantes</span>
            </div>
        </Details>
    )
}

export default CountryDetalles
