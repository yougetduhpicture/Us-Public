import React from 'react'
import {
  Gb,
  Fi,
  Jp,
  De,
  Se,
  Fr,
  Nl,
  No,
  Us,
  Ee,
  Lv,
  Be,
  It,
  Dk,
} from 'react-flags-select'

const countryCodes = {
  'UNITED STATES': <Us />,
  'UNITED KINGDOM': <Gb />,
  FINLAND: <Fi />,
  JAPAN: <Jp />,
  GERMANY: <De />,
  SWEDEN: <Se />,
  ESTONIA: <Ee />,
  LATVIA: <Lv />,
  NORWAY: <No />,
  NETHERLANDS: <Nl />,
  FRANCE: <Fr />,
  BELGIUM: <Be />,
  ITALY: <It />,
  DENMARK: <Dk />,
}

const UpcomingShow = ({ show }) => {
  const formatDate = (date) => {
    const options = { month: 'short', day: '2-digit' }
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options)
    const [day, month] = formattedDate.split(' ')
    return `${month.toUpperCase()} ${day}`
  }

  const formattedDate = formatDate(show.datetime)

  const countryCode = countryCodes[show.venue.country.toUpperCase()]

  if (show.offers[0].url)
    return (
      <div className='event-container'>
        <a href={show.offers[0].url} target='_blank' rel='noopener noreferrer'>
          <div className='event-details'>
            <div className='date-cell'>{formattedDate}</div>
            <div className='flag-cell'>{countryCode}</div>
            <div className='city-cell'>{show.venue.city}</div>

            <div className='ticket-cell'>{show.offers[0].type}</div>

            <div className='venue-name'>{show.venue.name}</div>
          </div>
        </a>
      </div>
    )
  else
    return (
      <div className='event-container'>
        <div className='event-details'>
          <div className='date-cell'>{formattedDate}</div>
          <div className='flag-cell'>{countryCode}</div>
          <div className='city-cell'>{show.venue.city}</div>

          <div className='ticket-cell'></div>

          <div className='venue-name'>{show.venue.name}</div>
        </div>
      </div>
    )
}

export default UpcomingShow
