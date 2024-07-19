import React from 'react';
import { Header, LoginForm } from '../components';

const Login: React.FC = () => {
    return (
        <div>
            <Header />
            <main style={{ padding: '20px' }}>
                <LoginForm />
            </main>
        </div>
    );
};

export default Login;
