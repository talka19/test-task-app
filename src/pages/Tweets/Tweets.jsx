import { Link } from "react-router-dom"
import { UserCard } from "../../components/UserCard/UserCard"
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn"
import { useState, useEffect } from 'react';
import { fetchUsers, updateFollowers } from '../../service/mockapi';
import './Tweets.css'


export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreTweets, setNoMoreTweets] = useState(false);
  
  useEffect(() => {
    async function getUsers() {
      try{
        const data = await fetchUsers(page);
        if (data.length === 0) {
          setNoMoreTweets(true);
        } else {
          setUsers([...users, ...data]);
        }
      } catch (error) {}  
    }
    getUsers(); // eslint-disable-next-line
  }, [page]); 

  function handleLoadMore() {
    setPage(page + 1);
  }

  async function handleFollowClick(user) {
    const isFollowing = user.isFollowing;
    const updatedUser = { ...user, followers: isFollowing ? user.followers - 1 : user.followers + 1, isFollowing: !isFollowing };
    await updateFollowers(user.id, updatedUser);
    setUsers(prevUsers => prevUsers.map(prevUser => prevUser.id === user.id ? updatedUser : prevUser));
  }

  return (
    <>
      <h1>Tweets</h1>
      <nav className="back_page">
        <Link to="/" className='back_page_list'><p><i class="left"></i>Back to Home</p></Link>
      </nav>
      <ul className="user-list">
        {users.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            handleFollowClick={handleFollowClick}
          />
        ))}
      </ul>
      {!noMoreTweets && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
}
