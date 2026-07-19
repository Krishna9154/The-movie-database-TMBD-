import React from 'react'

const Watchlist = () => {

    const Popular_movies = ['1', '2', '2', '3', '1', '2', '2', '3', '4']

    return (
        <div className='h-screen w-full text-white p-3 overflow-hidden'>
            <div className='flex justify-center items-center'>
                <h1 className='py-2 text-2xl'>Watchlist</h1>
            </div>

            <div className=' h-full  bg-white rounded-xl py-3 px-5 flex flex-col gap-3 overflow-auto hide-scrollbar  '>
                {Popular_movies.map((item) => {
                    return (

                        <div className='bg-pink-500 rounded-xl flex  p-4'>
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
                            <h1 className='mt-11'><i className="ri-bookmark-fill text-2xl  "></i></h1>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Watchlist