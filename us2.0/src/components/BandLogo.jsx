import React from 'react'

const BandLogo = ({ imageUrl, altText }) => {
  return (
    <div id='logo-container'>
      <img src={imageUrl} alt={altText} className='logo' />
    </div>
  )
}

export default BandLogo
