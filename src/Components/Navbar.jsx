import React from "react";
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/feedback'>Feedback</NavLink>
            <select>
                <option defaultValue>en</option>
                <option>de</option>
            </select>
        </nav>
    );
};

export default Navbar;
