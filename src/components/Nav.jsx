import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
       <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li><Link to="/main">Menu</Link></li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul> 
    </>
  )
}

export default Nav
