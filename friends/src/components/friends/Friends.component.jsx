import React, { useState, useEffect } from 'react';
import './friends.styles.css';
import { axiosWithAuth } from './../axios-w-auth/Axios-wi-auth';
import FriendCard from './FriendCard.component';

const Friends = () => {

    const [ friends, setFriends ] = useState([]);
    const [ search, setSearch ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.error('axiosFriends: ', err));
    }

    const handleDelete = (friend) => {
        // axios call to endpoint for delete
        axiosWithAuth()
            .delete(`/api/friends/${friend.id}`)
                .then(response => {
                    setFriends(response.data)})// set state to end point
                .catch(error => {console.log(error)})
        // alert added for user confirmation
        alert('Friend was deleted');
      }

    const handleEditUpdate = list => {
        setFriends(list);
  };

    useEffect(() => {
        getFriends();
    },[]);

    useEffect(()=> {
        const searchResults = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchTerm.toLowerCase())
         })
        setSearch(searchResults);
    },[searchTerm])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <section>
            <h1>Friends</h1>

            <div className="search">
                <input type="text"
                    className="search-input" 
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleChange} />
            </div>
            
                {searchTerm.length === 0 ? (

                <div className="wrapper">
                {/**  maps over friends state **/}
                {friends.map(friend => {
                    return (
                    <FriendCard key={friend.id}
                        friend={friend} 
                        friends={friends}
                        handleDelete={handleDelete}
                        handleEditUpdate={handleEditUpdate} />)})}
                </div>) 
                        : 
                (<div className='wrapper'>
                {/**  maps over search state **/}
                    {search.map(friend => {
                        return (
                        <FriendCard key={friend.id}
                            friend={friend} 
                            friends={friends}
                            handleDelete={handleDelete}
                            handleEditUpdate={handleEditUpdate} />)})}
                </div>)
            }
        </section>
    )
}
export default Friends;