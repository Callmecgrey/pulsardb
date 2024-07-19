import React, { useState } from 'react';
import styles from './SignupForm.module.css';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
