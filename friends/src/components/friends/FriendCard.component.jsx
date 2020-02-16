import React from 'react';
import './friendCard.styles.css'

const FriendCard = (props) => {
 
    return(
        <div className="wrapper">
            <div className="card">
                <h4>{props.name}</h4>
                <p>{props.age}</p>
                <p>{props.email}</p>
                <p>{props.loggedin}</p>
            </div>
        </div>
    )
}

export default FriendCard;