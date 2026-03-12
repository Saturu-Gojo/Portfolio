export default function Footer() {
  return (
    <footer className="py-6 text-center
      bg-gray-100 dark:bg-slate-900
      text-gray-600 dark:text-gray-400">

      <p>© {new Date().getFullYear()} Prashasth Singh</p>

      <div className="flex justify-center gap-6 mt-3">

        <a
          href="https://github.com/Saturu-Gojo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/prashasth-singh-059610358/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500"
        >
          LinkedIn
        </a>

      </div>

    </footer>
  )
}