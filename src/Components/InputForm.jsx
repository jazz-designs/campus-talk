import React, { useState } from 'react'

const InputForm = ({setName, name, show, setShow}) => {
    
  return (
    <>
    {show && 
    <div className='input-container'>
        <div className='input-card absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center gap-4  rounded-2xl p-10 shadow-lg placeholder:text-light-200'>
            <input type='text' placeholder='Enter your name' name='name' className='flex w-full rounded-full shadow-md  bg-transparent px-8 py-2 text-base shadow-sm transition-color  focus:border-purple-500 text-lg' required onChange={(e) => setName(e.target.value)}></input>
            <button className=' cursor-pointer px-20 py-2 rounded-full text-xl text-white-100 bg-brand hover:bg-[#db585b]  shadow text-[#ffffff] transition-all  ease-in-out w-full' onClick={() => name.length > 0 && setShow(false)}>Confirm</button>
        </div>
    </div>
    }
    </>
  )
}

export default InputForm;  