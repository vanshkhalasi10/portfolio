import React from 'react'
import travelImg from '../assets/projectImages/airplane.png'
import portfolioImg from '../assets/projectImages/portfolio.png';
import todoImg from '../assets/projectImages/list.png';


const Projects = () => {
  const projects = [
    { name: "Travel Website", link: "https://travel-website-one-dusky.vercel.app/", img: travelImg },
    { name: "Portfolio", link: "https://portfolio-seven-indol-55.vercel.app/", img: portfolioImg },
    { name: "Todo App", link: "https://task-product-dashboard-wkt8.vercel.app/",img: todoImg }
  ];
  return (
    <section id="projects" className="bg-slate-950  py-16 px-6 sm:px-10 md:px-20 text-gray-100">
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
