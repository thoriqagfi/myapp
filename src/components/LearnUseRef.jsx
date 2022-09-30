import React, {useRef, useState, useEffect} from 'react';
// Ada perubahan, tapi akan ke render ulang ketika ada state berubah
export default function LearnUseRef() {
  const [counter, setCounter] = useState(0);
  // const [renderUlang, setRenderUlang] = useState(0);
  const reRender = useRef(1);
  const inputRef = useRef(null);
  const [email, setEmail] = useState('');

  function handleClick() {
    console.log(inputRef.current.value);
  }

  useEffect(() => {
    // console.log("Render Ulang", renderUlang);
    // reRender.current = reRender.current + 1;
    // setRenderUlang(reRender.current);
  })
  useEffect(() => {
    console.log({email});
  })

  const addCounter = () => {
    setCounter(counter + 1);
  }

  const addRenderUlang = () => {
    reRender.current = reRender.current + 1;
  }

  const onInputChange = () => {
    setEmail(inputRef.current.value);
  }
  return (
    <div className='text-center bg-violet-400 pb-5'>
      <h1 className='py-4 font-bold text-3xl'>Learn Use Ref</h1>
      <p className='pt-2'>Counter: {counter}</p>
      <p>ReRender: {reRender.current}</p>
      <button onClick={addCounter} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Add Counter</button>

      <button onClick={addRenderUlang} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Add ReRender</button>

      <input type="email" ref={inputRef} onChange={onInputChange} className='border-2 border-gray-400 rounded-lg px-2 mx-2'/>
      <button onClick={handleClick} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Log Message</button>
    </div>
  )
}