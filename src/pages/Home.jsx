import React from 'react'
import Nav from '../components/Nav'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import Trending from '../components/Trending'
import Upcoming from '../components/Upcoming'
import SvaedCollection from './SavedCollection'
import Card from '../components/Card'
import { getItem, setItem } from '../utils/collection'



const Home = () => {

 
  return (
    <div className='bg-gray-900 rounded-2xl overflow-auto hide-scrollbar p-4 h-screen w-full'>
    <Nav />
    <Popular />
    <TopRated />
    <Trending />
    <Upcoming />
    

    </div>
  )
}

export default Home