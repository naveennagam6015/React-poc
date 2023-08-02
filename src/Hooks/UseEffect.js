import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect() {
    const[count,setCount]=useState(0);
    useEffect(()=> console.log(count),[count]);
    return (
      <div>
          <center>
              <h2>{count}</h2>
              <button onClick={()=>{setCount(count+1)}}>Click</button>
          </center>
      </div>
  )
}

export default UseEffect