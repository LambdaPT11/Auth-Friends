import React from 'react';
import axios from 'axios';
import './login.styles.css';

// Traditional class component
class LoginForm extends React.Component {

    // Component state
    state = {
        credentials: {
            username: "",
            password: "",
        }
    }

    // handles form inputs
    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    // loggin function - 1st prevent any default action
    login = (e) => {
        e.preventDefault();
        
        axios
            // axios call to login end point to get auth token
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                // Set token in local storage - console.log(res) to see object
                localStorage.setItem('token', res.data.payload);
                // Set boolean logIn to true and put in local storage
                localStorage.setItem('logIn', true);
                // Redirect to friends list through browser history
                this.props.history.push('/friends');
            })  // catch any error from axios call
            .catch(err => console.error('axios: ', err));
            console.log(this.state);
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