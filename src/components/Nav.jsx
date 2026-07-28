import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between '>
      <h1 className='text-[21px]'><i className="ri-menu-line"></i></h1>
      <h1 className='text-[21px] text-cyan-300'>TMDB</h1>
      <div className='flex gap-6 items-center'>
        <Link to='/collection' className='bg-gray-500 py-1 px-2 rounded'>Favourite</Link>
        <Link to='/search' className='text-[21px]'><i className="ri-search-line"></i></Link>
      </div>
    </div>
  )
}

export default Nav