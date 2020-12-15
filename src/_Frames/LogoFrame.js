
import React from 'react'

import {NavLink} from 'react-router-dom';

import logo from '../assets/images/logo/computer.svg'

const frame = () => {
    const logoLink = {
        display: 'flex',
        alignItems: 'center'
    }
    const logoStyle = {
        width: 40,
        height: 30
    }
    const logoTitle = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16,
        fontWeight: 700,
        color: '#000'
    }
    const logoSubTitle = {
        fontSize: 12,
        fontWeight: 700,
        color: '#dedede',
        marginTop: 4
    }

    return (
        <NavLink className="logo " style={logoLink} to="/">
            <img src={logo} style={logoStyle} alt='logo'/>
            <span style={logoTitle}>
                Ремонт компьютеров
                <span style={logoSubTitle}>В Санкт Петербурге</span>
            </span> 
        </NavLink>
    )
}
export default frame