import React from 'react'

const Header = () => {
  return (
<><div className='header fixed top-0 w-full h-14 flex  justify-between items-center px-8 py-5 sm:px-13 sm:py-7 bg-brand z-11'>
        <h4 className='text-[#ffffff] font-semibold text-lg'>Campus Talk</h4>
        <img src="campustalk.svg" alt="" className='h-9 w-9' />
</div>
    </>
  )
}

export default Header;  