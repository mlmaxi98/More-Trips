/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoadingDiv } from './StyledLoading'
import LoadGif from '../../images/loading.gif'
import LoadResGif from '../../images/loadingRes.gif'

const Loading = () => {
    const [mq, setMq] = useState('')

    useEffect(() => {
        if (window.innerWidth < 415) {
            setMq(LoadResGif)
        }
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
