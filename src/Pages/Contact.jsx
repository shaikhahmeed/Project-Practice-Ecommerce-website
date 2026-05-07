import React from 'react'
import SectionOne from '../Component/Contact/SectionOne'
import Location from '../Component/Contact/Location'
import Comment from '../Component/Contact/Comment'
import ContactBanner from '../Component/Contact/ContactBanner'
import ContactFooter from '../Component/Contact/ContactFooter'
import Offering from '../Component/Contact/Offering'

const Contact = () => {
  return (
    <>
    <SectionOne/>
    <Location/>
    <Comment/>
    <ContactBanner/>
    <Offering/>
    <ContactFooter/>
    </>
  )
}

export default Contact