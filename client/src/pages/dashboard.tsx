import React from 'react';
import { DashboardSidebar, Header } from '../components';

const Dashboard: React.FC = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <DashboardSidebar />
                <main style={{ padding: '20px', flex: 1 }}>
                    <h1>Dashboard</h1>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
