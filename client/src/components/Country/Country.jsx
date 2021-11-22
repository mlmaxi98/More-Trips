/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Loading/Loading'
import { getCountry } from '../../redux/actions'
import { CountryDiv } from './StyledCountry'
import CountryDetalles from './CountryDetalles/CountryDetalles'
import Activities from '../Activities/Activities'
import { useParams } from "react-router-dom";
const Country = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const loading = useSelector(state => state.loading)
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountry(id))
    }, [])

    return (
        <CountryDiv>
            {
                loading
                    ? <Loading />
                    : <div className='pantalla'>
                        {
                            Object.keys(country).length > 0
                                ? <>
                                    <CountryDetalles Detalles={country} />
                                    <Activities activities={country.activities} />
                                </>
                                : <h1>Error 404: Intentó acceder a un pais inexistente</h1>
                        }
                    </div>
            }
        </CountryDiv>
    )
}

export default Country
