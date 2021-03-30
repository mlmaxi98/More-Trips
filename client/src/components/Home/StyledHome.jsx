import styled from 'styled-components'

export const HomeDiv = styled.div`
    min-height:90vh;
    background-color:transparent;
    color: white;
    display:flex;
    flex-direction:column;
    outline: none;
    .menu{
        position:sticky;
        top:0;
        z-index:3;
        justify-content:space-between;
        background: rgb(0,0,0);
        background: linear-gradient(315deg, rgba(0,0,0,1) 40%, rgba(220,20,60,1) 100%);
        height:auto;
        width:auto;
        padding:0.5vmax;
        margin:1vmax auto;
        border-radius:30px;
        @media (max-width: 415px) {
            border-radius:1.8vmax 1.8vmax 5vmax 5vmax;
            background: linear-gradient(315deg, rgba(0,0,0,1) 20%, rgba(0,20,60,1) 100%);
            }
        font-weight:bold;
        transition:1s;
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.8);
        
        .filtros{
            min-height:70%;
            display:flex;
            flex-direction:column;
            .buscador{
                width:auto;
                height:30%;
                .search{
                    
                    text-align:center;
                    padding: 0.1vmax ;
                    outline: none;
                    width:30%;
                    border:1px solid white;
                    background-color:transparent;
                    border-radius: 10px 0 0 10px ;
                    color:white;
                    font-size:18px;
                }
                .buscar{
                    outline: none;
                    font-size:18px;
                    width:40px;
                    padding:0.1vmax;
                    border:1px solid white;
                    background-color:crimson;
                    @media (max-width: 415px) {
            background: rgba(0,20,60,1);
            border:1px solid white;
            }
                    color:white;
                    transition:0.5s;
                    border-radius: 0 10px 10px 0 ;
                    &:hover{
                        color:black;
                        background-color:white;
                    }
                }
            }
            .filter{
                height:70%;
                display:flex;
                flex-direction:column;
                justify-content: space-around;
                width:auto;
                .ContAct{
                    display:flex;
                    .continente{
                        width:50%;
                        select{
                            color:white;
                            font-weight: bold;
                            outline:none;
                            border-radius:20px;
                            background: transparent;
                            
                            option{
                                background-color:crimson;
                                @media (max-width: 415px) {
            background: rgba(0,20,60,1);
            }
                                border-radius:20px;
                                font-weight:bold;
                            }
                        }
                        .filCont{
                            display:flex;
                            flex-direction:column;
                            select{
                                margin:0 auto;
                                width:70%;
                            }
                        }
                    }
                    .Actividades{
                        display:flex;
                        flex-direction:column;
                        width:50%;
                        align-items:center;
                        select{
                            width:80%;
                            margin:0 0.5vmax;
                            color:white;
                            outline:none;
                            font-weight: bold;
                            border-radius:20px;
                            background: transparent;
                            option{
                                background-color:rgba(0,0,0,0.9);
                                border-radius:20px;
                                font-weight:bold;
                            }
                        }
                        .temp{
                            display:flex;
                        flex-direction:column;
                        
                    }
                    .actFilters{
                        display:flex;
                        justify-content:space-evenly;
                        width:100%;
                        .Duracion, .Dificultad{
                            display:flex;
                            flex-direction:column;
                        }
                        }
                    }
                }
            }
        }
        .paginado{
            min-height:30%;
            margin:10px 0;
            .np{
                width:10%;
                padding: 0.2vmax;
                margin: 0 5px;
                outline: none;
                border: none;
                border-radius: 20px;
                background: crimson;
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: 0.4s;
                @media (max-width: 415px) {
            background: rgba(0,20,60,1);
            border:1px solid white;
            }
                &:hover{
                    background: white;
                    color: black;
                }
            }
            .count{
                width:5%;
                padding:0.2vmax;
                border:none;
                @media (max-width: 415px) {
            background: rgba(0,20,60,1);
            border:1px solid white;
            }
                background: crimson;
                color: white;
			    font-weight: bold;
                text-align:center; 
                border-radius:30px;
            }
        }
    }
    .cards{
        height:83%;
        display:flex;
        margin: auto 0 ;
        justify-content: space-around;
        flex-wrap:wrap;
    }
    span{
        font-size:2vmax;
        color:black;
        @media (max-width: 415px) {
        font-size:3vmax;
        color:rgba(0,20,60,1);
            }
        text-shadow: 0 0 10px #FFFFFF;
        font-weight:bold;
    }
`