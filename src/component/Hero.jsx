export default function Hero() {
  return (
    <section className="min-h-screen flex items-center
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE — TEXT */}

        <div>

          <h2 className="text-indigo-600 dark:text-indigo-400 text-lg mb-2">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold mb-4
            text-gray-900 dark:text-white">
            Prashasth Singh
          </h1>

          <h3 className="text-2xl text-gray-700 dark:text-gray-400 mb-6">
            Competitive Programmer & Frontend Developer
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Knight on LeetCode • React Developer • CSE Student at IET Lucknow
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition"
            >
              
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/prashasth-singh-059610358/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition"
            >
              Resume
            </a>

          </div>

        </div>

        {/* RIGHT SIDE — IMAGE */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/prashasthphoto2.jpeg"
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-indigo-500 shadow-xl"
            />

          </div>

        </div>

      </div>

    </section>
  )
}