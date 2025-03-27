import React from 'react'
import Image from 'next/image'
const TestimonyCard = () => {
  return (
    <div>
        <div className='hover:border-2 hover:border-lime-500 w-[40rem] mt-10 p-8 rounded-2xl flex flex-col gap-5 text-wrap bg-black/10'>
            <p className='font-bold text-2xl'>Title: Fast Child Delivery</p>
            <p className='text-xl font-sans'> Testimony: I want to thank God firstly for the salvation of my soul, 
                I&apos;ve been asking God for the fruit of the womb for over 3 years now
                after suffering from several miscarriages when i got pregnant I was scared 
                history would repeat itself. But Glory to God I keyed into this 100 days prayer and
                fasting and here I am alive and well with my child may God be glorified    
            </p>
            <div className='flex flex-row items-center gap-10'>
                <Image src={'/woman.jpg'} alt='woman' className='rounded-full ' width={100} height={100}/>
                <div className='flex flex-col'>
                    <p className='text-2xl '>Angel Temitope</p>
                    <p className='text-black/80'>Head of Ushering Unit</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonyCard