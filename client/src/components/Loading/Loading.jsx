/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingDiv } from './StyledLoading'
import { getCountries, getNameCountry, getIdCountries } from '../../redux/actions'


const Loading = ({ name }) => {
    const [mq, setMq] = useState('')
    const dispatch = useDispatch()
    const idCountries = useSelector(state => state.idCountries)
    useEffect(() => {
        window.innerWidth < 415 ? setMq('https://i.ibb.co/N6BtbMd/loadingRes.gif') : setMq('https://i.ibb.co/B62JcGX/loading.gif')
        if (name) dispatch(getNameCountry(name))
        else {
            dispatch(getCountries())
            idCountries.length !== 250 && dispatch(getIdCountries())
        }
    }, [])
    return (
        <LoadingDiv>
            <img className='gif' src={mq} alt='.' onerror="this.style.display='none'"></img>
        </LoadingDiv>
    )
}

export default Loading
