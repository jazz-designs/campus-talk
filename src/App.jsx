import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './Components/InputForm'
import MessageInput from './Components/MessageInput'
import TextBubble from './Components/TextBubble'
import { supabase } from './supabaseClient'
import Header from './Components/Header'


function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: true});
      if(data) setMessages(data);
    }
    fetchMessages();
     const channel = supabase
    .channel('messages-channel')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'messages' },
      (payload) => {
        setMessages((prev) => [...prev, payload.new])
      }
    )
    .subscribe()
  return () => {
    supabase.removeChannel(channel)
  }
  }, [])
  return (
    <>
    <Header />
      <InputForm setName={setName} name={name} show={show} setShow={setShow}/>
      <div className='mb-20 mt-15'>
      {messages.map((msg) => (
          <TextBubble key={msg.id} name={msg.name} message={msg.message} time={new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} show={show} isSender={msg.name === name} />
      ))}
      </div>
      <MessageInput message={message} setMessage={setMessage} name={name} show={show}/>

    </>
  )
}

export default App
