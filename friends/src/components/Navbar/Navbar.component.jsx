import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import logo from '../../logo.svg';

const Navbar = () => {
    return(
        <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><Link to='/'>
                    Home</Link></li>

                <li><Link to='/friends'>
                    Friends</Link></li>

                <li><Link to='/login'>
                    Log In</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;