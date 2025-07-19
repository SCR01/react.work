import React from 'react'
import './App.css' // Optional if you're using it for custom styles
import Card from './components/Card' // Import the Card component

const App = () => {
  let myobj = {
    username: "hsaeahf",
    age:22
  }

  let newArr= [1,2,4,5,6,7,8,9,10]
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg
            className="h-6 w-6 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>
      <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Writes upside-down
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
      <Card channel="Lelo mera mu mein" someobj={myobj} someArr={newArr}/>
    <Card username="scr" age={22} />

    </div>
  )
}

export default App
