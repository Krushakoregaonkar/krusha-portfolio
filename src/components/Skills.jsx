function Skills() {
  const skills = [
    {
      name: "C Programming",
      level: "Intermediate",
      icon: "C",
    },
    {
      name: "C++",
      level: "Intermediate",
      icon: "C++",
    },
    {
      name: "Python",
      level: "Intermediate",
      icon: "🐍",
    },
    {
      name: "HTML",
      level: "Intermediate",
      icon: "🌐",
    },
    {
      name: "CSS",
      level: "Intermediate",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      level: "Learning",
      icon: "JS",
    },
    {
      name: "React.js",
      level: "Learning",
      icon: "⚛️",
    },
    {
      name: "Tailwind CSS",
      level: "Learning",
      icon: "TW",
    },
    {
      name: "Git & GitHub",
      level: "Learning",
      icon: "🔗",
    },
    {
      name: "Research & Analytics",
      level: "Intermediate",
      icon: "📊",
    },
    {
      name: "Design Thinking",
      level: "Intermediate",
      icon: "💡",
    },
    {
      name: "Video Editing",
      level: "Intermediate",
      icon: "🎬",
    },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            What I know
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-violet-400">Skills</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and skills I am learning and using to build
            projects and solve problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/10"
            >
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 font-bold text-violet-300 transition group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Skill info */}
                <div>
                  <h3 className="font-semibold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {skill.level}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Always learning. Always building.{" "}
            <span className="text-violet-400">🚀</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;