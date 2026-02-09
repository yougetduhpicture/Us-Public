import React from 'react'
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa'
import '../css/SoMeList.css' // Import the CSS file

const SoMeList = () => {
  return (
    <div>
      <ul className='someContainer'>
        <li>
          <a href='https://www.instagram.com/usbandofficial/'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/@Usbandofficial'>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href='https://www.tiktok.com/@us_bandofficial'>
            <FaTiktok />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/usbandofficial'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/usbandofficial'>
            <FaFacebook />
          </a>
        </li>
      </ul>
      <br />
    </div>
  )
}

export default SoMeList
