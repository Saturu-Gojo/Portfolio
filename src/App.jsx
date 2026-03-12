import About from "./component/About"
import Achievements from "./component/Achievements"
import Experience from "./component/Experience"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Skills from "./component/Skills"
import Projects from "./component/Project"
import Education from "./component/Education"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {

  return (
    <>
    <div className="bg-white dark:bg-slate-950 text-black dark:text-gray-200 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />

    </div>
     
    </>
  )
}

export default App
