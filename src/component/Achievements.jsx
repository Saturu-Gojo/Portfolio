export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LeetCode */}

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <img
              src="/Leetcode.png"
              alt="LeetCode Achievement"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                LeetCode — Knight
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Rating: 2039
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Global Rank 245 (Biweekly)
              </p>
            </div>

          </div>

          {/* Codeforces */}

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <img
              src="/codeforces.png"
              alt="Codeforces Achievement"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                Codeforces — Pupil
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Rating: 1282
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Round Rank: 2921
              </p>
            </div>

          </div>

          {/* K3PC Contest */}

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg group">

            <div className="relative h-48">

              <img
                src="/k3pc1.jpeg"
                alt="K3PC Contest"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              <img
                src="/k3pc2.jpeg"
                alt="K3PC Contest Extra"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                K3PC Contest
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Secured 5th Position
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}