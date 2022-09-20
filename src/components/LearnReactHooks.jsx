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
    <div>
      <h1 className="text-center">Count: {value}</h1>
      <div className='flex'>
        <button onClick={() => 
          {
            if(value > 0)
            setValues(value-1)
        }}>-</button>
        <button onClick={() => setValues(value+1)}>+</button>
        <button onClick={() => setValues(initialCount)}>Reset</button>
      </div>
      <button onClick={incrementFive}>Increment 5</button>




      <form action="">
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
        <h2>Your first name is {name.firstName}</h2>
        <h2>Your last name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        <input type="text" onChange={e => setFoods([...foods, e.target.value])} />
        <button onClick={addFoods}>Add Foods</button>
      </form>

      

      <button onClick={addItem}>Add a number</button>
      <button onClick={removeItem}>Remove a number</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.value}</li> 
          ))
        }
      </ul>

      {foods.map(food => (<p>{food}</p>))}
    </div>
  )
}

export default LearnReactHooks;