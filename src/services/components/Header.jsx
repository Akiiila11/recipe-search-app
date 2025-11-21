import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <section className='bg-red-600 p-5  px-0 text-white'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold cursor-pointer ml-5'>HA-HA RecipZ</h1>
        <nav>
            <Link to='/' className='mr-5 hover:underline'>Search</Link> 
            <Link to='/favorites' className='mr-5 hover:underline'>Favorites</Link> 
        </nav>
      </div>
    </section>
    
  )
}

export default Header
