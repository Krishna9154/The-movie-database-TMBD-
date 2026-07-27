import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trendingDay_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, settrendingResults } from '../redux/features/media.Slice'
import Card from './Card'


const Trending = () => {

  const { trendingResults, loading, Error } = useSelector((state) => state.storePopularMovies)

  const dispatch = useDispatch()

  useEffect(() => {
    async function trending() {
      try {
        dispatch(setLoading())
        let data = []
        const response = await trendingDay_Movies()
        data = response.map((item) => ({
          id: item.id,
          language: item.original_language,
          title: item.original_title,
          rating: item.vote_average,
          description: item.overview,
          posterLink: item.poster_path,
          releaseDate: item.release_date
        }))

        dispatch(settrendingResults(data))

      } catch (error) {

      }
    }
    trending()
  }, [])


  if(loading) return <div><h1>Loading...</h1></div>



  return (
<Card data={trendingResults} />
  )
}

export default Trending     