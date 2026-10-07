function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About <span className="text-violet-400">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              CSE Student & Aspiring Developer
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              I am a Computer Science and Engineering student with a strong
              interest in programming, web development, artificial
              intelligence and emerging technologies.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I enjoy learning new technologies and turning ideas into
              practical projects. My goal is to continuously improve my
              technical skills while creating useful and innovative
              solutions.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I am currently developing my skills in C, C++, Python,
              JavaScript, React and modern web technologies.
            </p>

            {/* Info */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">Education</p>
                <p className="mt-1 font-semibold text-white">
                  B.E. Computer Science
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-1 font-semibold text-white">
                  Karwar, Karnataka
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="mt-1 font-semibold text-white">
                  Web Development
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-500">Interests</p>
                <p className="mt-1 font-semibold text-white">
                  AI & Technology
                </p>
              </div>

            </div>
          </div>

          {/* Highlights Card */}
          <div className="relative">

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-blue-600/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-bold">
                My Journey 🚀
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-violet-400">
                    💻
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Programming
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Building a strong foundation in programming and
                      problem-solving.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                    🌐
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Web Development
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Creating responsive and interactive web applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    🤖
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      AI & Innovation
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Exploring artificial intelligence and innovative
                      technology solutions.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;