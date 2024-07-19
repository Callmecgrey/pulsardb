import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsFeaturesDropdownOpen(false); // Close features dropdown when products is opened
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
    setIsProductDropdownOpen(false); // Close products dropdown when features is opened
  };

  return (
    <>
      <Head>
        <title>PulsarHQ - all in 1 building tools for faster deployment</title>
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>PulsarHQ</div>
          <div className={styles.hamburger} onClick={toggleNav}>
            <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={`${styles.navLinks} ${isNavOpen ? styles.navLinksOpen : ''}`}>
            <li className={`${styles.dropdown} ${isProductDropdownOpen ? styles.dropdownOpen : ''}`} onClick={toggleProductDropdown}>
              Products <i className={`fas ${isProductDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              <ul className={`${styles.dropdownMenu} ${isProductDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
                <li><i className="fas fa-check"></i> Plrverify</li>
                <li><i className="fas fa-database"></i> PulsarDB</li>
                <li><i className="fas fa-fingerprint"></i> Fingerprint</li>
                <li><i className="fas fa-shield-alt"></i> Security</li>
              </ul>
            </li>
            <li className={`${styles.dropdown} ${isFeaturesDropdownOpen ? styles.dropdownOpen : ''}`} onClick={toggleFeaturesDropdown}>
              Features <i className={`fas ${isFeaturesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              <ul className={`${styles.dropdownMenu} ${isFeaturesDropdownOpen ? styles.dropdownMenuOpen : ''} ${styles.featuresDropdown}`}>
                <li>
                  <i className="fas fa-database"></i>
                  <div>
                    <div>Space Bucket Databases</div>
                    <span>Scalable and efficient data storage.</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-robot"></i>
                  <div>
                    <div>AntiBots Protection</div>
                    <span>Protect your applications from bots.</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <div>Verify Data Authenticity</div>
                    <span>Ensure data integrity and authenticity.</span>
                  </div>
                </li>
              </ul>
            </li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Docs</li>
            <button className={styles.getStartedButton}>Login</button>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>
          Transforming Ideas into Exceptional Content with <span className={styles.highlight}>AI Writing</span>
        </h1>
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
