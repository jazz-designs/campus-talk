import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
const MessageInput = ({message, setMessage, name, show}) => {
  
  const handleSend = async () => {
    if (!message.trim()) return
    
    await supabase.from('messages').insert([{name: name, message:message}])
    setMessage('')
    
    
  }
  return (
    <> {!show &&
    <div className='fixed md:bottom-10 bottom-5 w-full h-10 justify-center z-10 bg-white'>
        
<div className="flex justify-center gap-2.5 p-3 items-center bg-white">
    <input type='text' placeholder='Message' name='name' className='flex md:w-[50%] w-[85%] rounded-full shadow-md  bg-transparent px-8 py-2 text-base shadow-sm transition-color  focus:border-purple-500 text-lg' value={message}  onChange={(e) => setMessage(e.target.value)}></input>
    <button className=' cursor-pointer h-10 w-10 rounded-full text-xl text-white-100 bg-brand hover:bg-[#db585b]  shadow text-[#ffffff] transition-all  ease-in-out flex justify-center items-center' onClick={handleSend}><img src="send.svg" alt="->" className='w-7 h-6 mt-.5 mr-.5' /></button>
</div>

    </div>
}
    </>
  )
}

export default MessageInput;  