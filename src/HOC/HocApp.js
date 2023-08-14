import React from 'react'
import Hoc from './Hoc';
function HocApp(props) {
  return (
    <h1>Welcome User !! {props.name}</h1>
  )
}

export default Hoc(HocApp);