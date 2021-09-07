import React, { useEffect, Fragment, useState } from 'react'
import { testImages } from './testData'

const LandingPage = () => {
  const [images, setImages] = useState([])
  const [renderImages, setRenderImages] = useState(false)

  const imagesToDisplay = () => {
    const imgs = testImages
    let arrayOfImageArrays = []
    let counter = testImages.length / 5
    while (counter > 0) {
      const x = imgs.splice(0, 5)
      arrayOfImageArrays.push(x)
      counter--
    }
    return arrayOfImageArrays
  }

  useEffect(() => {
    const value = imagesToDisplay()
    setImages(value)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (images && images.length > 0) {
      setRenderImages(true)
    }
  }, [images])

  return(
    renderImages ?
    <Fragment>
      <div className='row'>
        {images.map((column, index) => (
          <div className='column' key={index}>
            {column.map((image, index) => (
              <img src={`/images/${image.src}`} alt='featured user'/>
            ))}
          </div>
        ))}
        <img src='/images/test1.jpg' alt='featured user'/>
      </div>
    </Fragment> : ''
  )
}

export default LandingPage
