import styled from 'styled-components'

export const FooterDiv = styled.div`
    position:sticky;
    bottom:0;
    z-index:3;
    height:5vh;
    color: white;
    background-color:transparent;
    align-items:center;
    display:flex;
    background-color:rgba(0,0,0,0.6);
    .links{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        i{
            color:crimson;
            transition:0.5s;
            font-size:2vmax;
            @media (max-width: 415px) {
                font-size:4vmax;
                color:white;
            }
            &:hover{
                background-color:transparent;
                color:white;
                @media (max-width: 415px) {
                color:rgba(0,20,60,1);
                text-shadow:1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
            }
            }
        }
        button{
            background-color:transparent;
            border:none;
        }
    }
`