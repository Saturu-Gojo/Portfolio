export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 max-w-5xl mx-auto px-6 text-center
      bg-gray-50 dark:bg-slate-900"
    >
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Contact Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        prashasth068@gmail.com • +91-7268869676
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        <a
          href="mailto:prashasth068@gmail.com"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition"
        >
          Send Email
        </a>

        <a
          href="https://linkedin.com/in/prashasth-singh-059610358/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Saturu-Gojo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition"
        >
          GitHub
        </a>

      </div>
    </section>
  )
}