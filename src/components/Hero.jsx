import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-purple-100'> 
             <h2 className='text-lg'>Find Super Cars Near you</h2>
            <h2 className='text-[60px] font-bold'>Find your Dream Super Car</h2>
            <Search></Search>
        </div>


    </div>
  )
}

export default Hero