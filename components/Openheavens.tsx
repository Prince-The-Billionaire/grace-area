"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BiPause, BiPlay } from 'react-icons/bi'
const Openheavens = () => {
    const [mode, setMode] = useState(true)
    const togglepause_play = () => {
        setMode((prev) => !prev)
    }
  return (
    <div className='flex flex-row gap-6 justify-center items-start'>
        <div className="bg-white flex flex-col items-center rounded-2xl shadow shadow-black/30 p-16  mt-12">
            <Image src={'/openheavens.jpg'} alt='openheavens' width={600} height={500}/>
            <h1 className='font-black text-xl mt-10 self-start'>Title: The Great Physician</h1>
            <p className='w-[32rem] text-wrap mt-6 self-start'>
            God is the Great Physician. 
            In Exodus 15:26, He said, 
            “…I am the Lord that healeth thee.” 
            The Bible says that He sent His word
             and healed them (Psalm 107:20). 
             He is the God of all flesh, 
             and nothing is too hard for Him 
             (Jeremiah 32:27). Some diseases 
             are termed incurable, but for God, 
             no disease is incurable. Even if a 
             damaged body part is deemed irreparable, 
             He can replace it. While earthly physicians 
             refer cases to each other when they cannot 
             handle them, the Great Physician never refers 
             a case – He is a specialist in all fields of 
             medicine.
            <br/>
            <br/>
            Years ago, a wealthy chief, who became paralysed 
            from the 
            waist downwards, was taken to the best hospital 
            in London. After trying their best and he didn’t
             get better, the doctors gave up. To prove the 
             hopelessness of his case, the head surgeon 
             drove a long pin through the chief’s thigh, 
             and when the latter felt no pain, he told him, 
             “Go home, stop wasting your money, you will 
             never walk again.” The chief was taken back home, 
             and a young girl, who is a member of RCCG, 
             witnessed to him and said, “If you can get to my 
             G.O., you will walk again.” The chief was 
             brought to Redemption City, and because he had a 
             big stature, six hefty men had to carry him into
              my living room. I told him my God can change 
              the doctors’ report and that if he surrendered 
              his life to Jesus, things would change. 
              He surrendered his life to Jesus, we prayed, 
              and he walked back to his car! What renowned 
              medical specialists termed impossible took God 
              only a few seconds to do!
            </p>
        </div>
        <div className='flex flex-col '>
            <div className="bg-white flex flex-col  rounded-2xl shadow shadow-black/30 p-4 mt-12">
                <h1 className='text-black/75 text-xl w-[24rem] self-start'><span className='font-black'>MEMORY VERSE: </span> 
                    “Who forgiveth all thine iniquities; 
                    who healeth all thy diseases;” – Psalm 103:3 (KJV)</h1>   
            </div>

            <div className="bg-white flex flex-col  rounded-2xl shadow shadow-black/30 p-4 mt-2">
                <h1 className='text-black/50 text-xl w-[24rem] self-start'><span className='font-black text-black/75'>BIBLE READING: Luke 4:37-40 (KJV) </span>  
                    <br/>“37  And the fame of him went out into every 
                    place of the country round about.<br/><br/>
                    38  And he arose out of the synagogue, 
                    and entered into Simon’s house. 
                    And Simon’s wife’s mother was taken with a 
                    great fever; and they besought him for her.
                    <br/><br/>
                    39 And he stood over her, and rebuked the fever; 
                    and it left her: and immediately she arose and 
                    ministered unto them.
                    <br/><br/>
                    40 Now when the sun was setting, 
                    all they that had any sick with divers 
                    diseases brought them unto him; and 
                    he laid his hands on every one of them, 
                    and healed them.
                    ”
                </h1>   
            </div>
            <div className="bg-white flex flex-col  rounded-2xl shadow shadow-black/30 p-4 mt-2">
                <h1 className='text-black/45'>BIBLE IN ONE YEAR: 1 Samuel 13-14</h1>
            </div>

            <div className="bg-white flex flex-col  rounded-2xl shadow shadow-black/30 p-4 mt-2">
                <p className='font-black '>Key Point</p>
                <h1 className='text-black/45 w-[24rem]'>Everything may fail and change, 
                    but God’s principles and steadfast 
                    love stand sure.</h1>
            </div>
            
            <div className='flex flex-row gap-6'>
                <div className="bg-white flex flex-col items-center  rounded-2xl shadow shadow-black/30 p-4 mt-2">
                    <p className='font-black '>Hymns</p>
                    <Image src={'/unnamed.jpg'} alt='music' width={140} height={140} />
                    <div>
                        <BiPlay color='black' size={30} onClick={togglepause_play} className={`${mode ? 'block':'hidden'} cursor-pointer`}/>
                        <BiPause color='black' size={30} onClick={togglepause_play} className={`${mode ? 'hidden':'block'} cursor-pointer`}/>
                    </div>
                </div>
                <div className="bg-white  flex flex-col items-center  rounded-2xl shadow shadow-black/30 p-4 mt-2">
                <p className='font-black '>Lyrics</p>
                <h1 className='text-black/45 w-[12rem]'>Everything may fail and change, 
                    but God’s principles and steadfast 
                    love stand sure.</h1>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Openheavens