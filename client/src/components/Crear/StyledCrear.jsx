import styled from 'styled-components'

export const CrearDiv = styled.div`
    
    display:flex;
    flex-direction:row;
    @media (max-width: 415px) {
            flex-direction: column;
            justify-content: center;
            align-items:center;
            min-height:90vh;
            overflow-y:scroll;
    font-size:2.5vmax;
    position:sticky;
        top:0;
        z-index:3;
    }  
    color:white;
    font-size:1.5vmax;
    height:90vh;
    font-weight:bold;
    .form{
        border-radius:30px;
        background: rgb(0,0,0);
        background: linear-gradient(0, rgba(0,0,0,0.6) 50%, rgba(220,20,60,0.6) 100%);
        margin:30px;
        padding:20px;
        display:flex;
        flex-direction:column;
        width:30%;
        @media (max-width: 415px) {
            background: linear-gradient(0, rgba(0,0,0,0.6) 25%, rgba(0,20,60,1) 100%);
            margin: 0.5vmax auto;
            padding:1.5vmax;
            width:85%;
            height:40%;
        } 
        @media (max-height: 320px) {
            /* width:0%; */
            height:90%;
            position:sticky;
        top:0;
        z-index:3;
            
        }
        .titulo{
            min-height:10%;
            margin:auto;
        }
        .inputs{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            min-height:90%;
        }
        .Nombre{
            display:flex;
            justify-content: space-between;
            .colorInput{
                width:60%;
            }        
        }
        .Dificultad{
            display:flex;
            justify-content: space-between;
            .colorInput{
                width:20%;
            }
        }
        .Duracion{
            display:flex;
            justify-content: space-between;
            .colorInput{
                width:20%;
            }
        }
        .Temporada{
            display:flex;
            justify-content: space-between;
        }
        
        .Temporada select{
            color:white;
            font-size:16px;
            font-weight: bold;
            background: rgba(220,20,60,0.8);
            @media (max-width: 415px) {
                background:rgba(0,20,60,1);
            }  
            
            width:30%;
            border-radius: 10px;
            transition:1s;
            &:hover{
                @media (max-width: 415px) {
                    color:white;
                }
                color:black;
                background-color:transparent;
            }
        }
        .Paises{      
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            height:40%;
            @media (max-width: 415px) {
                margin: 0 auto;
                width:60%;
                height:20%;
            }
            select{
                background: rgba(220,20,60,0.8);    
            @media (max-width: 415px) {
                background:rgba(0,20,60,1);
            }
                width:80%;
                height:100%;
                margin:auto;
                border-radius: 10px;
                font-size:16px;
                font-weight: bold;
                color:white;
            }
        }
        .crear{
            background: rgba(220,20,60,0.8);
            width:30%;
            @media (max-width: 415px) {
                width:40%;
                background:rgba(0,20,60,1);
        }  
            margin:0 auto;
			padding:5px 10px;
            border:none;
			outline: none;
			border-radius: 20px;
			color: white;
			font-weight: bold;
			cursor: pointer;
			transition: 0.4s ease;
			&:hover{
				background: white;
				color: black;
				}
            }
        .colorInput{
            background: rgba(220,20,60,0.8);
            @media (max-width: 415px) {
                
                background:rgba(0,20,60,1);
        }  
            padding:auto;
            outline: none;
            border:1px solid white;
            font-size:18px;
            text-align:center;
            color:white;
            transition:0.5s;
            border-radius: 10px;
            &:hover{
                background-color:transparent;
            }
        }
    }
    .creados{
        @media (max-width: 415px) {
            width:85%;
            height:50%;
            overflow:scroll;
            margin:auto;
            padding:1.5vmax;
        }
        border-radius:30px 30px 0 30px;
        background: rgb(0,0,0);
        background: linear-gradient(0, rgba(0,0,0,0.6) 50%, rgba(220,20,60,0.6) 100%);
        @media (max-width: 415px) {
            background: linear-gradient(0, rgba(0,0,0,0.6) 25%, rgba(0,20,60,1) 100%);
        }  
        @media (max-height: 320px) {
            width:0%;
            height:0%;
            visibility:hidden;
        }
        margin:30px;
        width:60%;
        display:flex;
        flex-direction:column;
        overflow:hidden;
        .title{
            display:flex;
            align-items:center;
            height:10%;
            margin:auto 0;
            justify-content:center;
            .crear{
            background: rgba(220,20,60,0.8);
            margin:0 1vmax;
            @media (max-width: 415px) {
                /* border:0.5vmax solid white; */
                background:rgba(0,20,60,1);
                border-radius:50%;
                text-align-last:center;
            width:5vmax;
			padding:0.5vmax;
            }  
            border:none;
            width:2vmax;
			padding:0.5vmax;
			outline: none;
			border-radius: 20px;
			color: white;
			font-weight: bold;
			cursor: pointer;
			transition: 0.4s ease;
			&:hover{
				background: white;
				color: black;
				}
            }
        }
        .countries{
            height:90%;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-around;
            width:100%;
            margin:30px;
            overflow-y:scroll;
            margin:auto;
        }
    }
    
    
`