import React from 'react'
import UpcomingShow from './UpcomingShow.jsx'

const UpcomingShows = ({ UpcomingShows }) => {
  return (
    <div>
      <h2>Upcoming Shows</h2>
      <div className='container'>
        {UpcomingShows.length === 0 ? (
          <h3>To Be Announced... </h3>
        ) : (
          UpcomingShows.map((Show) => (
            <UpcomingShow show={Show} key={Show.id} />
          ))
        )}
      </div>
      <br />
    </div>
  )
}

export default UpcomingShows
