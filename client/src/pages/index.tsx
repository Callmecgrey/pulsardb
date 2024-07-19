import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Close dropdowns when the nav is toggled
    setIsProductDropdownOpen(false);
    setIsFeaturesDropdownOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsFeaturesDropdownOpen(false);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
    setIsProductDropdownOpen(false);
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
                <li><Link href="/plrverify"><i className="fas fa-user-shield"></i> Plrverify</Link></li>
                <li><Link href="/pulsardb"><i className="fas fa-database"></i> PulsarDB</Link></li>
                <li><Link href="/fingerprint"><i className="fas fa-fingerprint"></i> Fingerprint</Link></li>
                <li><Link href="/security"><i className="fas fa-shield-alt"></i> Security</Link></li>
              </ul>
            </li>
            <li className={`${styles.dropdown} ${isFeaturesDropdownOpen ? styles.dropdownOpen : ''}`} onClick={toggleFeaturesDropdown}>
              Features <i className={`fas ${isFeaturesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              <ul className={`${styles.dropdownMenu} ${isFeaturesDropdownOpen ? styles.dropdownMenuOpen : ''} ${styles.featuresDropdown}`}>
                <li>
                  <Link href="/features/space-bucket-databases">
                    <i className="fas fa-database"></i>
                    <div>
                      <div>Space Bucket Databases</div>
                      <span>Scalable and efficient data storage.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/features/anti-bots-protection">
                    <i className="fas fa-robot"></i>
                    <div>
                      <div>AntiBots Protection</div>
                      <span>Protect your applications from bots.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/features/verify-data-authenticity">
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <div>Verify Data Authenticity</div>
                      <span>Ensure data integrity and authenticity.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li className={`${styles.mobileOnly} ${isNavOpen ? styles.navLinksOpen : ''}`}>
              <Link href="/login"><button className={styles.getStartedButton}>Login</button></Link>
            </li>
          </ul>
          <Link href="/login"><button className={`${styles.getStartedButton} ${styles.desktopOnly}`}>Login</button></Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>
          Transforming Ideas into Exceptional Content with <span className={styles.highlight}>AI Writing</span>
        </h1>
        <p>Unlock Full-Spectrum AI-Powered Solutions for Strategy, Ideation, and Post-Writing Excellence.</p>
        <div className={styles.buttons}>
          <Link href="/get-started"><button className={styles.ctaButton}>Get Started</button></Link>
          <Link href="/docs"><button className={styles.learnMoreButton}>Docs</button></Link>
        </div>
      </main>
    </>
  );
};

export default Home;
