import React from 'react'

const Contact = () => {
  return (
    <section className="py-24 bg-[#0b0f14]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-8">
          Open to opportunities, collaborations, and freelance work.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
