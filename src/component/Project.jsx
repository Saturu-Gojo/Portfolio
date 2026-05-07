import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Agro-Hedging & Price Prediction Platform",
      date: "May 2026",
      bullets: [
        "Developed a real-world hedging platform utilizing Machine Learning to predict Mandi prices by training models on multi-factor datasets including import/export trends, temperature, and seasonal weather patterns.",
        "Integrated Blockchain technology to ensure transparent and immutable contract execution between farmers and buyers, mitigating financial risk through decentralized ledger records.",
      ],
      tech: "Python (Scikit-Learn/Pandas), Solidity, Ethereum, React, Node.js, MongoDB",
      github: "https://github.com/Saturu-Gojo/Hedging-Platform",
      live: null,
    },
    {
      title: "Mood-Music-AI",
      date: "Apr 2026",
      bullets: [
        "Engineered a full-stack application utilizing face-api.js for neural network-based facial expression analysis to detect real-time emotional states.",
        "Leveraged Google Gemini API to interpret detected moods and generate context-aware, personalized music recommendations through a Node.js backend.",
      ],
      tech: "React.js, Node.js, Gemini AI, Tailwind CSS, face-api.js",
      github: "https://github.com/Saturu-Gojo/Mood-Music-AI",
      live: "https://mood-music-ai-3k2g.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 shrink-0 ml-2">{project.date}</span>
              </div>

              <ul className="text-gray-600 dark:text-gray-400 mt-2 list-disc list-outside ml-4 space-y-1 text-sm flex-1">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/50 p-2 rounded">
                **Tech Stack:** {project.tech}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm"
                >
                  GitHub Repository →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;