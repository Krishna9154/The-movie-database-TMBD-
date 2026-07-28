import React from 'react'
import { getItem } from '../utils/collection'
import { useNavigate } from 'react-router-dom'

const SavedCollection = () => {

    const navigate = useNavigate()

    const data = getItem()
    return (

        <div className='h-screen w-full overflow-auto hide-scrollbar  p-3'>

            <h1 className=' text-2xl font-semibold py-2 px-4  rounded-xl '><i onClick={()=>{navigate(-1)}} className="ri-arrow-left-wide-line mr-158"></i>Saved Collection</h1>
            <div className='py-4 flex gap-3 flex-wrap mt-6 '>
                {data.map((item, key) => {
                    return <div
                        key={key}
                        className='h-60 w-50  relative shrink-0 '>
                        <img className='h-60 w-60 bg-green-400 rounded-xl  ' src={`https://image.tmdb.org/t/p/w500${item.posterLink}`} />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent rounded-xl"></div>
                        <h1 className='absolute bottom-0 p-3 text-xl '>{item.title}</h1>
                    </div>
                })}
            </div>
        </div>      
    )
}

export default SavedCollection