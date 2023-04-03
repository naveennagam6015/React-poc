import { useState } from "react"

export default function App() {
  const[user, setUser]=useState("")
  const handler = e=>{
    setUser(e.target.value)
  }
  return (
    <div>
      <center>
      <input type="text" placeholder='Usename' value={user} name="user"
      onChange={handler}
      /><br/>
      <h3>{user}</h3>
      </center>
    </div>
  )
}
