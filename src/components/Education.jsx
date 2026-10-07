function Education() {
  const education = [
    {
      year: "2025 – 2029",
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering",
      institution: "Sahyadri College of Engineering and Management, Mangalore",
      result: "Currently Pursuing",
      icon: "🎓",
    },
    {
      year: "2023 – 2025",
      degree: "12th / PUC",
      field: "Pre-University Education",
      institution: "St. Joseph PU College, Karwar",
      result: "78%",
      icon: "📚",
    },
    {
      year: "2023",
      degree: "10th / SSLC",
      field: "Secondary School Education",
      institution: "Balmandir High School, Karwar",
      result: "81.12%",
      icon: "🏫",
    },
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Academic journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-violet-400">Education</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent sm:block" />

          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={item.degree}
                className="relative sm:pl-16"
              >

                {/* Timeline icon */}
                <div className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-500/40 bg-slate-950 text-lg sm:flex">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400">
                        {item.year}
                      </span>

                      <h3 className="mt-4 text-xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-gray-300">
                        {item.field}
                      </p>

                      <p className="mt-3 text-gray-400">
                        {item.institution}
                      </p>
                    </div>

                    <div className="self-start rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
                      <p className="text-xs text-gray-500">
                        Result
                      </p>

                      <p className="mt-1 font-semibold text-violet-400">
                        {item.result}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;