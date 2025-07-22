import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React router</h1>
      <Header />
      <Footer />
    </>
  )
}

export default App
