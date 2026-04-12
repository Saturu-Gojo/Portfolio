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
              Frontend Developer Intern — Hindalco Industries Limited, On-Site
            </h3>
            
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
              Web Development Team <span className="text-gray-500 font-normal ml-2">| Jun 2025 - Aug 2025</span>
            </p>

            <ul className="text-gray-600 dark:text-gray-400 mt-3 list-disc list-outside ml-4 space-y-1 text-sm border-t border-gray-100 dark:border-slate-700 pt-3">
              <li>Built responsive UI components and migrated legacy JavaScript modules to TypeScript for better type safety.</li>
              <li>Improved application speed through algorithm optimization and React performance tuning.</li>
              <li>Collaborated with backend teams to integrate RESTful APIs and optimized database query handling.</li>
            </ul>
          </div>

          {/* ATL Trainer */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              ATL Trainer and Teacher
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
              Mentored students in robotics and competitive coding; supported curriculum integration of maker skills and IoT at JNV Sonebhadra.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}