function Projects() {
  const projects = [
    {
      title: "AI-Powered Medical Report Simplifier",
      description:
        "A web application that uses OCR and AI concepts to extract information from medical reports and present complex medical information in simpler language.",
      tags: ["React", "Python", "OCR", "AI"],
      icon: "🏥",
    },
    {
      title: "CineBook",
      description:
        "A movie booking web application where users can explore movies, select seats and make bookings through a simple interactive interface.",
      tags: ["HTML", "CSS", "JavaScript", "Express"],
      icon: "🎬",
    },
    {
      title: "Profile Card",
      description:
        "A responsive profile card project designed to present personal information in a clean and attractive interface.",
      tags: ["HTML", "CSS", "Responsive Design"],
      icon: "👤",
    },
    {
      title: "UPI Scam Alert",
      description:
        "A cyber-safety project focused on increasing awareness about UPI scams and helping users identify potentially suspicious digital payment situations.",
      tags: ["Cyber Safety", "Web", "Awareness"],
      icon: "🛡️",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            My work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-violet-400">Projects</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Some of the projects I have worked on while learning and
            exploring software development and technology.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
            >

              {/* Project Visual */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20">
                <span className="text-7xl transition duration-300 group-hover:scale-125">
                  {project.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center font-semibold text-violet-400 transition hover:text-violet-300"
                  >
                    View Project
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;