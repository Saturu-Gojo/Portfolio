export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Experience
        </h2>

        <div className="space-y-6">

          {/* Hindalco Internship */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Frontend Developer Intern — Hindalco
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Built responsive React components and improved application
              performance through UI optimization.
            </p>
          </div>

          {/* ATL Trainer */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              ATL Trainer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Conducted robotics workshops, mentored students in programming,
              and organized technical learning activities.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}