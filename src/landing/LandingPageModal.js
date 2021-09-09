import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import './styles.css'

const LandingPageModal = ({ showModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(showModal)
  console.log('Is Show: ' + showModal)

  return (
    <ReactModal
      isOpen={isModalOpen}
    >
      <div className='main-wrapper'>
        <div className='text'>
          <p>
            <strong>Welcome</strong>
            <br />
            <br />
            Please sign in or sign up
          </p>
        </div>
      </div>
    </ReactModal>
  )
}

export default LandingPageModal
