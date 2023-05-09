import { Link, Outlet } from "react-router-dom"
import './Layout.css'

export const Layout = ()=> {
   return(
    <>
      <header className="header">
        <div className="nav_link">
          <Link to="/" className="site-nav__link">Home</Link>
          <Link to="/tweets" className="site-nav__link">Tweets</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
   )
}