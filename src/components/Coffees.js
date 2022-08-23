import { useEffect, useState } from "react"

const Coffees = () => {
  const [ rendered, setRendered ] = useState(false)
  const [ coffees, setCoffees ] = useState([])
  const [ temp, setTemp ] = useState(true)
  
  //without dependencies this will run on every re-render
  useEffect(() => {
    // console.log('run my use effect')
    // fetch('https://api.sampleapis.com/beers/ale')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err))
  })

  const coffeeTemp = temp ? 'hot' : 'iced'

  // with empty array will only run on first render/load/mount
  useEffect(() => {
    console.log('getting data once')

    const getData = async () => {
      const response = await fetch('https://api.sampleapis.com/coffee/hot')
      const data = await response.json()
      setCoffees(data)
    }
    getData()
  }, [])
  
  // every time temp state changes this useEffect will fire
  useEffect(() => {
    console.log('listening to temp')
    const getData = async () => {
      const response = await fetch(`https://api.sampleapis.com/coffee/${coffeeTemp}`)
      const data = await response.json()
      setCoffees(data)}
      getData()
  }, [temp])

  const allCoffees = coffees.map(eachCoffee => <p>{eachCoffee.title}</p>)

  return (
    <>
      <h1>Coffees Component - useEffect</h1>
      <h2>my coffees are {coffeeTemp}</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit! 
        {rendered && 'button was clicked'}
      </span>
      <button onClick={() => setRendered(true)}>render again</button>
      <button onClick={() => setTemp(!temp)}>get coffees</button>
      {allCoffees}
    </>
  )
}

export default Coffees