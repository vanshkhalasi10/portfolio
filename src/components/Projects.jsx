import React from 'react'

const Projects = () => {
  const projects = [
    { name: "Travel Website", link: "#", img: "project1.png" },
    { name: "Portfolio", link: "#", img: "project2.png" },
    { name: "Todo App", link: "#" }
  ];
  return (
    <section id="projects" className="bg-slate-950 py-20 text-gray-100">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-900 p-4 rounded-2xl shadow-[0_0_10px_#38bdf8] hover:scale-105 transition-all">
            <img src={p.img} alt={p.name} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <a href={p.link} className="text-cyan-400 hover:underline">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
