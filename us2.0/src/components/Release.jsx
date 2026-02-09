import StreamingServiceIcons from './StreamingServiceIcons'
import React from 'react'
import '../css/ReleaseStyle.css'

const Release = ({
  albumName,
  vinylLink,
  cdLink,
  coverPhoto,
  alt,
  TidalLink,
  SpotifyLink,
  YoutubeLink,
  AppleLink,
  BandcampLink,
}) => {
  const albumNameStyle = {
    textAlign: 'center',
  }
  return (
    <div className='mid-col'>
      <div className='releaseContainer'>
        <div className='releaseColumnL'>
          <img className='coverPhoto' src={coverPhoto} alt={alt} />
        </div>
        <div className='releaseColumnR'>
          <h3 style={albumNameStyle} className='releaseHeading'>
            {albumName}
          </h3>

          {vinylLink && (
            <a href={vinylLink}>
              <button>Vinyl</button>
            </a>
          )}

          {cdLink && (
            <a href={cdLink}>
              <button>CD</button>
            </a>
          )}

          <h3 className='releaseHeading'>Stream:</h3>

          <StreamingServiceIcons
            tidalLink={TidalLink}
            spotifyLink={SpotifyLink}
            appleLink={AppleLink}
            bandcampLink={BandcampLink}
            youtubeLink={YoutubeLink}
            iconSize={45}
          />
        </div>
      </div>
    </div>
  )
}
export default Release
