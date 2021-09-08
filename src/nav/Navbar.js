import React, { Fragment } from 'react'
import { FaHome } from 'react-icons/fa'
import './styles.css'

const Navbar = () => {
  return (
    <Fragment>
      <input type="checkbox" name="" id="side-menu-switch" />
    <div className="side-menu">
          <nav>
            <div className='link-container'>
              <a href="#">Home</a>
            <span><FaHome /></span>
            </div>
            <a href="#">Account</a>
            <a href="#">Profile</a>
            <a href="#">My Links</a>
            <a href="#">Chat</a>
          </nav>
          <nav className='bottom-nav'>
            <a href="#">Login/Out</a>
          </nav>
          <label for="side-menu-switch">

          </label>
        </div>
    </Fragment>
  )
}

export default Navbar
