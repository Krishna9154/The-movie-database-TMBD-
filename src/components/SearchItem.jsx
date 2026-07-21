import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({data}) => {

    const Popular_movies = ['1', '2', '2', '3', '1', '2', '2', '3', '4']

    useEffect(()=>{
        console.log(data);
    },[data])

  


    return (
        <div className='h-full w-full flex flex-col'>
            <div className='flex gap-4 py-3'>
                <h1 className='rounded-xl px-4 py-2 bg-gray-600'>All</h1>
                <h1 className='rounded-xl px-4 py-2 bg-gray-600'>Action</h1>
                <h1 className='rounded-xl px-4 py-2 bg-gray-600'> Comedy</h1>
                <h1 className='rounded-xl px-4 py-2 bg-gray-600'>Drama</h1>
                <h1 className='rounded-xl px-4 py-2 bg-gray-600'>Horror</h1>
            </div>

            <div  className=' h-140  bg-white rounded-xl py-3 px-5 flex flex-col gap-3 overflow-auto  '>
            {data.map((item , idx) => {
                return (
                    
                        <Link to='/detail' key={idx} className='bg-pink-500 rounded-xl flex  p-4'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_Link}`}
                                className=' h-30  rounded-xl mr-10 ' />
                            <div className='mr-auto'>
                                <h1 className='mb-2'>{item.title}</h1>
                                <div>
                                    <h1 className='mb-2'>Drama</h1>
                                    <h1>{item.release_date}</h1>
                                </div>
                            </div>
                            <h1>{`⭐${item.rating}`}</h1>
                        </Link>
                )
            })}
            </div>
        </div>
    )
}

export default SearchItem