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

            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Rubic-Cube-Solver
              </h3>
              <span className="text-sm text-gray-500">Jul 2025</span>
            </div>

            <ul className="text-gray-600 dark:text-gray-400 mt-2 list-disc list-outside ml-4 space-y-1 text-sm">
              <li>Developed a full-stack application providing systematic steps to solve a Rubik's Cube.</li>
              <li>Integrated a hybrid database approach using MongoDB for flexible state storage and MySQL for structured user data.</li>
            </ul>

            <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 p-2 rounded">
              Tech Stack: TypeScript, React, Node.js, MongoDB, MySQL, Tailwind CSS
            </p>

            <a
              href="https://github.com/Saturu-Gojo/Rubic-Cube-Solver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              GitHub Repository →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}