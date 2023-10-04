import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#fefbf3")
  return (
    <>
    <div className='bgcolor' style={{ backgroundColor: color }}>
      <div className="container">
        <button onClick={() => setColor("red")}
          className='button red'>RED</button>
          <button onClick={() => setColor("orange")} className='button orange'>ORANGE</button>
          <button onClick={() => setColor("yellow")} className='button yellow'>YELLOW</button>
          <button onClick={() => setColor("green")}
          className='button green'>GREEN</button>
        <button onClick={() => setColor("blue")}
          className='button blue'>BLUE</button>
       
        
        <button onClick={() => setColor("indigo")} className='button indigo'>INDIGO</button>
        <button onClick={() => setColor("violet")} className='button violet'>VIOLET</button>
      
        
      </div>
     

    </div>
     <div className="footer">
     <p>@sajan_moon</p>
   </div>
   </>
  )

}

export default App
