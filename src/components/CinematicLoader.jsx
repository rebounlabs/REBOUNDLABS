import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/CinematicLoader.css';

const CinematicLoader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Counter animation
        const duration = 2000; // 2 seconds total load time
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsExiting(true), 200); // Small pause at 100%
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {!isExiting && (
                <motion.div
                    className="cinematic-loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Custom bezier for "shutter" feel
                    }}
                >
                    <div className="loader-content">
                        <div className="counter-container">
                            <motion.span
                                className="counter-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {Math.round(count)}%
                            </motion.span>
                        </div>

                        <div className="loader-text-wrapper">
                            <motion.h1
                                className="loader-brand"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Rebound<span className="accent">Labs</span>
                            </motion.h1>
                            <motion.div
                                className="loading-line"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CinematicLoader;
