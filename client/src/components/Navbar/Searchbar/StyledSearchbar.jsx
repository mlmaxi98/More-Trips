import styled from 'styled-components'

export const SearchDiv = styled.form`
    width:25%;
    display:flex;
    justify-content:center;
    .search{
        width:80%;
        border:1px solid white;
        background-color:transparent;
        padding: 5px 10px;
        border-radius: 10px 0 0 10px ;
        color:white;
        font-size:20px;
        
    }
    .buscar{   
        font-size:20px;
        width:20%;
        border:1px solid white;
        background-color:crimson;
        padding: 5px 10px;
        color:white;
        transition:0.5s;
        border-radius: 0 10px 10px 0 ;
        &:hover{
            color:black;
            background-color:white;
        }
    }
`