import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    /* const [data, setData] = useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/SCR01').then(response => response.json())
.then(data => {
    console.log(data)
    setData(data)
})
    },[]) */
  return (
    <div className='text-center m-4 bg-gray-700 text-black p-4 text-2xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='' width={300}/>
    </div>
  )
}

export default Github

export const lol = async () =>{
    const response = await fetch('https://api.github.com/users/SCR01')
return response.json()
} 
