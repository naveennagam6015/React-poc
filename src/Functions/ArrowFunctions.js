import React from 'react'

function ArrowFunctions() {
    const newFunction = num1 => num1;
    console.log(newFunction(10));
    return (
        <div>
           ArrowFunctions
        </div>
    )
}

export default ArrowFunctions;