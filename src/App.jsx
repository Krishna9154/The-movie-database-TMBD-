import React from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import Search from './pages/Search'
import {  search_Movies } from './api/tmdbAPI'
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import ProfilePage from './pages/ProfilePage'
import { Route, Routes } from 'react-router-dom'



const App = () => {


  
  return (
    <div className='text-white  bg-gray-900'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search'element={<Search />} />
        <Route path='/detail'element={<MovieDetails />} />
        <Route path='/watchlist'element={<Watchlist />} />
        <Route path='/profile'element={<ProfilePage /> } />
      </Routes>

    </div>
  )
}

export default App