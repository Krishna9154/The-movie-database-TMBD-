import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = () => {

    const Popular_movies = ['1', '2', '2', '3', '1', '2', '2', '3', '4']



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
            {Popular_movies.map((item , idx) => {
                return (
                    
                        <Link to='/detail' key={idx} className='bg-pink-500 rounded-xl flex  p-4'>
                            <img
                                src="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png"
                                className='h-30  rounded-xl mr-10 ' />
                            <div className='mr-auto'>
                                <h1 className='mb-2'>The Shaw Shark Redemption</h1>
                                <div>
                                    <h1 className='mb-2'>Drama</h1>
                                    <h1>1994 . 2h 22m</h1>
                                </div>
                            </div>
                            <h1>9.3</h1>
                        </Link>
                )
            })}
            </div>
        </div>
    )
}

export default SearchItem