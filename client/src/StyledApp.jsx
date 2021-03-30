import styled from 'styled-components'

export const AppDiv = styled.div`
    text-align: center;
    background-image: url('https://cocolab.mx/assets/experiences/teotihuacan_nocturno_15.jpg');
    @media (max-width: 415px) {
        background-image: url('https://i.pinimg.com/originals/80/7f/c8/807fc8ed29d575f2ead27c8a1dbd22c9.jpg');
        } 
    user-select:none;
    background-repeat: round;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    color: #d9d9d9;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, .1), 1px 1px 1px rgba(0, 0, 0, .5);

    ::placeholder {
        color: white;
        font-weight: lighter;
        font-size: 1.15vmax;
    }
`