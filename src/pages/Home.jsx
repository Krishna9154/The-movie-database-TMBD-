import React from 'react'
import Nav from '../components/Nav'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import Trending from '../components/Trending'
import Upcoming from '../components/Upcoming'

const Home = () => {
  return (
    <div className='bg-gray-900 rounded-2xl overflow-auto hide-scrollbar p-4 h-screen'>
    <Nav />
    <Popular />
    <TopRated />
    <Trending />
    <Upcoming />
    </div>
  )
}

export default Home