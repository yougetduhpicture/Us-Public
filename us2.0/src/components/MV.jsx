import React from 'react'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import '../css/mv.css'

const videos = [
  { id: 'tyvT-DJVKv8', title: 'Citroen Blues' },
  { id: 'MjlFv2mLtw0', title: 'Paisley Underground' },
  { id: 'qcTDWXbinLo', title: 'Hop on a Cloud' },
  { id: 'Lt1YMmokPiY', title: 'Night Time' },
]

const MVList = () => (
  <div>
    <h2>Music Videos</h2>
    <ul className='mvContainer'>
      {videos.map(({ id, title }) => (
        <li key={id}>
          <h3>{title}</h3>
          <YouTubeEmbed videoId={id} title={title} />
        </li>
      ))}
    </ul>
    <br />
  </div>
)

export default MVList
