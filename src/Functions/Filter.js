import React from 'react'

function Filter() {
    const arr1 = ["Bike", "Car", "Cycle", "Ship", "Aeroplane"]
    const filtured = arr1.filter(vehicles=>vehicles.includes("C"))
    const arr2 =[10,20,30,40,50,60]
    const numfilter = arr2.filter(number=>number>30)
  return (
    <div>
        <h2>Vehicles</h2>
        {
            filtured.map((vehicle => <li>{vehicle}</li>))
        }
        <h2>Numbers</h2>
        {
            numfilter.map((number=> <li>{number}</li>))
        }
    </div>
  )
}

export default Filter