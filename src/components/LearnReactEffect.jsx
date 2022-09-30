import React, {useState, useEffect} from 'react';

export default function LearnReactEffect() {
  const [showChild, setShowChild] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isUnmount = false;
    console.log("Initial", isUnmount);
    const getPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      if(!isUnmount) setItems(data);
    }
    getPost();

    return() => {
      isUnmount = true;
      console.log("Unmounted", isUnmount);
    }
  },[])

  useEffect(() => {
    console.log('Component did mount once');

    return() => {
      console.log('Component unomount once');
    }
  }, [])
  return(
    <div className='font-secondary text-center bg-teal-500 w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl py-5 font-bold'>Learn React Effect</h1>
      <button onClick={() => setShowChild(!showChild)} className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Toggle Child</button>
      {showChild && 
        <div className='bg-yellow-400 flex flex-col w-2/5 rounded-full items-center justify-center py-3 font-medium'>
          <h1>This is Child</h1>
          <p className='py-5'>{count}</p>
          <button onClick={() => setCount(count + 1)} className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Add Count</button>
          <button onClick={() => setCount(0)} className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Reset</button>
        </div>
      }
      {!items && <h1>Loading...</h1>}
      <button className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800' onClick={() => setShowItems(!showItems)}>Show / Hide Items</button>
      {items && showItems && <ul>{items.map(item => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  )
}