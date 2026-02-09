import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpotify,
  faYoutube,
  faBandcamp,
  faApple,
} from '@fortawesome/free-brands-svg-icons'
import '../css/StreamingServiceIcons.css' // Import the CSS file

const StreamingServiceIcons = ({
  tidalLink,
  spotifyLink,
  appleLink,
  youtubeLink,
  bandcampLink,
  iconSize = 45, // Default icon size
}) => {
  const TidalIcon = ({ className }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
      imageRendering='optimizeQuality'
      fillRule='evenodd'
      clipRule='evenodd'
      viewBox='0 0 512 512'
      width={iconSize}
      height={iconSize}
      className={className} // Apply the CSS class
      style={{ width: iconSize, height: iconSize }} // Ensure consistent size
    >
      <path d='M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm50.384 219.459l-50.372 50.383 50.379 50.391-50.382 50.393-50.395-50.393 50.393-50.389-50.393-50.39 50.395-50.372 50.38 50.369 50.389-50.375 50.382 50.382-50.382 50.392-50.394-50.391zm-100.767-.001l-50.392 50.392-50.385-50.392 50.385-50.382 50.392 50.382z' />
    </svg>
  )

  return (
    <div className='iconContainer'>
      <a
        href={spotifyLink}
        target='_blank'
        rel='noopener noreferrer'
        className='iconLink'
      >
        <FontAwesomeIcon
          icon={faSpotify}
          size='2x'
          className='streamingIcon'
          style={{ width: iconSize, height: iconSize }}
        />
      </a>
      <a
        href={youtubeLink}
        target='_blank'
        rel='noopener noreferrer'
        className='iconLink'
      >
        <FontAwesomeIcon
          icon={faYoutube}
          size='2x'
          className='streamingIcon'
          style={{ width: iconSize, height: iconSize }}
        />
      </a>
      <a
        href={bandcampLink}
        target='_blank'
        rel='noopener noreferrer'
        className='iconLink'
      >
        <FontAwesomeIcon
          icon={faBandcamp}
          size='2x'
          className='streamingIcon'
          style={{ width: iconSize, height: iconSize }}
        />
      </a>
      <a
        href={appleLink}
        target='_blank'
        rel='noopener noreferrer'
        className='iconLink'
      >
        <FontAwesomeIcon
          icon={faApple}
          size='2x'
          className='streamingIcon'
          style={{ width: iconSize, height: iconSize }}
        />
      </a>
      <a
        href={tidalLink}
        target='_blank'
        rel='noopener noreferrer'
        className='iconLink'
      >
        <TidalIcon className='streamingIcon' />
      </a>
    </div>
  )
}

export default StreamingServiceIcons
