import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <div className='bg-gray-400'><h1 className='bg-red-800 text-4xl'>Hello bkl</h1>
        <Login/>
        <Profile/></div>
        
      </UserContextProvider>
    </>
  )
}

export default App
