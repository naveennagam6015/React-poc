import React from 'react'
import { useContext } from 'react'
import { store } from './ContextApi'
const ComponentB = () => {
    const [data,setData]=useContext(store)
  return (
    <div className='card'>
        <div className="card-body">
        ComponentB : {data}
        </div>
    </div>
  )
}

export default ComponentB