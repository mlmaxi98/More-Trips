import styled from 'styled-components'
import Background from './images/background.jpg'

export const AppDiv = styled.div`
    min-height: 100vh;
    background-image: url(${Background});
    background-size: 'cover';
    background-repeat: round;
    user-select:none;
    color: #d9d9d9;

    ::placeholder {
        color: #d9d9d9;
        font-weight: bold;
        font-size: 1rem;
    }
`