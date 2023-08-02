import React from 'react'

function OnClick() {
  return (
    <div>
    <button onClick={()=>console.log("clicked")}>Click Here</button>
    <h1 onClick={()=>console.log("clicked")}> OnClick</h1>
  </div>  )
}

export default OnClick