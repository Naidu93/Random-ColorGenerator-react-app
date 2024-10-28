import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RandomColorGenerator from './components/RandomColorGenerator.jsx'
import StarRating from './components/StarRating.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <RandomColorGenerator />

    <StarRating noOfStars={10} />
  </>
  // </StrictMode>,
)
