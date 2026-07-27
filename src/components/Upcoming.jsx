import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { upcoming_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setupcomingResults } from '../redux/features/media.Slice'
import Card from './Card'

const Upcoming = () => {

  const { upcomingResults, loading, Error } = useSelector((state) => state.storePopularMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    async function upComing() {
      try {
        dispatch(setLoading())
        let data = []
        const response = await upcoming_Movies()
        data = response.map((item) => ({
          id: item.id,
          language: item.original_language,
          title: item.original_title,
          rating: item.vote_average,
          description: item.overview,
          posterLink: item.poster_path,
          releaseDate: item.release_date
        }))

        dispatch(setupcomingResults(data))

      } catch (error) {

      }
    }
    upComing()
  }, [])

  if(loading) return <div><h1>Loading...</h1></div>

  return (
    <Card data={upcomingResults} />
  )
}

export default Upcoming