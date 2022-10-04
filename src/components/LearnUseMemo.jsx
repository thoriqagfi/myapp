import React, { useState, useMemo } from 'react';

const HeavyFunction = (counter) => {
  for(let i = 0; i < 2000000000; i++) {}
  return counter * 3;
}

export default function LearnUseMemo() {
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState('white');

  const counter3x = useMemo(() => {
    return HeavyFunction(counter);
  }, [counter])

  const cacheColor = useMemo(() => {
    return {theme: color};
  }, [color]);

  return (
    <>
      <div className='text-center bg-cyan-400 pb-5 flex justify-center flex-col items-center'>
        <h1 className='text-3xl font-bold py-4'>Learn Use Memo</h1>

        <h2>3X Counter: {counter3x}</h2>
        <div className='py-3'>
          <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2' onClick={() => setCounter(counter + 1)}>
            Add Counter
          </button>
          <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>
            Min Counter
          </button>
        </div>

        <h2 style={{color}} className='font-bold py-2 mb-2 text-xl w-2/5 bg-gray-100 rounded-lg'>Theme Color: {cacheColor.theme}</h2>
        <div >
          <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2' onClick={() => setColor('green')}>Green</button>
          <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2' onClick={() => setColor('red')}>Red</button>
          <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2' onClick={() => setColor('blue')}>Blue</button>
        </div>
      </div>
    </>
  )
}