import React, { useEffect, Fragment, useState } from 'react'
import './styles.css'
import LandingPageModal from './LandingPageModal'
import { testImages } from './testData'

const LandingPage = () => {
  const [images, setImages] = useState([])
  const [renderImages, setRenderImages] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setImages(testImages)
    setShowModal(false)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (images && images.length > 0) {
      setRenderImages(true)
    }
  }, [images])

  const FeaturedUsers = () => {
  return (
    renderImages ?
    <Fragment>
        <div className='grid'>
          {images.map((image) => (
            <img src={`/images/${image.src}`} alt={image.caption} />
          ))}
        </div>
    </Fragment> : ''
  )
  }

  return(
    isLoaded ?
      <Fragment>
        <FeaturedUsers />
        <LandingPageModal showModal={showModal} />
      </Fragment> : ''
  )
}

export default LandingPage
