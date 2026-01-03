import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-18 bg-blue-400 flex justify-center items-center gap-16'>
        <Link to='/' className='text-lg font-semibold px-4 py-2 active:scale-95 hover:underline' >Home</Link>
        <Link to='/product' className='text-lg font-semibold px-4 py-2 active:scale-95 hover:underline' >Product</Link>
        <Link to='/about' className='text-lg font-semibold px-4 py-2 active:scale-95 hover:underline' >About</Link>
        <Link to='/contact' className='text-lg font-semibold px-4 py-2 active:scale-95 hover:underline' >Contact</Link>
        
    </div>
  )
}

export default Navbar