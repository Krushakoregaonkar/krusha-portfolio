function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's <span className="text-violet-400">Connect</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              I am always open to learning opportunities, collaborations,
              internships and interesting technology projects.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                  📧
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-gray-200 transition hover:text-violet-400"
                  >
                    your-email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  📍
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-200">
                    Karwar, Karnataka, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm text-gray-500">
                Connect with me
              </p>

              <div className="flex gap-3">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-violet-500 hover:text-violet-400"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-violet-500 hover:text-violet-400"
                  aria-label="LinkedIn"
                >
                  in
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold transition hover:scale-[1.02]"
              >
                Send Message 🚀
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;