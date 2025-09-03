import React from 'react'
import AllBook from './AllBook'
import Banner from '../module/home/Banner'

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
        {/* all book */}
        <AllBook></AllBook>
    </div>
  )
}

export default Home