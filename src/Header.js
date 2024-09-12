import React from 'react';
import logo from './assets/logo.png'

function Header(){
    return(
        <header>
            <img src={logo} alt = "Little Lemon Logo"></img>
            <h1>My website</h1>
        </header>
    );
}

export default Header;
