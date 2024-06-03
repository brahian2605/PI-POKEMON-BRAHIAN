import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <div className='div-links'>    
        <Link to="/home" className='home'>Home</Link>
        <Link to="/formulario" className='home'>Create</Link>
      </div>
    </div>
  )
}

export default Navbar