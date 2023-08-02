// Login , signup and Validation form 
import React from 'react'
import { useState } from "react"

function Login() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    conformpassword: ''
  });
  const { username, email, password, conformpassword } = data;
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  };
  const submitHandler = e => {
    e.preventDefault();
    if(username.length<=5){
      alert("Username must have 5 letters")
    }else if (password!== conformpassword){
      alert("Password is not matching")
    }else{
      console.log(data);
    }
  };

  return (
    <center>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='username' name="username" value={username} onChange={onChange} /> <br />
        <input type="email" placeholder='Email' name="email" value={email} onChange={onChange} /><br />
        <input type="password" placeholder='Password' name="password" value={password} onChange={onChange} /><br />
        <input type="password" placeholder='Conform password' name="conformpassword" value={conformpassword} onChange={onChange} /><br />
        {password!==conformpassword? <p style={{color:"red"}}>Password is not matching</p>:null}
        <input type="submit" name="submit" />
      </form>
    </center>
  )
}
export default Login