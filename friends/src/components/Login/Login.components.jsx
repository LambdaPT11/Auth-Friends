import React from 'react';
import axios from 'axios';
import './login.styles.css';

//import { axiosWithAuth } from '../axios-w-auth/Axios-wi-auth';

class LoginForm extends React.Component {

    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
            
        });
    };

    login = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => console.error('axios: ', err));
    }

render() {
    return(
        <form onSubmit={this.login} className="login-form">

            <label className="user-name-label" htmlFor="username" >
            User Name
                <input placeholder="User Name" 
                    value={this.state.credentials.username}
                    onChange={this.handleChange} 
                    className="name-input" 
                    name="username" 
                    autoComplete='off'
                    type="text" ></input>
            </label>

            <label className="user-password-label" htmlFor="password">
            User Password
                <input placeholder="User Password" 
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    className="password-input" 
                    name="password" 
                    autoComplete='off'
                    type="password" ></input>
            </label>

            <button>Log In</button>
        </form>
    )}
}

export default LoginForm;