// import React from 'react'
// import styles from './Navbar.module.css'
// // import './App.css'
// import "tailwindcss";

// function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <a href='/' className={styles.title}>Portfolio</a>
//       <div className={styles.menu}>
//         <ul className={styles.menuItems}>
//           <li className={styles.li}><a href='#about'>About</a></li>
//           <li className={styles.li}><a href='#Projects'>Projects</a></li>
//           <li className={styles.li}><a href='#Experience'>Languages</a></li>
//           <li className={styles.li}><a href='#Contact'>Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f14]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-white font-bold text-3xl tracking-wide">
          PORTFOLIO
        </span>

        <ul className="flex gap-4 md:gap-10 text-xl text-gray-300">
          {["Home", "About", "Experience", "Projects", "Contact"].map(item => (
            <li
              key={item}
              className="hover:text-white transition cursor-pointer"
            >
              {item}
              <a href={`#${item}`} className="sr-only"/>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
