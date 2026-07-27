import React, { useEffect, useState } from 'react'
import { popular_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setpopularResults, setLoading , setError } from '../redux/features/media.Slice'
import Card from './Card'

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

  if(loading) return <div><h1>Loading...</h1></div>

  return(
    <Card data={popularResults} />
  )


}

export default Popular