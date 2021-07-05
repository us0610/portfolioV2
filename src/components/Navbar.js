import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function Navbar() {
  return (
    <nav>
      <div className='container flex-h'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <ul className='nav__links'>
          <a href='mailto: contact@ujjwalsharma.space' className='nav__link'>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  )
}
