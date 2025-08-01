import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
e.preventDefault()
setUser({username, password})
    }
  return (
    <div >
      <h1>Log in</h1>
     
     <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='username'></input>
     {"  "}
      <input  value={password} onChange={(e)=>setPassword(e.target.value)}type='text' placeholder='password'/>
      <button className='bg-amber-200 bg-blend-hard-light text-black' onClick={handleSubmit}>Submit</button> 
    </div>
  )
}

export default Login
