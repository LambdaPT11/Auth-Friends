import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import logo from '../../logo.svg';

const Navbar = () => {
    return(
        <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
            <div className="search">
                <input className="search-input"></input>
                <i class="fas fa-search i-search"></i>
            </div>
                <ul>
                    <li><Link to='/'>
                        Home</Link></li>

                    <li><Link to='/readme'>
                        Read Me</Link></li>

                    <li><Link to='/friends'>
                        Friends</Link></li>

                    <li><Link to='/addfriend'>
                        Add Friend</Link></li>

                    <li><Link to='/login'>
                        Log In</Link></li>

                    <li><Link to='/logout'>
                        Log Out</Link></li>
                </ul>
        </nav>
    )
}
export default Navbar;