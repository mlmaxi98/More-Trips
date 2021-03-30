import styled from 'styled-components'
export const Activity = styled.div`
        width:55%;
        margin:1vmax;
        border-radius:30px 30px 0 30px;
        font-weight:bold;
        background: rgb(0,0,0);
        background: linear-gradient(0, rgba(0,0,0,0.6) 50%, rgba(220,20,60,0.6) 100%);
        color:white;
        @media (max-width: 415px) {
            height:45vh;
            width:90%;
            background: linear-gradient(0, rgba(0,0,0,0.6) 25%, rgba(0,20,60,1) 100%);
        }  
        .titulo{
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:30px;
            @media (max-width: 415px) {
                font-size:2.5vmax;
        }  
            height:10%;
            margin:auto;
        }
        .actividades{
            position:relative;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;
            overflow-y:scroll;
            
            height:90%;
            .notas{
                margin:20px auto;
                padding:10px 0;
                
                background-color:rgba(0,0,0,0.8);
                @media (max-width: 415px) {
                    height:40%;
                
        }  
                width:40%;
                height:20vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                border:1px solid black;
                border-radius:20px;
                transition:0.5s;
                box-shadow: 5px 5px 5px 0px rgba(220,20,60,0.6);
                @media (max-width: 415px) {
                box-shadow: 5px 5px 5px 0px rgba(255,255,255,0.4);
                font-size:2.5vmax;
        }  
                /* &:hover{
                    transform: translate(5px, 5px);
                    box-shadow: none;
                } */
                
                .nombre{
                    font-size:2vmax;
                    @media (max-width: 415px) {
                font-size:2.5vmax;
        }  
                }
                .detalles{
                font-size:1.5vmax;
                    @media (max-width: 415px) {
                    font-size:2vmax;
        } 
                    list-style:none;
                }
            }
            .notFound{
                margin:auto;
                font-size:1.5vmax;
            }
    }
`