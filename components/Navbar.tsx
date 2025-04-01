import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='px-12 max-md:px-2 bg-white/5 backdrop-blur-md z-100 sticky top-0 py-2 flex flex-row items-center justify-between'>
        <Image
            src={'/rccg-logo.png'}
            alt='logo'
            width={60}
            height={60}
        />
        <div className='flex flex-row items-center text-black text-xl gap-10'>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Online Giving</Link>
            <Link href={'/'}>Gallery</Link>
        </div>
    </nav>
  )
}

export default Navbar