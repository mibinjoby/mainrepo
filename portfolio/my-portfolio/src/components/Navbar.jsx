import React from 'react'

function Navbar() {
  return (
  <div className=" w-full fixed top-0 left-0 z-50">
    <nav className='bg-slate-700 text-white px-8 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50'>
        <div  className='container  py-2 flex justify-center md:justify-between items-center'>
              <div className='text-2xl font-bold p-4 hidden md:inline'>MIBIN</div>
              <div className='space-x-6'>
 
               <a href="#home" className='  hover:text-green-500 font-bold' >Home</a>
               <a href="#about" className=' hover:text-green-500 font-bold '>About</a>
               <a href="#services"className='hover:text-green-500 font-bold ' >Services</a>
               <a href="#projects" className=' hover:text-green-500 font-bold '>Projects</a>
               <a href="#contact" className=' hover:text-green-500 font-bold '>Contacts</a>

              </div>
              <button className='bg-green-500 hidden md:inline transform transiton-transform duration-300 hover:scale-105 px-4 py-2'>contact</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
