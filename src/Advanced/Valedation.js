import React, { useState } from 'react'
import FormValidation from './FormValidation'

export default function Valedation() {
    const[values,setValues]= useState({
        name:'',
        email:'',
        password:''
    })
    const [errors,setErrors]= useState()
    function handleInput(e){
        const newObject = {...values,[e.target.name]:e.target.value}
        setValues(newObject)
    }
    function handleValidation (e){
        e.preventDefaule();
       setErrors( FormValidation(values));
    }
  return (
    <div className="t-cntr">
    <h2>Validation</h2>
    <form onSubmit={handleValidation}>
        <div>
            <input placeholder="First name" type="text" onChange={handleInput} ></input>
        </div><br />
        <label className="required">Please fill any number</label><br />
        <div>
            <input placeholder="Last name" type="text" onChange={handleInput} ></input>
        </div><br />
        <label className="required">Please fill any number</label><br />
        <button>submit</button>
    </form>
</div>
)
}
