export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-indigo-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Rubik Cube Solver
          </h3>

          <p className="text-gray-400 mt-2">
            Provides systematic steps to solve the cube using a web interface.
          </p>

          <p className="mt-3 text-sm">
            Tech: HTML, CSS, JS, Tailwind, MySQL
          </p>

          <a
            href="https://github.com/Saturu-Gojo/Rubic-Cube-Solver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-indigo-400"
          >
            GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}