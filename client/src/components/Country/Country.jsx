import styled from 'styled-components'
import Loading from '../Loading/Loading'
import CountryDetalles from './CountryDetalles/CountryDetalles'
import Activities from '../Activities/Activities'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getCountry } from '../../redux/reducer'

const Country = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
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
                                    <CountryDetalles country={country} />
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

//Styled

/* const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
} */

const CountryDiv = styled.div`
    height:90vh;
    display:flex;

    .pantalla{

        display:flex;
        width:100%;
        
        @media (max-width: 415px) {

            flex-direction: column;
            justify-content: center;
            align-items:center;
        
        }  
    }
`
