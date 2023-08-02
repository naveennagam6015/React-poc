import React from 'react'
import { useState } from 'react'

function UseState() {
    const[count,setCount]=useState(0);
  return (
    <div>
        <center>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count-1)}}>Increase</button>
            <button onClick={()=>{setCount(count+1)}}>Decrease</button>
        </center>
    </div>
  )
}

export default UseState