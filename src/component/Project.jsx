export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Rubik Cube Solver
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Provides systematic steps to solve the cube using a web interface.
            </p>

            <p className="mt-3 text-sm text-indigo-600 dark:text-indigo-400">
              Tech: HTML • CSS • JavaScript • Tailwind • MySQL
            </p>

            <a
              href="https://github.com/Saturu-Gojo/Rubic-Cube-Solver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View on GitHub →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}