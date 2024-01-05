import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'> 
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/projects"> Projects </NavLink>
    </div>
  )
}

// Home, Projects, Resumes, Technologies