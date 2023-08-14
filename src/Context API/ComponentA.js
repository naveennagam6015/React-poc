import React from 'react'
import {useContext} from 'react'
import { store } from './ContextApi'
const ComponentA = () => {
    const[data,setData]=useContext(store)
  return (
    <div className='card'>
        <div className="card-body">
        ComponentA : {data}
        </div>
    </div>
  )
}

export default ComponentA