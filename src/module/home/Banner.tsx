import React from 'react'
import bannerImage from '../../../public/pexels-pixabay-261821.jpg'
import { Button } from '@/components/ui/button' // যদি shadcn/ui button use করতে চাও
import { Link } from 'react-router'

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImage} className="h-[500px] w-full object-cover" alt="Library Banner" />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Minimal Library
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Your personal space to manage and explore books efficiently
        </p>
        {/* Button */}
        <Link to='/all-book'>
        <Button>
          All Books
        </Button>
        </Link>
        
      </div>
    </div>
  )
}

export default Banner
