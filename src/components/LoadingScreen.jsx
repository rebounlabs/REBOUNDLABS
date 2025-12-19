import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(false);
            if (onComplete) onComplete();
        }, 1500); // Slightly longer than the CSS animation

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!shouldRender) return null;

    return (
        <div className="loading-screen">
            <div className="loader-content">
                <div className="loader-logo">
                    Rebound<span className="logo-gradient">Labs</span>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
