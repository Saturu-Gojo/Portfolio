

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE — TEXT */}

        <div>
          <h2 className="text-indigo-400 text-lg mb-2">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Prashasth Singh
          </h1>

          <h3 className="text-2xl text-gray-400 mb-6">
            Competitive Programmer & Frontend Developer
          </h3>

          <p className="text-gray-400 mb-8">
            Knight on LeetCode • React Developer • CSE Student at IET Lucknow
          </p>

          <div className="flex gap-4">

            <a
              href="#projects"
              className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600"
            >
              View Projects
            </a>

            

            <a
              href="https://www.linkedin.com/in/prashasth-singh-059610358/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600"
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
              src="/prashasthphoto.jpeg"
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-indigo-500"
            />

          </div>

        </div>

      </div>
    </section>
  )
}