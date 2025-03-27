"use client"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'


gsap.registerPlugin(ScrollTrigger);
const Hero = () =>{
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLSpanElement>(null)
    const orangebarRef = useRef<HTMLDivElement>(null)
    const maindivRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        gsap.to(countRef.current, {
            innerText: 150,
            duration: 3,
            delay:2,
            roundProps: "innerText",
            ease:"power2.out",
            onUpdate: function (){
                setCount(Number(countRef.current?.innerText))
            }
        })
        gsap.to(orangebarRef.current,{
            width: 700,
            duration: 2,
            ease:"power2.out",
            delay: 1,
            scrollTrigger:{
                trigger:orangebarRef.current,
                start:'top 80%',
            }
        })
        gsap.to(maindivRef.current,{
            x: 40,
            duration:2,
            opacity:1,
            ease:"power2.out",
            scrollTrigger:{
                trigger:maindivRef.current,
                start:'top 80%',
            }
        })
    },[])
  return (
    <div className='flex relative -mt-28'>
        <img src='/hero.jpg ' className='w-[100vw] z-0 absolute '/>
        <div ref={maindivRef} className='z-20 p-16 opacity-0 -ml-10'>
            <h1 className='mt-32 text-9xl font-bold text-white'>Welcome to <br/> Grace Area</h1>
            <div ref={orangebarRef} className='h-2 w-[2rem] bg-green-600'/>
            <p className='text-3xl text-white/85'>RCCG Province 12 </p>
            <p className='mt-4 text-white/90'>Jesus Christ the same yesterday, and today, and forever.</p>
            <p className='text-white/90'>-Hebrews 13:8-</p>
            <div className='flex flex-row gap-8 text-2xl text-white'>
                <p>Over <span ref={countRef}>{count}</span> members</p>
                <p>Different department</p>
            </div>
            <div className='flex flex-row gap-16 mt-8'>
                <button className='text-white text-xl hover:bg-green-400 cursor-pointer  bg-green-500 rounded-2xl p-2 px-4 '>
                    Get to Us
                </button>
                <button className='text-white border-4  cursor-pointer hover:border-green-400 border-green-500 rounded-2xl p-1 px-4'>
                    Gallery
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero