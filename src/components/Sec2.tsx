import React from 'react'
import Image from 'next/image'
const Sec2 = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center bg-[#ffffff]'>
            <div className='relative w-[90%] flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div>
                  <Image
                  src='/Eclipse.png'
                  alt='error'
                  width={500}
                  height={491}
                  className='mt-10'
                  />
                </div>
                <div className='md:w-[527px] md:h-[314] text-black flex flex-col text-center md:items-start items-center mb-10'>
                  <h1 className='relative font-bold md:text-[64px] text-[34px] my-6 z-20'>Work <span className='relative z-30'>together</span>
                  <Image
                 alt='Dash'
                 src="/Dash.png"
                 width={300}
                 height={30}
                 className='w-[380px] h-[40px] absolute bottom-0 left-[18%] z-10'
                 />
                  </h1>
                  <p className='text-[18px] font-normal'>With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.</p>
                  <button className='flex  gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#4F9CF9] text-white mt-10'>Try it now  
                  <Image
                    src='VectorR.svg'
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

export default Sec2 