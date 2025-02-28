import React from 'react'
import myImage from '../assets/pic1.png';
import styles from './Hero.module.css' ;

const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1 className={styles.title}>Hi, I am Parikshit </h1>
            <p className={styles.description}>I am a 2nd year BTech Student having experience in react, nodeJS and flutter. Reach out for more info.</p>
            <a className={styles.button} href=''>Contact me</a>
        </div>
        <img className={styles.Image} src={myImage}/>
    </section>
  )
}

export default Hero
