import React from 'react'

const Card = ({username}) => {

console.log(username)
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" />
      </div>
      <div className="flex flex-col gap-1 mt-4 text-center">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 justify-center text-sm text-gray-600">
          <span>No. 4</span>
          <span><h1>{username}</h1></span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  )
}

export default Card
