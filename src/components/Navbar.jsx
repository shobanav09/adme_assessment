import React from 'react'

const Navbar = () => {
  return (
    <div className='flex m-3 items-center '>
        <div className='text-2xl py-3 px-10 border border-solid border-black ml-9'> Logo</div>
        <div className=' w-[auto] text-center my-[0px] mx-[auto] '>
            <div className='min-w-[640px]:text-[12px] text-3xl md:text-3xl border border-solid border-black py-2 px-4 md:px-40'>Site Title</div>
        </div>
    </div>
  )
}

export default Navbar