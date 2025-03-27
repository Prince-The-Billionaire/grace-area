import React from 'react'
import TestimonyCard from './TestimonyCard'
const Testimonials = () => {
  return (
    <div className='px-40 -mt-12 mb-24'>
        <h1 className='text-3xl'>Testimonials</h1>
        <h2 className='italic text-xl text-black/60'>Key into each testimony to experience it in your life</h2>
        <div className='flex flex-row gap-4 scrollbar-hide overflow-x-scroll '>
            <TestimonyCard/>
            <TestimonyCard/>
            <TestimonyCard/>
        </div>
        
    </div>
  )
}

export default Testimonials