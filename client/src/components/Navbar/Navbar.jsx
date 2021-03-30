import React from 'react'
import { NavbarDiv } from './StyledNavbar'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <NavbarDiv>
            <NavLink to={'/'} className='boton'>
                <span><i className="fas fa-home"></i> Inicio</span>
            </NavLink>
            <NavLink to={'/crear'} className='boton'>
                <span><i className="fas fa-snowboarding"></i> Crear</span>
            </NavLink>
        </NavbarDiv>
    )
}