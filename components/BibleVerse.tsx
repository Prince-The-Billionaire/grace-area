import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

const BibleVerse = () => {
  return (
    <div className='relative  md:p-2 max-md:mt-12 max-md:p-4 mt-36 min-h-screen flex flex-col items-center justify-center'>
        <div className='p-6 md:p-2 max-md:p-2 mx-10 w-fit gap-16 flex justify-evenly flex-row max-md:flex-col bg-white rounded-2xl backdrop-blur-md shadow-black/30 shadow-sm  '>
           <div className='flex flex-col justify-between'>
                <div className=''> 
                    <p className='text-3xl  md:text-2xl max-md:text-lg'> Bible Verse of the Week</p>
                    <p className='text-2xl md:text-xl max-md:text-base'>1 Kings 5:4</p>
                </div>
                <div className='flex max-md:text-xs flex-row max-md:gap-2 gap-6 md:gap-2'>
                    <p className='p-2 rounded-2xl border-2 w-fit border-green-400/15 bg-green-400/15 inset-shadow-white shadow-md backdrop-blur-md '>#protection</p>
                    <p className='p-2 rounded-2xl border-2 w-fit border-green-400/15 bg-green-400/15 inset-shadow-white shadow-md backdrop-blur-md'>#protection</p>
                    <p className='p-2 rounded-2xl border-2 w-fit border-green-400/15 bg-green-400/15 inset-shadow-white shadow-md backdrop-blur-md'>#protection</p>
                </div>
           </div>
           <div>
           <FaQuoteLeft color='green' size={24} />
           <p className='text-wrap text-black/50  overflow-y-scroll md:text-base text-xl max-md:w-[16rem] md:w-[20rem] h-[32rem] w-[32rem]'>
            But now the Lord my God has made us safe from danger. No enemy tries to attack us on any of our borders.
            So I have decided to build a temple to give honour to the Lord my God. 
            The Lord said to my father David, “I will put your son on your throne to rule as king after you. 
            He will build a temple for people to give honour to my name.” 
            6So please tell your men to cut down cedar trees in Lebanon for me. 
            We ourselves do not have people who know how 
            to cut wood from trees as well as your men from Sidon. 
            So our men will help your men with the work. 
            And I will pay your workers whatever you decide 
            is right.’ 
            7Hiram was very happy when he received Solomon&apos;s 
            message. He said, ‘Praise the Lord today, 
            because he gave David a wise son to rule over 
            the great nation, Israel.’ 8Then 
            Hiram sent this message to Solomon:
            ‘I have received the message that you sent to me. 
            I will give you the wood that you have asked for. 
            I will send you cedar wood and pine wood, as much as you need. 
            9My men will take the trees from the hills of Lebanon down to the sea. 
            Then we will tie several trees together like a boat. 
            We will take them on the sea to the place where you want them. 
            There we will undo the ropes so that your men can carry the trees away. 
            You will pay me with enough food to feed the people of my palace.’
            10So Hiram supplied Solomon with all the cedar 
            trees and pine trees that Solomon asked for. 
            11Then Solomon supplied Hiram with 2,000 
            tons of wheat as food for the people in his 
            palace. He also supplied 450,000 litres of 
            olive oil. Solomon sent this every year to 
            Hiram.
           </p>
           <FaQuoteRight color='green' size={24} />
           </div>
        </div>
    </div>
  )
}

export default BibleVerse