import React from 'react'

function SpreadOperator() {
    let arr1 = [1,2,3,4,5];
    let arr2 = [6,7,8,9,10];
  
    let arr3=[...arr1,...arr2];
    // document.write("Data :"+arr3)
    console.log("Value :"+ arr3)
    // alert(arr3)



  return (
    <div>SpreadOperator</div>
  )
}

export default SpreadOperator