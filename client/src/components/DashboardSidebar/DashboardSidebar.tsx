import React from 'react';
import styles from './DashboardSidebar.module.css';

const DashboardSidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Dashboard Sidebar</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;
