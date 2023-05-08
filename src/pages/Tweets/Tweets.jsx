import { NavLink } from "react-router-dom"
import { UserCard } from "../../components/UserCard"
import LoadMoreBtn from "../../components/LoadMoreBtn"
import './Tweets.css'

export default function Tweets(){
  return(
      <>
      <h1>Tweets</h1>
      <nav>
        <NavLink to="/">Back to Home</NavLink>
      </nav>
      <ul className="user-list">
        <UserCard />
      </ul>
      <LoadMoreBtn />
      </>
  )
}