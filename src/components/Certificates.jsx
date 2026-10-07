function Certificates() {
  const certificates = [
    {
      title: "International Conference on Recent Innovation in Computer Science",
      description:
        "Research paper presentation and participation in an international conference.",
      icon: "📜",
    },
    {
      title: "CodeChef SIP Certificate",
      description:
        "Certificate recognizing participation and learning through CodeChef's programming activities.",
      icon: "💻",
    },
    {
      title: "Research Paper Confirmation & Certificate",
      description:
        "Research paper accepted and presented as part of an international conference.",
      icon: "🔬",
    },
    {
      title: "Technical Career Education",
      description:
        "Completed technical learning and career-oriented educational activities.",
      icon: "🎓",
    },
    {
      title: "Simplilearn",
      description:
        "Completed online technical learning and skill-development coursework.",
      icon: "📚",
    },
    {
      title: "Hastkala — Real World Project",
      description:
        "Participated in a practical project focused on applying skills to a real-world problem.",
      icon: "🚀",
    },
  ];

  const achievements = [
    "🏃 Running",
    "🏐 Throwball",
    "🏐 Volleyball",
  ];

  return (
    <section id="certificates" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Credentials & accomplishments
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Certificates &{" "}
            <span className="text-violet-400">Achievements</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </div>

        {/* Certificates */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-2xl transition group-hover:scale-110">
                {certificate.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/10 to-blue-600/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Sports & Activities
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            I also actively participate in sports and extracurricular
            activities, developing teamwork, discipline and a competitive
            spirit.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {achievements.map((achievement) => (
              <span
                key={achievement}
                className="rounded-full border border-white/10 bg-slate-900/70 px-5 py-2 text-sm font-medium text-gray-200"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certificates;