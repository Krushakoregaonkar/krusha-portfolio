function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

        <div>
          <a
            href="#home"
            className="text-xl font-bold text-violet-400"
          >
            Krusha<span className="text-white">.</span>
          </a>

          <p className="mt-1 text-sm text-gray-500">
            CSE Student & Aspiring Developer
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Krusha S. Koregaonkar. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;