import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container about-container">
                <div className="about-image">
                    {/* Abstract blob behind image */}
                    <div className="about-blob"></div>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working" className="about-img-visual" />
                    <div className="experience-badge glass-panel">
                        <span className="years">Premium</span>
                        <span className="label">Quality</span>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">About ReboundLabs</h2>
                    <h3 className="about-heading">
                        Innovators building the <br /> <span className="text-gradient">Future of Web.</span>
                    </h3>
                    <p className="about-text">
                        At ReboundLabs, we believe in the power of code to transform businesses.
                        Established in 2024, we treat every project as a partnership, ensuring that our technical
                        solutions align perfectly with your strategic goals.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number text-mode">TRUST</span>
                            <span className="stat-label">Built</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number text-mode">QUALITY</span>
                            <span className="stat-label">Assured</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Satisfaction</span>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-outline" style={{ marginTop: '2rem' }}>More About Us</a>
                </div>
            </div>
        </section>
    );
};

export default About;
