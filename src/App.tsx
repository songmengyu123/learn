import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:800}}>
      <div style={{height: 48,backgroundColor:"#5584ff"}}>
      1
      </div>

      <div style={{height:"calc(100% - 48px)",backgroundColor:"blue"}}>

      </div>
    </div>
  )
}

export default App
