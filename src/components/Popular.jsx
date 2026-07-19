import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { popular_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setpopularResults, setLoading , setError } from '../redux/features/media.Slice'

const Popular = () => {

  const { popularResults, loading } = useSelector((store) => store.storePopularMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    async function popularMovies() {
      try {
        dispatch(setLoading())
        let data = []
        const response = await popular_Movies()
        
        data = response.map((item) => ({
          id: item.id,
          language: item.original_language,
          title: item.original_title,
          rating: item.vote_average,
          description: item.overview,
          posterLink: item.poster_path,
          releaseDate: item.release_date
        })
        )
        dispatch(setpopularResults(data))

      } catch (error) {
        dispatch((error))

      } finally{
        // dispatch(setLoading())
      }
    }
    popularMovies()

  }, [])

  if(loading) return <h1>Loading...</h1>



  return (
    <div className='py-5'>
      <h1 className='text-xl font-bold'>Popular Movies</h1>
      <div className='py-4 flex  gap-4 overflow-x-auto hide-scrollbar '>
        {popularResults.map((item, key) => {
          return <div
           key={key} 
           className='h-60 w-50  relative shrink-0 '>
            <img className='h-60 w-60 bg-green-400 rounded-xl ' src={`https://image.tmdb.org/t/p/w500${item.posterLink}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
            <h1 className='absolute bottom-0 p-3 text-xl '>{item.title}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default Popular