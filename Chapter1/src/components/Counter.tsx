import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0)

    function increment(){
        console.log('Incrementing...')
        setCounter(counter + 1)
    }
    
    function decrement(){
        console.log('Drecement...')
        setCounter(counter - 1)
    }

    return (
      <div>
        <h2>{counter}</h2>
        <button type="button" onClick={increment}>
          Increment + 1
        </button>
        <button type="button" onClick={decrement}>
          Drecement
        </button>
      </div>
    );
}