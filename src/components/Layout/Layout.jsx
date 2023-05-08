import { Link, Outlet } from "react-router-dom"
import './Layout.css'

export const Layout = ()=> {
   return(
    <>
      <header className="layout">
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
   )
}