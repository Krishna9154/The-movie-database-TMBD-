import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { upcoming_Movies } from '../api/tmdbAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setupcomingResults } from '../redux/features/media.Slice'


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

  if (loading) return <h1>Loading...</h1>
  return (
    <div className='py-5 '>
      <h1 className='text-xl font-bold'>Upcoming Movies</h1>
      <div className='py-4 flex  gap-4 overflow-x-auto hide-scrollbar'>
        {upcomingResults.map((item, key) => {
          return <div
            key={key}
            className='h-60 w-50  relative shrink-0'>
            <img className='h-60 w-60 bg-green-400 rounded-xl' src={`https://image.tmdb.org/t/p/w500${item.posterLink}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
            <h1 className='absolute bottom-0 p-3 text-xl '>{item.title}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default Upcoming