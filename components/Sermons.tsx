import Image from 'next/image'
import React from 'react'

const Sermons = () => {
  return (
    <div className='mt-12 min-h-screen flex px-42 flex-col'>
        <h1 className='text-3xl'>
            Sermons from Sunday 23rd March 
        </h1> 
        <div  className='relative'>
            <img src='/sermon.png' className='w-[80vw] rounded-xl z-5 h-[33rem] object-left object-cover absolute'/>
            <div className='z-20 right-0 absolute p-8 flex flex-col gap-1'>
                <p className='font-bold text-white  text-3xl'>Topic : Divorce, Separation and Remarraige</p>
                <p className='text-gray-500 text-xl'>Sunday 23rd March 2023,08:00 AM - 11:00 AM</p>
                <p className='text-gray-500 text-xl'>Preacher: Pst John Ball</p>
                <ul className='text-white/60 text-xl flex flex-col gap-6'>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/50'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/30'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                    <li className='text-white/10'>🔥 Don&apos;t divorce unless wife/husband is an unbeliever</li>
                </ul>
                <div className='flex flex-row mt-4 gap-5 items-center'>
                    <Image src={'/facebook.png'} alt='facebook' width={60} height={60}/>
                    <Image src={'/instagram.png'} alt='instagram' width={60} height={60}/>
                    <Image src={'/whatsapp.png'} alt='whatsapp' width={60} height={60}/>
                    <Image src={'/youtube.png'} alt='youtube' width={60} height={60}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sermons