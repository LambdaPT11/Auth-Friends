import React, { useState } from 'react';
import { axiosWithAuth } from './../axios-w-auth/Axios-wi-auth';
import './addform.styles.css';

const AddForm = (props) => {

    const [ friend, setFriend ] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setFriend({ ...friend, [e.target.name]: e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        const friends = {
            name: friend.name,
            age: friend.age,
            email: friend.email
        }
        axiosWithAuth()
            .post('/api/friends', friends)
            .then(res => {
                props.history.push('/friends')
            })
            .catch(err => console.error('axiosAddForm: ', err));
    };

        return(
            <>
                <form onSubmit={submitForm} className="add-form" autoComplete="off">
                    <label className="label-name" htmlFor="name">
                    Full Name
                        <input placeholder="Full Name" 
                            type="text" 
                            name="name" 
                            value={friend.name} 
                            onChange={handleChange}
                            autoComplete="Full-Name" />
                            
                    </label>

                    <label className="label-age" htmlFor="age">
                    Age
                        <input placeholder="Friends Age" 
                            type="text"
                            name="age"
                            value={friend.age} 
                            onChange={handleChange}
                            autoComplete="Friend-Age" />
                            
                    </label>
                    <label className="label-email" htmlFor="email">
                    Email
                        <input placeholder="Friends Email" 
                            type="text"
                            name="email"
                            value={friend.email} 
                            onChange={handleChange}
                            autoComplete="Friend-Email" />
                            
                    </label>
                    <input className="submit" type="submit" value="Save" />
                </form>
            </>
        )
    
}

export default AddForm;