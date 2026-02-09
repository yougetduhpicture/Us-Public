const mapEventsToTourFormat = (upcomingShowsRaw) => {
  const formatDate = (datetime) => {
    const date = new Date(datetime)
    const monthAbbr = date
      .toLocaleString('default', { month: 'short' })
      .toUpperCase()
    const day = date.getDate()
    return `${monthAbbr} ${day}`
  }

  const formattedEvents = upcomingShowsRaw.reduce((acc, event, index) => {
    const year = new Date(event.datetime).getFullYear().toString()
    const show = {
      id: index + 1, // Assigns unique ID based on index
      date: formatDate(event.datetime),
      venue: event.venue.name,
      location: event.venue.city.toUpperCase(),
      country: event.venue.country.toUpperCase(),
      link: event.url,
    }

    let yearData = acc.find((y) => y.year === year)
    if (!yearData) {
      yearData = { year, tours: [] }
      acc.push(yearData)
    }

    const tourName = 'CURRENT TOUR'

    let tour = yearData.tours.find((t) => t.name === tourName)
    if (!tour) {
      tour = { name: tourName, shows: [] }
      yearData.tours.push(tour)
    }

    tour.shows.push(show)

    return acc
  }, [])

  return { years: formattedEvents }
}
