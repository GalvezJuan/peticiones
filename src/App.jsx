import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './Components/Pokemon'

function App() {
  const [count, setCount] = useState('')

  const inputRef= useRef()



  return (
    <>
    <input ref={inputRef} type="text" />
    <button onClick={()=>{setCount(inputRef.current.value)}}>Buscar</button>
      <Pokemon pok={count}/>
    </>
  )
}

export default App
