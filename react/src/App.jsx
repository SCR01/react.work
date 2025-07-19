import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
 //let counter = 5

 const addValue = () => {
  if(counter<20){
    setCounter(counter+1)
  }
  console.log("Value added", counter)
   console.log("Value added", Math.random())
 }

 const removeValue = () => {
  if(counter>0){
    setCounter(counter-1)
  }
  console.log("value removed", counter)
 }
  return (
    <>
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <h2>counter: {counter}</h2>

        <button onClick={addValue}>count add</button>
        <br></br>
        <button onClick={removeValue}>count remove</button>
      </p>
    </>
  )
}

export default App
