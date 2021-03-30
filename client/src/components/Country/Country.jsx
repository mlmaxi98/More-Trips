/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Loading/Loading'
import { getCountry } from '../../redux/actions'
import { CountryDiv } from './StyledCountry'
import CountryDetalles from './CountryDetalles/CountryDetalles'
import Activities from '../Activities/Activities'
const Country = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const id = props.match.params.id;
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountry(id))
        setTimeout(() => setLoading(false), 1500)
    }, [])

    return (
        <CountryDiv>
            {loading ?
                <Loading />
                :
                <div className='pantalla'>
                    {country ?
                        <>
                            <CountryDetalles Detalles={country} />
                            <Activities activities={country.activities} />
                        </>
                        : <h1>Error 404: Intentó acceder a un pais inexistente</h1>}
                </div>
            }
        </CountryDiv>
    )
}

export default Country
