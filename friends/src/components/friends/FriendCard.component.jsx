import React, { useState } from 'react';
import { axiosWithAuth } from './../axios-w-auth/Axios-wi-auth';
import './friendCard.styles.css'

const FriendCard = ( props ) => {

    const [ friends, setFriends ] = useState([]);
    const [edit, setEdit] = useState(props.friend);
    const [isEditing, setIsEditing] = useState(false);

    const editFriend = () => {
        setIsEditing(true);
    }

    const handleEditChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    

      const handleUpdate = (friend) => {
        // axios call to endpoint for delete
        axiosWithAuth()
            .put(`/api/friends/${friend.id}`, edit)
                .then(response => {
                    props.handleEditUpdate(response.data)})// set state to end point
                .catch(error => {console.log(error)})

        setIsEditing(false);
      }
 
    return(
        <div className="wrapper">
        {!isEditing ?
            <div className="card">
                <h4 className="name">{props.friend.name}</h4>
                <span className="info">{props.friend.age}</span>
                <span className="info">{props.friend.email}</span>
                <div className="btn-wrapper">
                    <button onClick={() => props.handleDelete(props.friend)}>Delete</button>
                    <button onClick={editFriend}>Update</button>
                </div>
            </div>
        :
            <form className="card" onSubmit={() => handleUpdate(props.friend)} >
                <input className="name" type='text' name='name' placeholder='name' value={edit.name} onChange={handleEditChange} />
                <input className="info" type='text' name='age' placeholder='age' value={edit.age} onChange={handleEditChange} />
                <input className="info" type='text' name='email' placeholder='email' value={edit.email} onChange={handleEditChange} />
                <button className="ebtn" type='submit'>Complete Edit</button>
            </form>}
        </div>  
    )
}

export default FriendCard;