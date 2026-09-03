import React, { useState } from 'react'
import '../css/YouTubeEmbed.css'

const YouTubeEmbed = ({ videoId, title }) => {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className='video-wrapper'>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div
      className='video-wrapper video-thumb'
      onClick={() => setPlaying(true)}
      onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
      role='button'
      tabIndex={0}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        onLoad={(e) => {
          if (e.target.naturalWidth === 120) {
            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          }
        }}
        onError={(e) => {
          e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        }}
        alt={title}
        loading='lazy'
      />
      <span className='play-btn'>
        <svg viewBox='0 0 24 24' width='22' height='22' fill='white'>
          <polygon points='6,3 21,12 6,21' />
        </svg>
      </span>
    </div>
  )
}

export default YouTubeEmbed
