import React from 'react'
import Image from 'next/image'
const Sec6 = () => {
  return (
    <div>
        <div className='h-[135vh] md:h-[50vh] w-[100%] flex justify-center items-center bg-[#043873]'>
            <div className='w-[95%] flex flex-col md:flex-row justify-center gap-10 text-center md:text-start items-center text-[#ffffff]'>
                <div className='w-[280px] h-[280px] flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <Image
                    src='Logo.svg'
                    alt=''
                    width={200}
                    height={100}
                    className='md:mb-3 h-[150px] w-[200px] md:h-[100px] md:w-[200px]'
                    />
                    <p className='text-[16px] md:text-[17px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div className='w-[240px] h-[169px] flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <h1 className='text-[18px] font-bold mb-3'>Product</h1>
                    <h3 className='text-[16px] font-normal mb-2'>Overview</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Pricing</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Customer stories</h3>
                </div>
                <div className='w-[240px] h-[169px] flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <h1 className='text-[18px] font-bold mb-3'>Resources</h1>
                    <h3 className='text-[16px] font-normal mb-2'>Blog</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Guide & tutorials</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Help center</h3>
                </div>
                <div className='w-[240px] h-[169px] flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <h1 className='text-[18px] font-bold mb-3'>Company</h1>
                    <h3 className='text-[16px] font-normal mb-2'>About us</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Careers</h3>
                    <h3 className='text-[16px] font-normal mb-2'>Media kit</h3>
                </div>
                <div className='w-[200px] md:w-[260px] h-[220px] flex flex-col justify-center md:justify-start md:items-start items-center '>
                    <h1 className='text-[28px] font-bold mb-3'>Try it Today</h1>
                   <p className='md:text-[16px] text-[18px]'>Get started for free.
                   Add your whole team as your needs grow.</p>
                   <button className='flex justify-center gap-4 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#4F9CF9] text-white mt-6'>Start today 
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

export default Sec6