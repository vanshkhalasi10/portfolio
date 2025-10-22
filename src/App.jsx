import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
