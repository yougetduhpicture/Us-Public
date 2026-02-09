import StreamingServiceIcons from './StreamingServiceIcons.jsx'
import React, { useEffect, useState } from 'react'
const Header = () => {
  const [iconSize, setIconSize] = useState(80)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setIconSize(40) // Half the original size
      } else {
        setIconSize(80) // Original size
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id='header'>
      <h1>Underground Renaissance Out Now!</h1>
      <br />

      <StreamingServiceIcons
        tidalLink={'https://listen.tidal.com/album/385555329'}
        spotifyLink={
          'https://open.spotify.com/artist/0LkjBAFTNpucCuMmbCsW7w?si=Xnws-16qQr6gEeyJkNC4vQ'
        }
        appleLink={
          'https://music.apple.com/fi/album/underground-renaissance/1766778087'
        }
        bandcampLink={
          'https://usbandofficial.bandcamp.com/album/underground-renaissance'
        }
        youtubeLink={
          'https://www.youtube.com/watch?v=mGwHwWI5JTM&list=OLAK5uy_luqWXzVNkzz-SjwLDoAvTgDZcAu3MvdPU'
        }
        iconSize={iconSize}
      />
      <br />
      <br />
    </div>
  )
}

export default Header
