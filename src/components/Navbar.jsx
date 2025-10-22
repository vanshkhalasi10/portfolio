import React from 'react'


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white'>
        <h1 className='text-2xl font-bold tracking-wide'>
          Vansh <span className='text-cyan-400'>Dev</span>
        </h1>

        <ul className='hidden md:flex space-x-8 text-lg'>
          <li><a href="#hero" className='hover:text-cyan-400 transition'>Hero</a></li>
          <li><a href="#about" className='hover:text-cyan-400 transition'>About</a></li>
          <li><a href="#skills" className='hover:text-cyan-400 transition'>Skills</a></li>
          <li><a href="#projects" className='hover:text-cyan-400 transition'>Projects</a></li>
          <li><a href="#contact" className='hover:text-cyan-400 transition'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
  