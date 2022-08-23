import { useState } from "react"

const Car = () => {
  const [car, setCar] = useState({
    brand: 'Ford', 
    model: ' Mustang', 
    year: 1964, 
    color: 'red', 
    owners: {
      owner1: 'Rafa',
      owner2: 'Justin',
      owner3: 'Jonathan'
    },
    accessories: ['Convertible', 'Turbo', 'SuperCharged', 'v8', 'Manual Transmission']
  })

  // const [color, setColor] = useState('red')
  // const [brand, setBrand] = useState('ford')
  // const [year, setYear] = useState('1964')
  console.log(car)
  
  const updateColor = () => {
    setCar(previousState => {
      return {...previousState, color: 'blue'}
    })
  }

  const updateOwner3 = () => {
    setCar(previousState => {
      return {...previousState, owners: {...previousState.owners, owner3: 'Jiho'}}
    })
  }

  const addRadio = () => {
    setCar({...car, accessories: [...car.accessories, 'Car Stereo']})
  }

  const removeRadio = () => {
    // take copy of state (car) and hold in updatedArray
    const updatedArray = car.accessories.filter(eachItem => eachItem !== 'Car Stereo')
    console.log(updatedArray)
    // updating state with this updatedArray
    setCar({...car, accessories: updatedArray})
  }

  const listOfAccessories = car.accessories.map(item => {
    return (
      <li> {item}</li>
    )
  })
  return(
    <>
      <h1>my car component is {car.color} and is now owned by {car.owners.owner3}</h1>
      <button onClick={updateColor}>change my color</button>
      <button onClick={updateOwner3}>change owner 3 to Jiho</button>
      <button onClick={addRadio}>add radio</button>
      <button onClick={removeRadio}>remove stereo</button>
      <ul>
        {/* {car.accessories.map(item => <li>{item}</li>)} */}
        {listOfAccessories}
      </ul>
    </>
  )
}

export default Car