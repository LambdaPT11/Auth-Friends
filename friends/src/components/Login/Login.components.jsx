import React from 'react';
import './login.styles.css';

const LoginForm = () => {
    return(
        <form className="login-form">

            <label className="user-name-label" htmlFor="user-name" >
            User Name
                <input placeholder="User Name" 
                    className="name-input"
                    name="user-name" 
                    type="text" ></input>
            </label>

            <label className="user-password-label" htmlFor="user-password">
            User Password
                <input placeholder="User Password" 
                    className="password-input" 
                    name="user-password"
                    type="password" ></input>
            </label>

            <button>Submit</button>
        </form>
    )
}

export default LoginForm;