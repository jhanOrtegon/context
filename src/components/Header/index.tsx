import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <NavLink to={'/home'} className={({ isActive }) => isActive ? 'bg-dark text-white p-2' : ''}>home</NavLink>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-dark text-white p-2' : ''}>inicio</NavLink>
        </div >
    )
}

export default Header
