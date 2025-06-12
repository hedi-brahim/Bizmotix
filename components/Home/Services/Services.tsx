import React from 'react'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto'>
            {/* Section Heading */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>What we provide</h1>
                    <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>Provide High Quality Software's Service for All Industry</h1>
                </div>
                <div className='lg:ml-auto'>
                    <a href='#' className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 
                    rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto'>
                        All Services
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services