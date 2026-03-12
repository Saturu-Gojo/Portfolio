import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <nav className="fixed w-full bg-white dark:bg-slate-900/90 backdrop-blur z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}

        <h1 className="text-xl font-bold text-indigo-500 dark:text-indigo-400">
          Prashasth Singh
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-6 text-black dark:text-gray-200">

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a
            href="https://linkedin.com/in/prashasth-singh-059610358/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400"
          >
            LinkedIn
          </a>

        </div>

        {/* Right Side Buttons */}

        <div className="flex items-center gap-4">

          {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-6 pb-4 space-y-4 text-black dark:text-gray-200">

          <a href="#about" className="block">About</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>

          <a
            href="https://linkedin.com/in/prashasth-singh-059610358/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 dark:text-blue-400"
          >
            LinkedIn
          </a>

        </div>
      )}

    </nav>
  )
}