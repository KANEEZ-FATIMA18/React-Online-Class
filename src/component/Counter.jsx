import React, { useState, useEffect } from 'react'


const App = () => {

const [counter, setCounter] = useState(0)
console.log(counter);


// useEffect(()=>{
//   console.log('hi i m useEffect');
  
// },[]) // initial load


// useEffect(()=>{
//   console.log('hi i m useEffect');
  
// },[counter]) // state or initial load bhi hoga

// useEffect(()=>{
//   console.log('hi i m useEffect');
  
// }) // chalta rahega

 

  return (
    <div>
      <button onClick={()=>{
        setCounter(counter +1)
      }}>Click me {counter}</button>
    </div>
  )
}

export default App
