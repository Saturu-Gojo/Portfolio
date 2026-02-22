export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-6">
        prashasth068@gmail.com • +91-7268869676
      </p>

      <a
        href="mailto:prashasth068@gmail.com"
        className="bg-indigo-500 px-6 py-3 rounded-lg"
      >
        Send Email
      </a>

      <a
        href="https://linkedin.com/in/prashasth-singh-059610358/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-indigo-500 px-6 py-3 rounded-lg"
      >
        LinkedIn
      </a>

    </section>
  )
}