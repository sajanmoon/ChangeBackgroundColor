import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#fefbf3")
  return (
    <div className='bgcolor' style={{ backgroundColor: color }}>
      <div className="container">
        <button onClick={() => setColor("red")}
          className='button red'>RED</button>
        <button onClick={() => setColor("blue")}
          className='button blue'>BLUE</button>
        <button onClick={() => setColor("green")}
          className='button green'>GREEN</button>
        <button onClick={() => setColor("yellow")} className='button yellow'>YELLOW</button>
        <button onClick={() => setColor("pink")} className='button pink'>PINK</button>
        <button onClick={() => setColor("orange")} className='button orange'>ORANGE</button>
        <button onClick={() => setColor("purple")} className='button purple'>PURPLE</button>
        <button onClick={() => setColor("maroon")} className='button maroon'>MAROON</button>

      </div>
    </div>
  )

}

export default App
