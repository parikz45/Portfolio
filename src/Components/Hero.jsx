const Hero = () => {
  return (
    <section className="relative flex py-37.5 justify-center overflow-hidden">

      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0e131a] to-[#0b0f14]" />

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Parikshit R
        </h1>

        <p className="mt-3 text-lg text-gray-400">
          Full Stack Engineer
        </p>

        <p className="mt-6 text-gray-500 leading-relaxed">
          I build scalable, production-ready web applications with modern
          frontend and backend technologies.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/PARIKSHIT-R-Resume.pdf"
            download
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Download Resume
          </a>

        </div>


      </div>
    </section>
  );
};

export default Hero;


