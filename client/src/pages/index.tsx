import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>PulsarHQ - all in 1 building tools for faster deployment </title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-dyWchiS5eFE1iLvR4VR5VZp8fSA4eM9gqytlP8kHtD/tj0/+GF8F09Xr8vF1WZXV" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>PulsarHQ</div>
          <ul className={styles.navLinks}>
            <li className={styles.dropdown}>
              Products
              <ul className={styles.dropdownMenu}>
                <li>Plrverify</li>
                <li>PulsarDB</li>
                <li>Fingerprint</li>
                <li>Security</li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              Features
              <ul className={styles.dropdownMenu}>
                <li>Space Bucket Databases</li>
                <li>AntiBots Protection</li>
                <li>Verify Data Authenticity</li>
              </ul>
            </li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Docs</li>
          </ul>
          <button className={styles.getStartedButton}>Login</button>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Transforming Ideas into Exceptional Content with <span className={styles.highlight}>AI Writing</span></h1>
        <p>Unlock Full-Spectrum AI-Powered Solutions for Strategy, Ideation, and Post-Writing Excellence.</p>
        <div className={styles.buttons}>
          <button className={styles.ctaButton}>Get Started</button>
          <button className={styles.learnMoreButton}>Docs</button>
        </div>
      </main>
    </>
  );
};

export default Home;