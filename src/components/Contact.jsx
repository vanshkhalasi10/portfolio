import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20 text-gray-100 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">Interested in working together? Let’s connect!</p>
      <a
        href="mailto:khalasivansh48@gmail.com"
        className="px-6 py-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 shadow-[0_0_10px_#00f5d4] transition-all"
      >
        Send Email
      </a>
    </section>
  )
}

export default Contact
