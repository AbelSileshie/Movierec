import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>

        <NavLink to="/">HOME</NavLink>
        
        <NavLink to='Login'>LOG-IN</NavLink>
        <NavLink to='SignUp'>SIGN-UP</NavLink>
        <NavLink to='Fav'> Favorite </NavLink>
    </div>
  )
}

export default Navigation