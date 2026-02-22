import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Name */}

        <h1 className="text-xl font-bold text-indigo-400">
          Prashasth Singh
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a
            href="https://linkedin.com/in/prashasth-singh-059610358/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 space-y-4">

          <a href="#about" className="block">About</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>

          <a
            href="https://linkedin.com/in/prashasth-singh-059610358/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-400"
          >
            LinkedIn
          </a>

        </div>
      )}

    </nav>
  )
}