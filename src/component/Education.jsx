export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Education
        </h2>

        <div className="space-y-6">

          {/* College */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              B.Tech CSE — IET Lucknow
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              2023 — 2027
            </p>
          </div>

          {/* Class 12 */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Class XII — 90.08%
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Bhavan’s K D K Vidya Mandir
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}