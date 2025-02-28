import React from 'react'
import styles from './About.module.css';
import myImage from '../assets/pic2.png';

const About = () => {
    return (
        <section id='about' className={styles.Container}>
            <h1 className={styles.title}>About</h1>
            <div className={styles.container}>
                <img className={styles.Image} src={myImage} />
                <div className={styles.content}>
                    <div className={styles.div}>
                        <h1 className={styles.h1}>Frontend Developer</h1>
                        <p className={styles.p}>I have built several responsive and optimized projects</p>
                    </div>
                    <div className={styles.div}>
                        <h1 className={styles.h1}>Backend Developer</h1>
                        <p className={styles.p}>I have experience building fast and optimized backend systems</p>
                    </div>
                    <div className={styles.div}>
                        <h1 className={styles.h1}>App Developer</h1>
                        <p className={styles.p}>I have built several responsive and creative apps that are helpful in our day-to-day activities</p>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default About
