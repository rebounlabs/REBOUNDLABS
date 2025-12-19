import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    Rebound<span className="logo-gradient">Labs</span>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Magnetic>
                                    <a href={link.href}>{link.name}</a>
                                </Magnetic>
                            </li>
                        ))}
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>

                <div className="mobile-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ThemeToggle className="mobile-theme-toggle" />
                    <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <nav className="mobile-nav">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
