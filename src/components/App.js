import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [time, setTime] = useState('')
 

  // console.log(new Date().toLocaleString())
 
  useEffect(()=> {
    setTimeout(() => {
      var t = new Date().toLocaleString()
      setTime(t)
    },1000)
  },[time])

  return (
    <div id="main">
      <div className="date-time">
        {time}
      </div>
    </div>
  )
}


export default App;
