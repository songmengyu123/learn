import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className='top'>
        top
      </div>
      <div className='center'>
        <div className="center-nav"> 
          center-nav
        </div>
        <div className="componentPane">
          componentPane
        </div>
        <div className="center-main">
          center-main
        </div>
        <div className="center-rightside">
          center-rightside
        </div>
      </div>
      <div className='bottom'>
        bottom
      </div>
    </div>
  )
}

export default App
