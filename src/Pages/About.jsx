import React from 'react'
import AboutBanner from '../Component/About/AboutBanner'
import Services from '../Component/About/Services'
import Perfomance from '../Component/About/Perfomance'
import WhoWe from '../Component/About/WhoWe'
import StayHome from '../Component/Home/StayHome'
import ContactFooter from '../Component/Contact/ContactFooter'

const About = () => {
  return (
    <>
    <AboutBanner/>
    <Services/>
    <Perfomance/>
    <WhoWe/>
    <StayHome/>
    <ContactFooter/>
    </>
  )
}

export default About