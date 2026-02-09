import React, { useState, useMemo } from 'react'
import { parse } from 'date-fns'
import Show from './Show.jsx'
import PastShow from './PastShow.jsx'
import '../css/PastShows.css'

const PastShowsComponent = ({ PastShows, NewPastShows }) => {
  const [expandedYears, setExpandedYears] = useState({})

  const toggleYearExpand = (year) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  const sortedPastShows = PastShows.sort((a, b) => b.id - a.id)

  const uniqueYears = useMemo(() => {
    const yearsSet = new Set()

    PastShows.forEach((show) => {
      const date = parse(show.date, 'MMM dd yyyy', new Date())
      if (!isNaN(date)) {
        yearsSet.add(date.getFullYear())
      }
    })

    NewPastShows.forEach((show) => {
      const date = new Date(show.datetime)
      if (!isNaN(date)) {
        yearsSet.add(date.getFullYear())
      }
    })

    return Array.from(yearsSet).sort((a, b) => b - a)
  }, [PastShows, NewPastShows])

  return (
    <div>
      <h2>Past Shows</h2>

      {uniqueYears.map((year) => (
        <div key={year}>
          <h3
            className='year'
            onPointerUp={() => toggleYearExpand(year)}
            style={{ cursor: 'pointer' }}
          >
            {year} {expandedYears[year] ? '▼' : '▶'}
          </h3>

          {expandedYears[year] && (
            <div className='PastShows'>
              {year >= 2025 && (
                <>
                  {NewPastShows.map((show) => {
                    const showYear = new Date(show.datetime).getFullYear()
                    if (showYear === year) {
                      return <PastShow show={show} key={show.id} />
                    }
                    return null
                  })}
                  <br />
                </>
              )}

              {year < 2025 && (
                <>
                  <h3 className='year'>
                    {year === 2024 && "STRIKE DON'T HESITATE VOL 2. TOUR"}
                    {year === 2023 && "STRIKE DON'T HESITATE TOUR"}
                    {year === 2022 && 'UNDERGROUND RENAISSANCE TOUR'}
                    {year === 2021 && 'IF I HAD A NICKEL TOUR'}
                  </h3>

                  {sortedPastShows.map((show) => {
                    const showYear = parse(
                      show.date,
                      'MMM dd yyyy',
                      new Date()
                    ).getFullYear()
                    if (showYear === year) {
                      return <Show show={show} key={show.id} />
                    }
                    return null
                  })}
                  <br />
                </>
              )}
            </div>
          )}
        </div>
      ))}

      <br />
    </div>
  )
}

export default PastShowsComponent
