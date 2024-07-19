import React from 'react';
import { Header, SignupForm } from '../components';

const Signup: React.FC = () => {
    return (
        <div>
            <Header />
            <main style={{ padding: '20px' }}>
                <SignupForm />
            </main>
        </div>
    );
};

export default Signup;
