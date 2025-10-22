import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">Vansh<span className="text-cyan-400">Dev</span></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["home", "about", "skills", "projects", "contact"].map(link => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-cyan-400 transition">{link.toUpperCase()}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden bg-black/80 text-white text-center space-y-6 py-6">
          {["home", "about", "skills", "projects", "contact"].map(link => (
            <li key={link}>
              <a 
                href={`#${link}`} 
                onClick={() => setOpen(false)} 
                className="block hover:text-cyan-400 transition">
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};




export default Navbar
  