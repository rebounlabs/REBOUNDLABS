import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Then user preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark'; // Default
    });

    useEffect(() => {
        // Update data-theme attribute on root element
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);

        // Persist to localStorage
        localStorage.setItem('theme', theme);

        // Dispatch visual update event if needed (optional)
        window.dispatchEvent(new Event('theme-change'));

        // Debug log
        console.log('Theme changed to:', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
