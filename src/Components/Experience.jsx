import React from 'react'

const Experience = () => {
  return (
    <section className="py-24 bg-[#0b0f14]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          <div className="border-l border-white/10 pl-6">
            <h3 className="text-white font-medium">
              Full Stack Developer
            </h3>
            <p className="text-sm text-gray-400">
              Company Name • 2023 – Present
            </p>
            <p className="mt-2 text-gray-400">
              Built and maintained full-stack applications using React,
              Node.js, and cloud services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
