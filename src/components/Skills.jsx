import React from 'react'

const Skills = () => {
   const skills = ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"];
  return (
    <section id="skills" className="bg-slate-900  text-gray-100 py-16 px-6 sm:px-10 md:px-20">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {skills.map(skill => (
          <div
            key={skill}
            className="bg-slate-800 px-6 py-4 rounded-xl shadow-[0_0_10px_#38bdf8] hover:scale-110 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
