import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarimg from'../assets/avatar.png'
import { useState } from 'react';



const Navbar = () => {

    const [isDropdownOpen,setIsDropdownOpen] = useState (false)
    console.log(isDropdownOpen);
    

    const currentuser = true;
  return (
   <header className='max-w-screen-2xl mx-auto px-4 py-6'>
    <nav className='flex justify-between items-center'>
        {/*left*/}
        <div className='flex items-center md:gap-16 gap-4'>
            <Link to="/">
            <HiOutlineBars3CenterLeft className='size-6'/>
            </Link>

            {/*serach*/}
            <div className='relative sm:w-72 w-40 space-x-2'>
            <IoSearch className='absolute inline-block left-3 inset-y-2'/>
            <input type="text" placeholder='search here' className='bg-[#EAEAEA]  w-full py-1 md:px-8 px:6 rounded-md focus:outline-none'/>

            </div>
        </div>
        {/*right*/}
        <div className='relative flex items-center md:space-x-3 space-x-2'>

            <div>
                {
                  currentuser ? 
                  <>
                <button onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={avatarimg} alt="" className={`size-7 rounded-full ${currentuser ? 'ring-2 ring-blue-500' : ''}`} />
                </button>
                 </> : <Link to ="/loginpage"> <FaRegUser className='size-6'/> </Link>
                }
                
            </div>
      
        <button className='hidden sm:block'>
        <FaRegHeart className='size-6'/>
        </button>
        <Link to="/cart"  className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
        <HiOutlineShoppingCart />
        < span className='text-sm  font-semibold sm:ml-1'>0</span>
        </Link>
        </div>

    </nav>

   </header>
      
    
  )
}

export default Navbar
