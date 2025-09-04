import React from 'react'
import styles from './Navbar.module.css'
// import './App.css'
import "tailwindcss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.li}><a href='#about'>About</a></li>
          <li className={styles.li}><a href='#Projects'>Projects</a></li>
          <li className={styles.li}><a href='#Experience'>Languages</a></li>
          <li className={styles.li}><a href='#Contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
