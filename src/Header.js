import React from 'react';
import logo from './assets/logo.png';
import Nav from './Nav.js';

const Header = () => {
    return(
        <header>
            <img src={logo} alt = "Little Lemon Logo"></img>
            <Nav/>
        </header>
    );
}

export default Header;
