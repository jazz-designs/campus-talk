import React from 'react'

const TextBubble = ({name, message, time, show, isSender}) => {
  return (
<>{!show && (
        <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} px-5 my-2`}>
          <div
            className={`flex flex-col max-w-[320px] p-4 rounded-2xl shadow ${
              isSender
                ? 'bg-brand text-white rounded-br-none' 
                : 'bg-[#f4f4f6] text-black rounded-bl-none' 
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold">{isSender ? 'You' : name}</span>
              <span className="text-xs opacity-75">{time}</span>
            </div>
            <p className="text-sm py-1  break-words whitespace-pre-wrap">{message}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default TextBubble;  