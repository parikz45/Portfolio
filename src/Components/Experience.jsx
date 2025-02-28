import React from 'react'
import styles from './Experience.module.css';
import image1 from '../assets/pic3.png';
import image2 from '../assets/pic4.png';
import image3 from '../assets/pic5.png';
import image4 from '../assets/pic6.png';
import image5 from '../assets/pic7.png';
import image6 from '../assets/pic8.png';
import image7 from '../assets/pic9.png';

const Experience = () => {
    return (
        <div id='Experience' className={styles.container}>
            <h1 className={styles.title}>LANGUAGES/FRAMEWORKS</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={image1} />
                    <p>HTML</p>
                </div>
                <div className={styles.item}>
                    <img src={image2} />
                    <p>CSS</p>
                </div>
                <div className={styles.item}>
                    <img src={image3} />
                    <p>REACT</p>
                </div>
                <div className={styles.item}>
                    <img src={image4} />
                    <p className={styles.Img}>JAVASCRIPT</p>
                </div>
                <div className={styles.item}>
                    <img src={image5} />
                    <p className={styles.Img}>Node JS</p>
                </div>
                <div className={styles.item}>
                    <img src={image7} />
                    <p className={styles.Img}>Dart</p>
                </div>
                <div className={styles.item}>
                    <img src={image6} />
                    <p className={styles.Img}>Flutter</p>
                </div>
            </div>

        </div>
    )
}

export default Experience
