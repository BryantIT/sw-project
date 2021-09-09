import React, { Fragment } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import './styles.css'

const Navbar = () => {
  return (
    <Fragment>
      <input type='checkbox' name='' id='side-menu-switch' checked='false' />
    <div className='side-menu'>
          <nav>
            <a href='#'>Home</a>
            <a href='#'>Account</a>
            <a href='#'>Profile</a>
            <a href='#'>My Links</a>
            <a href='#'>Chat</a>
          </nav>
          <nav className='bottom-nav'>
            <a href='#'>Login/Out</a>
          </nav>
          <label for='side-menu-switch'>
            <FaChevronLeft className='icon' />
          </label>
        </div>
    </Fragment>
  )
}

export default Navbar
