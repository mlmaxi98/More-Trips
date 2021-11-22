import styled from 'styled-components'
import LoadGif from '../../images/loading.gif'
import LoadResGif from '../../images/loadingRes.gif'
import { useEffect, useState } from 'react'

//Coding
const Loading = () => {
    const [mq, setMq] = useState('')
    useEffect(() => {
        if (window.innerWidth < 415) setMq(LoadResGif)
        else setMq(LoadGif)
    }, [])

    return (
        <LoadingDiv>
            <img
                className='gif'
                src={mq}
                alt='loader'
            />
        </LoadingDiv>
    )
}

export default Loading

//Styles

const LoadingDiv = styled.div`

    display:absolute;
    margin:auto;
    
    .gif{
        width:15rem;
        height:15rem;
        border-radius:50%;

        @media (max-width: 415px) {
            width:30vmax;
            height:30vmax;
        }
    }
`