import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0b0f14]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-12">
          Open to opportunities, collaborations, and freelance work.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=parikshit.r2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            <Mail size={18} />
            Email
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/parikz45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md border border-gray-700 text-white hover:bg-gray-800 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/parikshit-r-rs184524/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-md border border-gray-700 text-white hover:bg-gray-800 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
