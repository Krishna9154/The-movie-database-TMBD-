import React from 'react'
import {  search_Movies } from './api/tmdbAPI'
import { Route, Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react'
import SavedCollection from './pages/SavedCollection'

const Home = lazy(()=> import('./pages/Home'))
const Search = lazy(()=>import('./pages/Search'))
const MovieDetails = lazy(()=>import('./pages/MovieDetails'))
const ProfilePage = lazy(()=>import('./pages/ProfilePage'))
const Watchlist = lazy(()=>import('./pages/Watchlist'))




const App = () => {


  
  return (
    <div className='text-white  bg-gray-900'>

      <Suspense fallback={ <div className='flex items-center justify-center h-screen w-full'><h1 className='text-3xl font-semibold '>Loading...</h1></div> } >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search'element={<Search />} />
        <Route path='/detail/:id'element={<MovieDetails />} />
        <Route path='/watchlist'element={<Watchlist />} />
        <Route path='/profile'element={<ProfilePage /> } />
        <Route path='/collection' element={<SavedCollection />} />
      </Routes>
      </Suspense>

    </div>
  )
}

export default App