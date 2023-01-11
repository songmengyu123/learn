import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <div className="header">
        低代码引擎
      </div>
      <div className="content">
        <div className="leftSide">
          {/* <div>
            <a href="#">大纲树</a>
          </div>
          <div>
            <a href="#">组件库</a>
          </div>
          <div>
            <a href="#">数据源</a>
          </div>
          <div>
            <a href="#">源码面板</a>
          </div> */}
        </div>

        <div className="componentPane">
          
        </div>


        <div className="center">
        主栏
        </div>
        
        <div className="right">
        副栏
        </div>
      </div>
      <div className="footer">
        邮箱
      </div>
    </div>
  )
}

export default App
