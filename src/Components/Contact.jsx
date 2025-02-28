import React from 'react'
import styles from './Contact.module.css';
import img1 from '../assets/pic11.png';
import img2 from '../assets/pic12.png';
import img3 from '../assets/pic13.png';
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

const Contact = () => {
    return (
        <section id='Contact' className={styles.container}>
            <div className={styles.contact}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.description}>Feel free to reach out</p>
            </div>
            <div className={styles.contents}>
                <div className={styles.content}>
                    <img src={img1} />
                    <p className={styles.p}>parikshit.r2005@gmail.com</p>
                </div>
                <div className={styles.content}>
                    <img src={img2} />
                    <p className={styles.p}>https://github.com/parikz45</p>
                </div>
                <div className={styles.content}>
                    <img src={img3} />
                    <p className={styles.p}>https://www.linkedin.com/in/parikshit-r-rs184524/</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
