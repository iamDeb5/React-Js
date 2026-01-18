import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [brand, setBrand] = useState('Sheriyans')

  const changeBrand = (newBrand)=>{
    setBrand(newBrand)
  }

  return (
    <div>
      <Navbar brand={brand} changeBrand={changeBrand} />
    </div>
  )
}

export default App