import React from 'react';
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section-padding why-us-section">
            <div className="container">
                <div className="why-us-grid">
                    <div className="why-us-content">
                        <h2 className="section-title">Why Choose Us</h2>
                        <h3 className="section-main-heading">Built for Performance. <br /> Designed for Review.</h3>
                        <p className="why-us-text">
                            We don't just build websites; we build assets. Our focus on clean code
                            and scalable architecture ensures your digital presence grows with your business.
                        </p>

                        <ul className="benefits-list">
                            <li>
                                <Reveal delay={0.1}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Zap className="benefit-icon" />
                                        <div>
                                            <h4>Lightning Fast</h4>
                                            <p>Optimized for Core Web Vitals and speed.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                            <li>
                                <Reveal delay={0.2}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <TrendingUp className="benefit-icon" />
                                        <div>
                                            <h4>Scalable Growth</h4>
                                            <p>Architecture that handles traffic spikes.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                            <li>
                                <Reveal delay={0.3}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <ShieldCheck className="benefit-icon" />
                                        <div>
                                            <h4>Secure by Design</h4>
                                            <p>Best practices for data protection.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                        </ul>
                    </div>

                    <div className="why-us-visual">
                        {/* Visual representation of code/performance */}
                        <div className="code-card">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="code-content">
                                <div className="code-line width-80"></div>
                                <div className="code-line width-60"></div>
                                <div className="code-line width-90"></div>
                                <div className="code-line width-50"></div>
                            </div>
                            <div className="performance-badge">
                                <span>99</span>
                                <small>Score</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
