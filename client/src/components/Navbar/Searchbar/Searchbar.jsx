import React from 'react'
import { SearchDiv } from './StyledSearchbar'
const Searchbar = () => {
    return (
        <SearchDiv>
            <input type='search' className='search' placeholder='Ingresa un país...'/>
            <button className='buscar'><i className="fas fa-search"></i></button>
        </SearchDiv>
    )
}

export default Searchbar
