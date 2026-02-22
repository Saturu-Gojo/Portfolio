
const Skills = () => {
    const skills = ["C/C++", "Python", "JavaScript", "SQL",
    "React", "Tailwind", "Bootstrap",
    "DSA", "Problem Solving"];

    return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-400 mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-500/20 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )

}

export default Skills;