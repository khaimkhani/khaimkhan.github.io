import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import styles from '../styles/Home.module.scss';
import MainBodyContainer from '../components/mainBody/mainBody.js';

import { Parallax } from 'react-scroll-parallax';
import { useEffect } from 'react';
import c1 from '../public/static/images/d1.png';
import c2 from '../public/static/images/d2.png';
import c3 from '../public/static/images/d3.png';


export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>Home | Taimor Khan</title>
        <meta name="description" content="Taimor Khan's Blog Showcasing his skills and abilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MainBodyContainer>
        <Parallax y={[-110, 200]} className={styles.cubeContainer1}>
          <Image src={c1} alt='cube' width={300} height={200} id='c1' />
        </Parallax>
        <Parallax y={[-100, 250]} className={styles.cubeContainer2}>
          <Image src={c2} alt='cube' width={300} height={200} id='c2' />
        </Parallax>
        <Parallax y={[-90, 305]} className={styles.cubeContainer3}>
          <Image src={c3} alt='cube' width={300} height={200} id='c3' />
        </Parallax>
        <div className={styles.homeContainer}>
          <div className={styles.firstInfo}>
            <h1>
              SOFTWARE DEVELOPER<strong className={styles.blink}>_</strong>
            </h1>
            <p>
            {'//'} I am a Full Stack Developer, with a passion for front-end development and design. 
              Currently based in Toronto, attending the University of Toronto. My interests include:
              <ul className={styles.interest}>
                  <li>
                    Optimal Algorithms
                  </li>
                  <li>
                    Connectionist Systems / Machine Learning
                  </li>
                  <li>
                    Computer Vision
                  </li>
                  <li>
                    UI/UX Design
                  </li>
              </ul>
            </p>
          </div>
          <div className={styles.firstInfo}>
            <h1>
              WEB + UI/UX DESIGN<strong className={styles.blink}>_</strong>
            </h1>
            <p>
            {'//'} Deep understanding of web design and user interactions with UI/UX. Languages/Tech I&apos;m proficient in:
            
            <ul className={styles.ui}>
              <li>
                Javascript
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS/SASS/SCSS
              </li>
              <li>
                Node.js/Express.js
              </li>
              <li>
                Java/Kotlin
              </li>
              <li>
                Python
              </li>
              <li>
                React + Redux
              </li>
              <li>
                Git
              </li>
            </ul>
            </p>
          </div>  
          <div className={styles.firstInfo}>
            <h1>
              OPTIMAL ALGORITHMS<strong className={styles.blink}>_</strong>
            </h1>
            <p>
            {'//'} Excellent understanding of P/NP problems and solving real world problems using:
              <ul className={styles.optimize}>
                <li>  
                  Dynamic Programming
                </li>
                <li>
                  Recursion
                </li>
                <li>
                  Maximum flow networks
                </li>
                <li>
                  Linear Programming 
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.firstInfo}>
            <h1>
              CONNECTIONIST NETWORKS {'//'} ML<strong className={styles.blink}>_</strong>
            </h1>
            <p>
            {'//'} Experience training a variety of ML models using Supervised / Unsupervised / Reinforcement learning:
              <ul className={styles.ml}>
                <li>
                  ANN, RNN, CNN, etc.
                </li>
                <li>
                  k-means Clustering
                </li>
                <li>
                  Genetic Algorithms
                </li>
                <li>
                  Bayesian Learning
                </li>
                <li>
                  Decision Trees
                </li>
              </ul>  
            </p> 
          </div>
          <div className={styles.firstInfo}>
            <h1>
              COMPUTER VISION<strong className={styles.blink}>_</strong>
            </h1>
            <p>
              {'//'} Experience with several image manipulation algorithms:
              <ul className={styles.vision}>
                <li>
                  Object Recognition
                </li>
                <li>
                  Motion Detection
                </li>
                <li>
                  Convolutional Neural Networks
                </li>
                <li>
                  Feature Matching
                </li>
              </ul>
            </p>
          </div>
          
        </div>
        
      </MainBodyContainer>

      <Footer />
    </>
  )
}
