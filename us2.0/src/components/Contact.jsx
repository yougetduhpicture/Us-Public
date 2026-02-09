import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import '../css/Contact.css'
import { Gb, Fi, Jp } from 'react-flags-select'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='booking'>
        <h3>
          <strong>BOOKING </strong>
        </h3>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faGlobe} className='icon' />

          <p>Paul Buck</p>
          <p> || </p>
          <p>paul.buck@teamwass.com</p>
        </div>
        <div className='contact-item'>
          <Fi className='icon' />

          <p>Esa Tontti</p>
          <p> || </p>
          <p>esa@altagency.fi</p>
        </div>
        <div className='contact-item'>
          <Jp className='icon' />

          <p>Rexy Song</p>
          <p> || </p>
          <p>rexysong@ganban.net</p>
        </div>
      </div>

      <div className='booking'>
        <h3>
          <strong>MANAGEMENT </strong>
        </h3>
        <div className='contact-item'>
          <FontAwesomeIcon icon={faGlobe} className='icon' />
          <p>Aki Roukala</p>
          <p> || </p>
          <p>aki@lordag.fi</p>
        </div>

        <div className='contact-item'>
          <Jp className='icon' />

          <p>Rexy Song</p>
          <p> || </p>
          <p>rexysong@ganban.net</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
