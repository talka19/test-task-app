import React, { useEffect, useState } from 'react';
import { fetchUsers, updateFollowers } from '../service/mockapi';

export function UserCard() {
  const [users, setUsers] = useState([]);
  console.log('first', useState([]))
  

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  async function handleFollowClick(user) {
    const isFollowing = user.isFollowing;
    const updatedUser = { ...user, followers: isFollowing ? user.followers - 1 : user.followers + 1, isFollowing: !isFollowing };
    await updateFollowers(user.id, updatedUser);
    setUsers(prevUsers => prevUsers.map(prevUser => prevUser.id === user.id ? updatedUser : prevUser));
  }

  return (
    <>
      {users.map(user => (
        <li className='user_card'>
          <div className='user_card_background' key={user.id}/>
            <hr className='user_card_line'/>
            <div className='user_card_frame'>
            {/* <h2>{user.user}</h2> */}
              <div className='user_card_avatar_frame'>
                <img className='user_card_avatar' src={user.avatar} alt={user.user}></img>
              </div>
            <p className='user_card_stat'>{user.tweets.toLocaleString()} Tweets</p>
            <p className='user_card_stat'>{user.followers.toLocaleString()} Followers</p>
            <button className='user_card_button' onClick={() => handleFollowClick(user)} style={{ backgroundColor: user.isFollowing ? '#5CD3A8' : '#EBD8FF' }}>
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </li>
      ))}
    </>
  );
}