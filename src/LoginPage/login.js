import { useState } from "react"

export default function App() {
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = data
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = e => {
    e.perventDefault()
    console.log(data)
  }
  return (
    <div className="p-3 text-center">            
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={changeHandler} /> <br />
        <input type="password" name="password" value={password} onChange={changeHandler} /><br />
        <input type="submit" className="btn btn-info margin" name="submit" />
      </form>
    </div>
  )
}
