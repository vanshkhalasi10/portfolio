import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-gray-200 px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
      <p className="max-w-2xl text-center text-gray-400 leading-relaxed">
        I’m a frontend developer skilled in React, JavaScript, Tailwind CSS & Bootstrap.
        I love creating modern, responsive, and futuristic web interfaces that deliver
        a great user experience.
      </p>
    </section>
  )
}

export default About
