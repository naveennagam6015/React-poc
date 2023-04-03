import React from 'react'

export default function App() {
  return (
    <div>
      <button onClick={()=>console.log("clicked")}>Click Here</button>
      <h1 onClick={()=>console.log("clicked")}>Click Here</h1>
    </div>
  )
}
