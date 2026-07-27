import React from 'react'

const Favaraite = () => {

    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2]
    return (

        <div className='h-screen w-full bg-amber-400 p-3'>
            <div className='py-4 flex gap-3 flex-wrap  '>
                {arr.map((item, key) => {
                    return <div
                        key={key}
                        className='h-60 w-50  relative shrink-0 '>
                        <img className='h-60 w-60 bg-green-400 rounded-xl  ' src='' />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent rounded-xl"></div>
                        <h1 className='absolute bottom-0 p-3 text-xl '>hi</h1>
                    </div>
                })}
            </div>
        </div>      
    )
}

export default Favaraite