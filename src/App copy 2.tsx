import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='top'>
      top
      </div>
      <div className='center'>
      center
      </div>
      <div className='bottom'>
      bottom
      </div>
    </div>
  )
}

export default App
