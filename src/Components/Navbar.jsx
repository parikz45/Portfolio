import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f14]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-white font-bold text-3xl tracking-wide">
          PORTFOLIO
        </span>

        <ul className="flex gap-4 md:gap-10 text-xl text-gray-300">
          {["Home", "About", "Projects", "Contact"].map(item => (
            <li key={item} className="hover:text-white transition">
              <a
                href={`#${item.toLowerCase()}`}
                className="block cursor-pointer"
              >
                {item}
              </a>
            </li>

          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
