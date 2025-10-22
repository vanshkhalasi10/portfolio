import React from 'react'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id='hero'
      className="h-screen py-16 px-6 sm:px-10 md:px-20 flex flex-col justify-center items-center text-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1),transparent)] animate-pulse pointer-events-none'></div>
     

        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold text-centermb-4 drop-shadow-lg'>
          Hi, I'm{' '}
          <span className='text-cyan-400'>
            <Typewriter
              words={['Vansh Khalasi', 'a Frontend Dev']}
              loop={0}        // 0 = infinite loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>


    


      <p className='text-base sm:text-lg md:text-2xl text-gray-300 max-w-md sm:max-w-xl text-center px-4'>
        A Frontend Developer passionate about building futuristic, responsive, and elegant web experiences.
      </p>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        className='mt-6 px-5 py-3 bg-cyan-500 rounded-full text-white text-base sm:text-lg hover:bg-cyan-400 transition transform hover:scale-105 cursor-pointer'
      >
        View My Work 🚀
      </Link>
    </section>
  )
}

export default Hero
