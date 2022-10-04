import React, {useState, useEffect} from 'react';

const LearnReactHooks = () => {
  const [foods, setFoods] = useState(['Mie Goreng', 'Nasi Goreng', 'Soto']);
  const initialCount = 0;
  const [value, setValues] = useState(initialCount);
  const incrementFive = () => {
    for(let i = 0; i < 5; i++){
      setValues(prevValue => prevValue + 1);
    }
  }
  // --------------------------------------------------------
  const [name, setName] = useState({firstName: '', lastName: ''})
  // --------------------------------------------------------
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  const addFoods = () => {
    setFoods([...foods, 'Sate']);
  }
  const removeItem = () => {
    // const name = e.target.id;
    setItems(prev => prev.filter((item, index) => index !== items.length - 1))
  }
  // -------------------------------------------------------
  useEffect(() => {
    document.title = name.firstName + ' ' + name.lastName;
    console.log('UseEffect done!');
  },[name])

  document.title = name.firstName + ' ' + name.lastName;
  return (
    <div className='font-secondary text-center bg-orange-200 py-5'>
      <h1 className="text-center text-xl font-bold">Count: {value}</h1>
      <div className='flex items-center justify-center font-medium gap-x-5 py-3'>
        <button onClick={() => 
          {
            if(value > 0)
            setValues(value-1)
        }} className='py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>-</button>
        <button className='py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800' onClick={() => setValues(value+1)}>+</button>
        <button className='py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800' onClick={() => setValues(initialCount)}>Reset</button>
      </div>
      <button className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800' onClick={incrementFive}>Increment 5</button>




      <form action="">
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} className='border-2 border-gray-400 rounded-lg px-2 mx-2'/>
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} className='border-2 border-gray-400 rounded-lg px-2 mx-2'/>
        <h2 className='py-2 font-bold'>Your first name is {name.firstName}</h2>
        <h2 className='py-2 font-bold'>Your last name is {name.lastName}</h2>
        <h2 className='font-thin py-2'>{JSON.stringify(name)}</h2>
        <input type="text" onChange={e => setFoods([...foods, e.target.value])} className='border-2 border-gray-400 rounded-lg px-2 mx-2'/>
        <button onClick={addFoods} className='my-3 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Add Foods</button>
      </form>

      

      <button onClick={addItem} className='my-3 mx-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Add a number</button>
      <button onClick={removeItem} className='my-3 mx-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800'>Remove a number</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              {item.id}. {item.value}
            </li> 
          ))
        }
      </ul>

      {foods.map(food => (<p>{food}</p>))}
    </div>
  )
}

export default LearnReactHooks;