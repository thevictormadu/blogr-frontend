import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
      <div className="bg-gradient-to-r  from-purple-500 to-pink-500 rounded-bl-[5rem]">
          <Navbar />
          <p className="text-center mt-10 text-white  text-4xl">A modern publishing platform</p>
          <p className="text-center  text-white text-xs p-5">Grow your audience and build your online brand</p>
          <div className="flex justify-center space-x-4 pt-5 pb-32">
              <button className="rounded-full bg-white text-purple-500 p-2.5 w-36 text-sm">Start For Free</button>
          <button className="rounded-full border-white border-2 p-2.5 w-36 text-sm text-white">Learn More</button>
          </div>
    </div>
  )
}

export default Hero