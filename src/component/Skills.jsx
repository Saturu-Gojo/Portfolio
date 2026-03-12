const Skills = () => {
  const skills = [
    "C/C++", "Python", "JavaScript", "SQL",
    "React", "Tailwind", "Bootstrap",
    "DSA", "Problem Solving"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg text-sm font-medium
              bg-indigo-100 text-indigo-700
              dark:bg-indigo-500/20 dark:text-indigo-300
              hover:-translate-y-1 hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;