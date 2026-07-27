import React from 'react'
import {  search_Movies } from './api/tmdbAPI'
import { Route, Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react'

const Home = lazy(()=> import('./pages/Home'))
const Search = lazy(()=>import('./pages/Search'))
const MovieDetails = lazy(()=>import('./pages/MovieDetails'))
const ProfilePage = lazy(()=>import('./pages/ProfilePage'))
const Watchlist = lazy(()=>import('./pages/Watchlist'))




const App = () => {


  
  return (
    <div className='text-white  bg-gray-900'>

      <Suspense fallback={ <h1>Loading...</h1> } >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search'element={<Search />} />
        <Route path='/detail/:id'element={<MovieDetails />} />
        <Route path='/watchlist'element={<Watchlist />} />
        <Route path='/profile'element={<ProfilePage /> } />
      </Routes>
      </Suspense>

    </div>
  )
}

export default App