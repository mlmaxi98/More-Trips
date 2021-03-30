import styled from 'styled-components'
export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const CountryDiv = styled.div`
    
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
