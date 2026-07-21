import React, { useState } from 'react'
import SearchItem from '../components/SearchItem'
import { useNavigate } from 'react-router-dom'
import { search_Movies } from '../api/tmdbAPI'



const Search = () => {

  const [search, setsearch] = useState('')
  const [data, setdata] = useState([])
 

  async function submithandler(e) {
    e.preventDefault()
    setsearch('')
    try {
      // let data = []
      const response = await search_Movies(search)

      const movies =response.map((item)=>({
        id: item.id,
        title: item.title,
        rating: item.vote_average,
        poster_Link: item.poster_path,
        language: item.original_language,
        release_date: item.release_date,
      }))
      // console.log(movies);  
      setdata(movies)  
    } catch (error) {       
   }
  }

  
  const navigate = useNavigate()

  return (
    <div className='h-screen w-full p-5 flex  flex-col box-border  '>

      <div className='flex items-center text-xl'>
        <h1 onClick={() => { navigate(-1) }} ><i className="ri-arrow-left-wide-line"></i></h1>
        <h1 className='ml-[47%]'>Search</h1>
      </div>

      <form onSubmit={(e) => { submithandler(e) }} className='  rounded mt-6 flex gap-4 '>
        <input
          className='p-2 w-full bg-white text-black text-sm active: outline-none rounded'
          placeholder='Search movies...'
          value={search}
          onChange={(e) => { setsearch(e.target.value) }}
          type="text" />

        <button className='px-5 py-2 border-2 border-transparent rounded active:scale-95  bg-blue-500'>Search</button>
      </form>
      <SearchItem data={data} />
    </div>
  )
}

export default Search