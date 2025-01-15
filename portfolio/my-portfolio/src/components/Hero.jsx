import React from 'react'
import mibin from'../assets/mibin.jpg'

function Hero() {
  return (
    <div className='bg-gray-800 text-white py-16 w-full fixed left-0 '>
      <div className=" relative left-2/3 top-40">
      <img  src={mibin}alt="error"  className='  flex sm:flex-col sm:w-48 h-48 object-cover  md:flex-row md:w-64 md:h-64 '></img>
      </div>
      <div className='relative left-8 bottom-20'>
      
       <h1 className='text-4xl font-bold flex'>
        <span>Hi,{""}i'M MIBIN!'</span> 
        MERN stack{""} developer
       </h1>
      
       <p className='mt-4 text-lg text-gray-400 flex  sm:flex-col sm:text-center  md:flex-row md:w-1/2  md:text-left'>I am a dedicated MERN stack developer with expertise in building dynamic, responsive, and scalable web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I have a strong passion for crafting seamless user experiences and efficient backend systems. I excel in developing full-stack solutions, integrating APIs, and optimizing performance to deliver high-quality software products. With a problem-solving mindset and a collaborative approach, I strive to transform ideas into impactful digital solutions.
       </p>
       </div>

       <div className='space-x-4 relative right-1/4'>
        <button className=' bg-green-500 space-x-4 hidden md:inline transform transiton-transform duration-300  hover:scale-105 px-4 py-2'>resume</button>  
       <button className=' bg-green-500  space-x-4 hidden md:inline transform transiton-transform duration-300 hover:scale-105 px-4 py-2'>contact</button>
       </div>
    
       
    </div>

  )
}

export default Hero
