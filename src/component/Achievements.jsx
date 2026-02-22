export default function Achievements() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-400 mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LeetCode */}

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="/Leetcode.png"
              alt="LeetCode Achievement"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                LeetCode — Knight
              </h3>

              <p className="text-gray-400 text-sm">
                Rating: 2039
              </p>

              <p className="text-gray-400 text-sm">
                Global Rank 245 (Biweekly)
              </p>
            </div>

          </div>

          {/* Codeforces */}

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src="/codeforces.png"
              alt="Codeforces Achievement"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Codeforces — Pupil
              </h3>

              <p className="text-gray-400 text-sm">
                Rating: 1282
              </p>

              <p className="text-gray-400 text-sm">
                Round Rank: 2921
              </p>
            </div>

          </div>

          {/* K3PC Contest */}

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg group">

  <div className="relative h-48">

    {/* Default Image */}

    <img
      src="/k3pc1.jpeg"
      alt="K3PC Contest"
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
    />

    {/* Hover Image */}

    <img
      src="/k3pc2.jpeg"
      alt="K3PC Contest Extra"
      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />

  </div>

  <div className="p-6">
    <h3 className="font-semibold text-lg mb-2">
      K3PC Contest
    </h3>

    <p className="text-gray-400 text-sm">
      Secured 5th Position
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  )
}