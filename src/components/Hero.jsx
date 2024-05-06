import React from 'react'

const Hero = () => {
  return (
    <>
        <div>
    <div className='w-[90%] mx-[auto] mb-[30px] max-[800px]:hidden'>
        <div className='flex gap-3'>
            <img className='w-[60%]' src="https://picsum.photos/id/24/4855/1803" alt="" />
            <div className='flex flex-col gap-3'>
                <img className='w-[100%]' src="https://picsum.photos/id/26/4209/2769" alt="" />
                <img className='w-[100%]' src="https://picsum.photos/id/27/3264/1836" alt="" />
            </div>
        </div>
        <div className='flex gap-3 my-[10px]'>
            <img className='w-[50%]' src="https://picsum.photos/id/28/4928/3264" alt="" />
            <img className='w-[50%]' src="https://picsum.photos/id/25/5000/3333" alt="" />
        </div>
    </div>
    <div className='flex flex-col p-3 gap-3 min-[801px]:hidden'>
        <img src="https://picsum.photos/id/24/4855/1803" alt="" />
        <img src="https://picsum.photos/id/26/4209/2769" alt="" />
        <img src="https://picsum.photos/id/27/3264/1836" alt="" />
        <img src="https://picsum.photos/id/28/4928/3264" alt="" />
        <img src="https://picsum.photos/id/25/5000/3333" alt="" />
        <img src="https://picsum.photos/id/25/5000/3331" alt="" />
    </div>
</div>


    </>
    
    
    
  )
}

export default Hero