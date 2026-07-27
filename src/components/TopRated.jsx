import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { topRated_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, settoptratedResults } from '../redux/features/media.Slice'
import Card from './Card'


const TopRated = () => {

  const { topratedResults, loading, Error } = useSelector((state) => state.storePopularMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    async function toprated() {
      try {
        dispatch(setLoading())
        let data = []
        const response = await topRated_Movies()
        data = response.map((item) => ({
          id: item.id,
          language: item.original_language,
          title: item.original_title,
          rating: item.vote_average,
          description: item.overview,
          posterLink: item.poster_path,
          releaseDate: item.release_date
        }))

        dispatch(settoptratedResults(data))

      } catch (error) {
        console.log(error);

      }
    }
    toprated()
  }, [])

  if (loading) return <div><h1>Loading...</h1></div>

  return (
    <Card data={topratedResults} />
  )
}

export default TopRated