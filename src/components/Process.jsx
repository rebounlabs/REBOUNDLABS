import React from 'react';
import Reveal from './Reveal';
import '../styles/Process.css';

const Process = () => {
    const steps = [
        { number: '01', title: 'Discover', desc: 'We start by understanding your vision, goals, and audience.' },
        { number: '02', title: 'Design', desc: 'Crafting user-centric interfaces that align with your brand.' },
        { number: '03', title: 'Develop', desc: 'Building robust, scalable solutions using modern tech stacks.' },
    ];

    return (
        <section id="process" className="section-padding process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Process</h2>
                    <h3 className="section-main-heading">Simple Steps to Success</h3>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <div
                                className="process-step spotlight-card"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--x', `${x}px`);
                                    e.currentTarget.style.setProperty('--y', `${y}px`);
                                }}
                            >
                                <div className="spotlight-overlay"></div>
                                <div className="step-number">{step.number}</div>
                                <h4 className="step-title">{step.title}</h4>
                                <div className="step-line"></div>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
