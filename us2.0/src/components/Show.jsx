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
  Hu,
  Ie,
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
  HUNGARY: <Hu />,
  IRELAND: <Ie />,
}

const Show = ({ show }) => {
  const formatDate = (date) => {
    const options = { month: 'short', day: '2-digit' }
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options)
    const [day, month] = formattedDate.split(' ')
    return `${month.toUpperCase()} ${day}`
  }

  const formattedDate = formatDate(show.date)

  const clippedVenue = show.venue.split(/(?:\*|\/w|\()/)[0].trim()

  const countryCode = countryCodes[show.country.toUpperCase()]

  return (
    <div className='event-container' key={show.id}>
      <div className='past-event-details'>
        <div className='date-cell'>{formattedDate}</div>

        <div className='flag-cell'>{countryCode}</div>
        <div className='city-cell'>{show.location}</div>

        <div className='ticket-cell'>
          {show.link ? (
            <a href={show.link} target='_blank' rel='noopener noreferrer'>
              SETLIST
            </a>
          ) : null}
        </div>
        <div className='venue-name'>{clippedVenue}</div>
      </div>
    </div>
  )
}

export default Show
