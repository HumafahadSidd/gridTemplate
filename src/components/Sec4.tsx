import React from 'react'
import Image from 'next/image'
const Sec4 = () => {
  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center bg-[#ffffff]'>
            <div className='relative w-[90%] flex flex-col md:flex-row justify-evenly items-center'>
                <div className='bg-[#C4DEFD] md:w-[534px] md:h-[397px] w-[350px] h-[200px]'></div>
                <div className='md:w-[527px] md:h-[314] text-black flex flex-col mt-10 md:mt-0 text-center md:items-start items-center mb-10'>
                  <h1 className='relative  font-bold md:text-[64px] text-[34px] my-6 z-20'>Customise it
                  to  <span className=' flex justify-center md:justify-start relative z-30'>your needs</span>
                 <Image
                 src="/B-Dash.png"
                 alt='B-Dash'
                 width={300}
                 height={300}
                 className='absolute bottom-1 md:w-[350px] md:left-0 left-[33%] w-[130px] z-10'
                 />
                  </h1>
                  <p className='text-[18px] font-normal'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                  <button className='flex gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#4F9CF9] text-white mt-10'>Try it now  
                  <Image
                  src="VectorR.svg"
                  alt='right'
                  width={7}
                  height={7}
                  />
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec4