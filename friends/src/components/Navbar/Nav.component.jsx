import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import logo from '../../logo.svg';


const Navbar = () => {  
    const token = localStorage.getItem('token');

    const [logIn, setLogin ] = useState(false)

    const CheckLog = () => {
        if (token !== null) {
            setLogin(true);
        }else{
            setLogin(false);
        }
        console.log(logIn);
    }    

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.setItem('logIn', false);
        CheckLog();
    }

    useEffect(() => {
        CheckLog();
        }
        
    )
    
    return(
        <nav className="navbar">
        
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Rolodex</h2>
            
                <ul>
                    <li className={!logIn ? 'l-in' : 'l-out'}><Link to='/'>
                        Home</Link></li>

                    <li className={!logIn ? 'l-in' : 'l-out'}><Link to='/readme'>
                        Read Me</Link></li>

                    <li className={!logIn ? 'l-in' : 'l-out'}><Link to='/login'>
                        Log In</Link></li>
               
                    <li className={!logIn ? 'l-out' : 'l-in'}><Link to='/friends'>
                        Friends</Link></li>

                    <li className={!logIn ? 'l-out' : 'l-in'}><Link to='/addfriend'>
                        Add Friend</Link></li>

                    <li onClick={logout} className={!logIn ? 'l-out' : 'l-in'}><Link to='/logout'>
                        Log Out</Link></li>
                </ul>
        
        </nav>
    )
}
export default Navbar;