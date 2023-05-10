import { NavLink, Outlet } from "react-router-dom"
import './Layout.css'

export const Layout = ()=> {
   return(
    <>
      <header className="header">
        <div className="nav_link">
          <NavLink to="/" className="site-nav__link">Home</NavLink>
          <NavLink to="/tweets" className="site-nav__link">Tweets</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
   )
}