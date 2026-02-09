import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BandLogo from './components/BandLogo.jsx'
import PageHeader from './components/PageHeader.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import PastShows from './components/PastShows.jsx'
import Releases from './components/Releases.jsx'
import MailchimpFormContainer from './components/MailchimpFormContainer.jsx'
import SoMeList from './components/SocialMediaList.jsx'
import MVList from './components/MV.jsx'
import UpcomingShows from './components/UpcomingShows.jsx'

import './css/Styling.css'
import './css/fonts.css'
import './css/ShowTable.css'

const App = () => {
  const [pastShows, setPastShows] = useState([])

  const backendurl = 'https://usbandofficial.com/api/shows'

  useEffect(() => {
    axios.get(backendurl).then((response) => {
      setPastShows(response.data)
    })
  }, [])

  const [upcomingShows, setUpcomingShows] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://rest.bandsintown.com/artists/id_15552358/events?app_id=9a280480176c7d23daf7ce8875f98828&date=upcoming'
      )
      .then((response) => {
        setUpcomingShows(response.data)
      })
  }, [])

  const [newPastShows, setNewPastShows] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://rest.bandsintown.com/artists/id_15552358/events?app_id=9a280480176c7d23daf7ce8875f98828&date=past'
      )
      .then((response) => {
        setNewPastShows(response.data)
      })
  }, [])

  return (
    <div>
      <BandLogo imageUrl='US-logo-White Text on Red.png' altText='Us-Logo' />
      <PageHeader />
      <MailchimpFormContainer className='container' />
      <UpcomingShows UpcomingShows={upcomingShows} />
      <PastShows PastShows={pastShows} NewPastShows={newPastShows} />
      <Releases />
      <MVList />
      <Contact />
      <SoMeList />
      <Footer />
    </div>
  )
}

export default App
