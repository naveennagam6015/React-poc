import React from 'react'

function UseMap() {
  const arr1 = ["Bike", "Car", "Cycle", "Ship", "Aeroplane"]
  arr1.push("Jet")
  const arr2 = [
    {
      id: 1,
      title: "Bike",
      fruit: "Apple"
    },
    {
      id: 2,
      title: "Car",
      fruit: "Orange"
    },
    {
      id: 3,
      title: "Cycle",
      fruit: "Mango"
    },
    {
      id: 4,
      title: "Ship",
      fruit: "Graps"
    },
    {
      id: 5,
      title: "Aeroplane",
      fruit: "Banana"
    },
    {
      id: 6,
      title: "Jet",
      fruit: "Pineapple"
    },
  ]
  return (
    <div>
      <h3>Vehicles</h3>
      {
        arr1.map((Vehicle, index) => <li key={index}>{Vehicle}</li>
        )
      }
      <h3>Frutis</h3>
      {
        arr2.map(
          (vehicles) => <li key={vehicles.id}>{vehicles.fruit}</li>
        )
      }
    </div>
  )
}

export default UseMap