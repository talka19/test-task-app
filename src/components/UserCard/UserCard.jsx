import './UserCard.css'

export function UserCard({ user, handleFollowClick }) {

  return (
    <>
      <li className='user_card'>
          <div className='user_card_background'/>
            <hr className='user_card_line'/>
            <div className='user_card_frame'>
            {/* <h2>{userName}</h2> */}
              <div className='user_card_avatar_frame'>
                <img className='user_card_avatar' src={user.avatar} alt={user}></img>
              </div>
            <p className='user_card_stat'>{user.tweets.toLocaleString('en-US')} Tweets</p>
            <p className='user_card_stat'>{user.followers.toLocaleString('en-US')} Followers</p>
            <button className='user_card_button' onClick={()=>handleFollowClick(user)} style={{ backgroundColor: user.isFollowing ? '#5CD3A8' : '#EBD8FF' }}>
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </li>
    </>
  );
}