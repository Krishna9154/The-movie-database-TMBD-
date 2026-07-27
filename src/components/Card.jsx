import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ data }) => {

    return (
        <div className='py-5'>
            <h1 className='text-xl font-bold'>Popular Movies</h1>
            <div className='py-4 flex  gap-4 overflow-x-auto hide-scrollbar '>
                {data.map((item, key) => {
                    return <div 
                        key={key}
                        className='h-60 w-50  relative shrink-0 '>
                         <h1 className='absolute flex justify-end w-full px-4 py-2 '><i className="ri-poker-hearts-line"></i></h1>
                         <Link to={`/detail/${item.id}`}>
                        <img className='h-60 w-60 bg-green-400 rounded-xl ' src={`https://image.tmdb.org/t/p/w500${item.posterLink}`} />
                         </Link>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent rounded-xl pointer-events-none"></div>
                        <h1 className='absolute bottom-0 p-3 text-xl '>{item.title}</h1>
                    </div>
                })}
            </div>
        </div>
    )


}

export default Card