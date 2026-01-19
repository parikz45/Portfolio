import React from "react";
import Img from "../assets/movie.webp";
import icon from "../assets/icon.png";
import todo from "../assets/chat.webp";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-white mb-10">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* IMDB Clone */}
          <div className="bg-[#0b0f14] border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition">
            <img
              src={Img}
              alt="IMDB Clone"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-white font-medium mb-2">
                IMDB Clone
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                This is an IMDB clone website made using React with the help of
                TMDB API.
              </p>
              <a
                href="https://clinquant-daifuku-efd533.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* We-Meet */}
          <div className="bg-[#0b0f14] border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition">
            <img
              src={todo}
              alt="To-do List"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-white font-medium mb-2">
                We-Meet
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                A real-time social media web application with chat, posts, notifications, and media uploads.
              </p>
              <a
                href="https://we-meet-ebon.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* News App */}
          <div className="bg-[#0b0f14] border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition">
            <img
              src={icon}
              alt="News App"
              className="w-full h-48 object-contain bg-black"
            />
            <div className="p-6">
              <h2 className="text-white font-medium mb-2">
                News App
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                An app that helps you to get the latest news updates.
              </p>
              <a
                href="https://drive.google.com/file/d/1LK3MBPO4qFNPRvoT7NxuXBkUCT0Yijfn/view"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Weather App */}
          <div className="bg-[#0b0f14] border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition">
            <img
              src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024"
              alt="Weather App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-white font-medium mb-2">
                Weather App
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                An app that helps you to get the daily weather details.
              </p>
              <a
                href="https://drive.google.com/file/d/1VZmUYJZUYWBs6g5gYXeDsapv5NSH3Rpa/view"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
