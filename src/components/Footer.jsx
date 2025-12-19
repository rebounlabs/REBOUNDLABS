import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import DoodleBackground from './DoodleBackground';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-bg-base)',
            color: 'var(--color-text-secondary)',
            padding: '5rem 0 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid var(--color-glass-border)'
        }}>
            <DoodleBackground type="wave" color="var(--color-primary)" opacity={0.1} style={{ bottom: '0', width: '100%', height: '300px', transform: 'scaleY(0.5)', transformOrigin: 'bottom' }} />
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)', opacity: 0.5, boxShadow: '0 0 20px var(--color-primary)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>
                            Rebound<span className="text-gradient">Labs</span>
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Transforming businesses through premium digital experiences and scalable technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* Social Media Links */}
                            <a href="https://x.com/rebound_labs?s=21" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/in/rebound-labs-725248395/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/rebound.labs?igsh=MWJmdzg5MzE3ejFvaQ==" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#about" style={{ transition: 'color 0.2s' }} className="hover:text-primary">About Us</a></li>
                            <li><a href="#services" style={{ transition: 'color 0.2s' }} className="hover:text-primary">Services</a></li>
                            <li><a href="#careers" style={{ transition: 'color 0.2s' }} className="hover:text-primary">Careers</a></li>
                            <li><a href="#blog" style={{ transition: 'color 0.2s' }} className="hover:text-primary">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#" style={{ transition: 'color 0.2s' }} className="hover:text-primary">Web Development</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }} className="hover:text-primary">UI/UX Design</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }} className="hover:text-primary">Mobile Apps</a></li>
                            <li><a href="#" style={{ transition: 'color 0.2s' }} className="hover:text-primary">SEO Strategies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>Get in Touch</h4>
                        <p style={{ marginBottom: '1rem' }}>Ready to start your project?</p>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                            Contact Us <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                        </a>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} ReboundLabs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
