import React from 'react'
import myImage from '../assets/pic10.png'
import styles from './Projects.module.css';
import Img from '../assets/movie.webp';
import icon from '../assets/icon.png';
import todo from '../assets/to-do.png';

const Projects = () => {
  return (
    <section id='Projects' className={styles.container}>
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.cards}>
        <div className={styles.content}>
          <img src={Img} />
          <div className={styles.div1}>
            <h2>IMDB Clone</h2>
            <p>This is an IMDB clone website made using react with the help of tmdb-api</p>
            <a className={styles.button} href='https://clinquant-daifuku-efd533.netlify.app/'>Link</a>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.todo} src={todo} />
          <h2>To-do List</h2>
          <p>A website that can be used to keep track of your day-to-day activities</p>
          <a className={styles.button} href='https://todo-list-dailytracker.netlify.app/'>Link</a>
        </div>
        <div className={styles.content}>
          <img className={styles.images} src={icon} />
          <h2>News App</h2>
          <p>An app that helps you to get the latest news updates</p>
          <a className={styles.button} href='https://drive.google.com/file/d/1LK3MBPO4qFNPRvoT7NxuXBkUCT0Yijfn/view?usp=drive_link'>Link</a>
        </div>
        <div className={styles.content}>
          <img className={styles.image} src='https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024' />
          <div className={styles.div2}>
            <h2>Weather App</h2>
            <p>An app that helps you to get the daily weather details</p>
            <a className={styles.button} href='https://drive.google.com/file/d/1VZmUYJZUYWBs6g5gYXeDsapv5NSH3Rpa/view?usp=drive_link'>Link</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
