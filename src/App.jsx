import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './Components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon />
    </>
  )
}

export default App
