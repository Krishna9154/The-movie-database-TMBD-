import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { movieDetails } from '../api/tmdbAPI'



const MovieDetails = () => {
    const apiKey = import.meta.env.VITE_TMDB_KEY
    const { id } = useParams()

    const [data, setdata] = useState({})
    const [time, settime] = useState({})


    useEffect(() => {
        

       async function details(id){
        
            const data = await movieDetails(id)
            setdata(data)
            const hour = Math.floor(data.runtime / 60)
            const miniute = data.runtime % 60
            settime({
            hour: hour,
            minute: miniute
        })
        }   
        details(id)

    }, [])

    return (
        <div className='h-screen w-full p-2 box-border '>
            <div className=' w-full h-90 relative mb-4'>
                <img className=' object-cover h-full w-full rounded' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                <div className='absolute bottom-3 p-5 '>
                    <div className='flex'>
                        <img className='bg-pink-400 h-75 w-60  rounded-xl' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                        <div className='absolute bottom-3 left-80'>
                            <h1 className='mb-40 text-3xl'>{data.title}</h1>
                            <div className='flex gap-44 w-full h-full text-xl'>
                                <h1>{`⭐${data.vote_average}`}</h1>
                                <h1 className='w-40'>{data.release_date}</h1>
                                <h1>{`${time.hour}h${time.minute}m`}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-6 px-4 mt-6'>
                <button className='px-35 py-5  rounded-2xl bg-blue-500 text-center active:scale-95  '>Play Trailer</button>
                <button className='px-35 py-5  rounded-2xl bg-blue-500 text-center active:scale-95 '>+Watchlist</button>
            </div>

            <div className='mt-8 px-4'>
                <h1 className='text-xl font-bold'>Overview</h1>
                <p className=' w-1/2 mb-4'>{data.overview} </p>
                <h1 className='text-base font-bold'>Director</h1>
                <p className=' w-1/2 mb-4'>Lorem, ipsum dolor.</p>
                <h1 className='text-base font-bold'>Cast</h1>
                <p className=' w-1/2 mb-4'>Lorem ipsum dolor sit amet.</p>

            </div>

        </div>
    )
}

export default MovieDetails