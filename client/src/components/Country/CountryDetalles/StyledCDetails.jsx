import styled from 'styled-components'

export const Details = styled.div`
        background: rgb(0,0,0);
        background: linear-gradient(0, rgba(0,0,0,0.6) 50%, rgba(220,20,60,0.6) 100%);
        width:45%;
        @media (max-width: 415px) {
            height:45vh;
            width:90%;
            background: linear-gradient(0, rgba(0,0,0,0.6) 25%, rgba(0,20,60,1) 100%);
        }  
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        margin:1vmax;
        border-radius:30px;
        font-weight:bold;
        .nombre{
            margin:0 1vmax;
            height:4%;
            font-size:2.2vmax;
            color:white;
            
        }
        .flag{
            margin:0 1vmax;
            height:40%;
            width:70%;
            img{
                width:100%;
                height:100%;
            }
        }
        .continente, .id, .capital, .subregion, .area, .poblacion{  
            margin:0 0.8vmax;
            height:4%;
            font-size:1.8vmax;
            color:white;
        }        
    
    
`