import styled from 'styled-components'

export const LoadingDiv = styled.div`
    display:block;
    margin:auto;
    .gif{
        width:15vmax;
        height:15vmax;
        @media (max-width: 415px) {
            width:30vmax;
        height:30vmax;
            }
        border-radius:50%;
        /* border:0.5vmax solid rgba(0,20,60,1); */
    }
`