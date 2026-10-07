function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background effects */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-violet-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Krusha S.
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Koregaonkar
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-200">
            Computer Science & Engineering Student
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
            Passionate about technology, programming and building creative
            solutions using modern web technologies and artificial
            intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3 font-semibold transition hover:scale-105"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-gray-200 transition hover:border-violet-400 hover:text-violet-400"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
            <span>📍 Karwar, Karnataka</span>
            <span>🎓 CSE Student</span>
            <span>💻 Developer</span>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-3xl" />

            {/* Profile image placeholder */}
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-violet-500/40 bg-slate-900 shadow-2xl sm:h-80 sm:w-80">

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-4xl font-bold">
                  K
                </div>

                <p className="text-lg font-semibold text-white">
                  Krusha Koregaonkar
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  CSE Student
                </p>
              </div>

            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur">
              <p className="text-sm text-gray-400">Currently</p>
              <p className="font-semibold text-violet-400">
                Learning & Building 🚀
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;