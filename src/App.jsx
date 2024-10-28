import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RandomColorGenerator from './components/RandomColorGenerator.jsx'
import StarRating from './components/StarRating.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <RandomColorGenerator />

      <StarRating noOfStars={10} />
    </>
  )
}

export default App
