import React from 'react'

const MovieDetails = () => {
    return (
        <div className='h-screen w-full p-2 box-border '>
            <div className=' w-full h-90 relative mb-4'>
                <img className=' object-cover h-full w-full rounded' src="https://img3.wallspic.com/previews/4/6/1/6/7/176164/176164-tom_hardy_venom_poster-tom_hardy-venom-eddie_brock-poster-550x310.jpg" />
                <div className='absolute bottom-3 p-5 '>
                    <div className='flex'>
                        <img className='bg-pink-400 h-75 w-60 rounded-xl' src="" />
                        <div className='absolute bottom-3 left-80'>
                            <h1 className='mb-28 text-3xl'>Inception</h1>
                            <div className='flex gap-44 w-full h-full text-xl'>
                            <h1>8.8</h1>
                            <h1>2010</h1>
                            <h1>2h23m</h1>
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
                <p className=' w-1/2 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea laudantium distinctio sunt ducimus reiciendis, iusto rerum est necessitatibus totam lorem34 </p>
                <h1 className='text-base font-bold'>Director</h1>
                <p className=' w-1/2 mb-4'>Lorem, ipsum dolor.</p>
                <h1 className='text-base font-bold'>Cast</h1>
                <p className=' w-1/2 mb-4'>Lorem ipsum dolor sit amet.</p>

            </div>

        </div>
    )
}

export default MovieDetails