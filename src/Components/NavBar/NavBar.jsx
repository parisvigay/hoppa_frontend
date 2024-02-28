import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;

  return (
    <div className="navContainer">
        <nav className="navBar navLeft">
            <Link className={pathname === '/' ? 'activeLink' : ''} id="logoLink" style={{ textDecoration: 'none' }} to="/">Hoppa</Link>
        </nav>
        <nav className="navBar navRight">
          <Link className={pathname === '/about' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="/about">About</Link>
          {pathname === '/' || pathname === '/login' || pathname === 'signup' ?
            <> 
              <Link className={pathname === '/signup' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }}>Sign up</Link>
              <Link className={pathname === '/login' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="/login">Login</Link>
            </>
            :
            <>
              <Link className={pathname === '/my-pubs' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="my-pubs">My Pubs</Link>
              <Link className={pathname === '/my-trails' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }}>My Trails</Link>
            </>
          }
        </nav>
    </div> 
  )
}