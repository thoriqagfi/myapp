import React, {useRef, useState, useEffect} from 'react';

export default function LearnUseRef() {
  const [counter, setCounter] = useState(0);
  const [renderUlang, setRenderUlang] = useState(0);
  const reRender = useRef(1);


  useEffect(() => {
    console.log("Render Ulang", renderUlang);
    // reRender.current = reRender.current + 1;
    // setRenderUlang(reRender.current);
  })

  const addCounter = () => {
    setCounter(counter + 1);
  }

  const addRenderUlang = () => {
    reRender.current = reRender.current + 1;
  }

  return (
    <div>
      <h1>Learn Use Ref</h1>
      <p>Counter: {counter}</p>
      <button onClick={addCounter}>Add Counter</button>

      <button onClick={addRenderUlang}>Add ReRender</button>
      <p>ReRender: {reRender.current}</p>
    </div>
  )
}