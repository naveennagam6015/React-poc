import React from 'react'
import { useState } from 'react'

function OnSubmit() {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = data;
    const onChange = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <center>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Username' name='username' value={username} onChange={onChange} /><br />
                <input type="password" placeholder='Password' name='password' value={password} onChange={onChange} /><br />
                <button type='submit'>Submit</button>
            </form>
        </center>
    )
}

export default OnSubmit