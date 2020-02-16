import React, { useState, useEffect } from 'react';
import './friends.styles.css';
import { axiosWithAuth } from './../axios-w-auth/Axios-wi-auth';
import FriendCard from './FriendCard.component';

const Friends = () => {

    const [ friends, setFriends ] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.error('axiosFriends: ', err));
    }

    useEffect(() => {
        getFriends();
        console.log(friends);
        
    },[]);

    return(
        <>
            <h1>Friends</h1>
                <div className="wrapper">
                {friends.map(friend => 
                    <FriendCard name={friend.name} 
                        age={friend.age} 
                        email={friend.email} 
                        loddedin={friend.loggedin} />)}
            
                </div>
        </>
    )
}
export default Friends;