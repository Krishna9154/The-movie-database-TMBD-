import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { topRated_Movies } from '../api/tmdbAPI'
import {useDispatch,useSelector} from 'react-redux'
import { setLoading, settoptratedResults } from '../redux/features/media.Slice'


const TopRated = () => {

  const{topratedResults,loading,Error} =useSelector((state)=>state.storePopularMovies)
  const dispatch=useDispatch()




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

  if(loading) return <h1>Loading...</h1>


  return (
    <div className='py-5 '>
      <h1 className='text-xl font-bold'>Top Rated Movies</h1>
      <div className='py-4 flex  gap-4 overflow-x-auto hide-scrollbar'>
        {topratedResults.map((item, key) => {
          return <Link to={`/detail/${item.id}`}
           key={key} 
           className='h-60 w-50  relative shrink-0'>
            <img className='h-60 w-60 bg-green-400 rounded-xl' src={`https://image.tmdb.org/t/p/w500${item.posterLink}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
            <h1 className='absolute bottom-0 p-3 text-xl '>{item.title}</h1>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TopRated