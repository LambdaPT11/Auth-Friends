import React, { useState } from 'react';
import { axiosWithAuth } from './../axios-w-auth/Axios-wi-auth';


const Delete = () => {

    const [ friend, setFriend ] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    });

    friend

    
    return()
};

const deleteFriends = () => {
    axiosWithAuth()
        .delete(`/api/friends/`, friends)
        .then(res => {
            friends.filter(item => item.id !== id)
        })
        .catch(err => console.error('axiosAddForm: ', err));
        console.log('delete');
}