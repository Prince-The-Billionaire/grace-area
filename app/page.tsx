import BibleVerse from '@/components/BibleVerse'
import ChurchFooter from '@/components/ChurchFooter'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Openheavens from '@/components/Openheavens'
import Sermons from '@/components/Sermons'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <BibleVerse/>
      <Openheavens/>
      <Sermons/>
      <Testimonials/>
      <ChurchFooter/>
    </div>
  )
}

export default page