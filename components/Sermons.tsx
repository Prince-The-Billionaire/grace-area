"use client"
import Image from 'next/image'
import React from 'react'

const Sermons = () => {
    const magic = window.innerWidth > 1000 ? 50 : window.innerWidth > 600 && window.innerWidth < 99 ? 50 :30
  return (
    <div className='mt-12 max-md:mb-20 md:mb-20 min-h-screen flex max-md:px-2 px-42 md:px-4 flex-col'>
        <h1 className='text-3xl'>
            Sermons from Sunday 23rd March 
        </h1> 
        <div  className='relative '>
            <img src='/sermon.png' className='w-[80vw] max-md:w-[96vw] md:w-[100vw] max-md:h-[36rem] rounded-xl z-5 h-[33rem] object-left object-cover absolute'/>
            <div className='z-20 right-0 absolute p-8 md:p-1 flex flex-col gap-1'>
                <p className='font-bold text-white md:text-xl max-md:text-lg  text-3xl'>Topic : Divorce, Separation and Remarraige</p>
                <p className='text-gray-500 text-xl md:text-base max-md:text-sm'>Sunday 23rd March 2023,08:00 AM - 11:00 AM</p>
                <p className='text-gray-500 text-xl md:text-base max-md:text-sm'>Preacher: Pst John Ball</p>
                <ul className='text-white/60 md:text-sm max-md:text-xs text-xl flex flex-col gap-6'>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/50'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/30'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/10'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                </ul>
                <div className='flex flex-row mt-4 gap-5 items-center'>
                    <Image src={'/facebook.png'} alt='facebook' width={magic} height={magic}/>
                    <Image src={'/instagram.png'} alt='instagram' width={magic} height={magic}/>
                    <Image src={'/whatsapp.png'} alt='whatsapp'width={magic} height={magic}/>
                    <Image src={'/youtube.png'} alt='youtube'width={magic} height={magic}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sermons