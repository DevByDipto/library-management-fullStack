import React from 'react'
import AllBook from './AllBook'
import Banner from '../module/home/Banner'
import BorrowSummary from './BorrowSummary'

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
        {/* all book */}
        <AllBook></AllBook>
        {/* borrow summary */}
        <BorrowSummary></BorrowSummary>
    </div>
  )
}

export default Home