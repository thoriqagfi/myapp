import React, {useState, useEffect} from 'react';

export default function LearnReactEffect() {
  const [showChild, setShowChild] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

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
    <div>
      <h1>Learn React Effect</h1>
      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
      {showChild && 
        <div>
          <h1>Child</h1>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Add Count</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      }
      {!items && <h1>Loading...</h1>}
      {items && <ul>{items.map(item => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  )
}