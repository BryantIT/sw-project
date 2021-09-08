import React, { Fragment } from 'react'
import LandingPage from './landing/LandingPage'
import Navbar from './nav/Navbar'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
    </Fragment>
  )
}

export default App
