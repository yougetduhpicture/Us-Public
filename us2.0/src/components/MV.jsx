import React from 'react'
import '../css/mv.css'
const MVList = () => {
  return (
    <div>
      <h2>Music Videos</h2>
      <ul className='mvContainer'>
        <li>
          <h3>Citroen Blues</h3>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/tyvT-DJVKv8'
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <h3>Paisley Underground</h3>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/MjlFv2mLtw0'
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <h3>Hop on a Cloud</h3>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/qcTDWXbinLo'
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <h3>Night Time</h3>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Lt1YMmokPiY'
            allowFullScreen
          ></iframe>
        </li>
      </ul>
      <br />
    </div>
  )
}

export default MVList
