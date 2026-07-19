import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between '>
      <h1 className='text-[21px]'><i className="ri-menu-line"></i></h1>
      <h1 className='text-[21px] text-cyan-300'>TMDB</h1>
      <Link to='/search' className='text-[21px]'><i className="ri-search-line"></i></Link>
    </div>
  )
}

export default Nav