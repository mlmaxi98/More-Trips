import styled from 'styled-components'

export const NavbarDiv = styled.div`
        position:sticky;
        top:0;
        margin:0 auto;
        width:60%;
        height:5vh;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        .boton{
            display:flex;
            justify-content:space-around;
            color:crimson;
            width:auto;
            padding:0 1vmax;
            transition:0.5s;
            text-align:center;
            text-decoration:none;
            &:hover{
                background-color:transparent;
                color:white;
            }
        }
        span{
            font-weight:bolder;
            font-size:1.8vmax;
            @media (max-width: 415px) {
                font-size:3vmax;
               
            color: rgba(0,20,60,1);
            text-shadow:1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
            
        }  
        }
`