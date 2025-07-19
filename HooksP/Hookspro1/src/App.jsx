import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [charallw, setCharallw] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (num) str += "0123456789";
    if (charallw) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
  }, [length, num, charallw]);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 11);
    window.navigator.clipboard.writeText(password)
  },[password]);
  
  
  useEffect(()=>{
    passwordGenerator();
  },[ length, num, charallw, passwordGenerator]);

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-black-700 bg-gray-400'>
      Password Gen
      <div className='className=flex bg-amber-50 shadow rouned-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-300 text-shadow-indigo-50 shrink-0 px-3.5'>copy</button>
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={30}
          value={length}
          className='curson pointer' onChange={(e)=>setLength(e.target.value)}></input>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={num}
          id="numberInput"
          onChange={()=>{setNum((prev)=>!prev);}}/>
          <label htmlfor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charallw}
          id="characterInput"
          onChange={()=>{setCharallw((prev)=>!prev);}}/>
          <label htmlfor="numberInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
