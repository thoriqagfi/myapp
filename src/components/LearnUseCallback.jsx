import React, {useCallback, useState} from 'react';
import Display from './Display';

export default function LearnUseCallback() {
  const [counter, setCounter] = useState(1);
  const [showData, setShowData] = useState(false);

  // Hanya berubah ketika counter berubah
  const getCounterData = useCallback( () => {
      return [counter*2, counter*3, counter*4];
    }, [counter])

  const getRandomData = useCallback(() => {
    const random = Math.floor(Math.random() *100) + 1;
    return [random*2, random*3, random*4];
  }, []);
  return(
    <div className='text-center bg-pink-400'>
      <h1 className='text-3xl font-bold py-4'>Learn Use Callback</h1>
      
      <p className='py-1'>Counter: {counter}</p>
      <button className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2' onClick={() => setCounter(counter + 1)} >Add Counter</button>

      {/* Kenapa kalau di klik dia tetep manggil fungsi getRandomData, padahal gaaada hubungannya? */}
      <p>Show Data: {showData.toString()}</p>
      <button onClick={() => setShowData(!showData)} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Show / Hide Data</button>

      <Display getData={getRandomData}/>
    </div>
  )
}