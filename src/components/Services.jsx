import React from 'react';
import { createPortal } from 'react-dom';
import { Code, Palette, Smartphone, Bot, Shield, Cloud, ArrowRight } from 'lucide-react';
import DoodleBackground from './DoodleBackground';
import Reveal from './Reveal';
import '../styles/Services.css';

const ServiceModal = ({ service, onClose }) => {
    // Basic pop-in animation effect
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'; // Prevent scroll
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Create a portal to attach the modal to document.body
    return createPortal(
        <div className="service-modal-overlay animate-fade-in" onClick={onClose}>
            <div
                className="service-modal-card glass-panel animate-pop-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close-btn" onClick={onClose}>×</button>
                <div className="spotlight-overlay"></div>
                <div className="service-icon-wrapper large">
                    {service.icon}
                </div>
                <h4 className="service-title large">{service.title}</h4>
                <p className="service-desc">{service.description}</p>

                <div className="service-details">
                    <p>Our {service.title} services are designed to push boundaries. We leverage cutting-edge technology to ensure your digital presence is not just visible, but dominant. From rapid prototyping to full-scale deployment, we handle every aspect with precision.</p>
                    <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Strategic Planning</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Agile Development</li>
                        <li>✓ Continuous Optimization</li>
                    </ul>
                </div>

                <div className="service-link" onClick={onClose} style={{ cursor: 'pointer', opacity: 1, transform: 'none', marginTop: '2rem' }}>
                    Back to Services <ArrowRight size={16} className="arrow-icon rotate-icon" style={{ transform: 'rotate(180deg)' }} />
                </div>
            </div>
        </div>,
        document.body
    );
};

const Services = () => {
    const services = [
        {
            icon: <Code size={32} />,
            title: 'Web Development',
            description: 'Custom, high-performance websites built with modern frameworks like React and Next.js.'
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Design',
            description: 'User-centered design that creates intuitive and engaging digital experiences.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Mobile Solutions',
            description: 'Responsive designs that work seamlessly across all devices and screen sizes.'
        },
        {
            icon: <Bot size={32} />,
            title: 'AI Integration',
            description: 'Leverage artificial intelligence to automate processes, enhance user experiences, and drive smarter business decisions using modern AI tools and APIs.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Web Application Security',
            description: 'Protect your applications and data with robust security practices, vulnerability assessments, and secure architecture designed to prevent cyber threats.'
        },
        {
            icon: <Cloud size={32} />,
            title: 'Cloud & DevOps Services',
            description: 'Scalable cloud infrastructure and DevOps solutions to ensure high availability, faster deployments, and seamless application performance.'
        }
    ];

    const [expandedIndex, setExpandedIndex] = React.useState(null);

    return (
        <section id="services" className="section-padding services-section">
            <DoodleBackground type="cross" color="var(--color-primary)" opacity={0.05} style={{ top: '10%', left: '-5%' }} />
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Capabilities</h2>
                    <h3 className="section-main-heading">Solutions for every <br /> <span className="text-gradient">Business Need.</span></h3>
                    <p className="section-subtitle">We deliver end-to-end digital services tailored to scale your operations.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1} fullHeight>
                            <div
                                className="service-card glass-panel"
                                onClick={() => setExpandedIndex(index)}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--x', `${x}px`);
                                    e.currentTarget.style.setProperty('--y', `${y}px`);
                                }}
                            >
                                <div className="spotlight-overlay"></div>
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-desc">{service.description}</p>
                                <div className="service-link">
                                    Learn more <ArrowRight size={16} className="arrow-icon" />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {expandedIndex !== null && (
                <ServiceModal
                    service={services[expandedIndex]}
                    onClose={() => setExpandedIndex(null)}
                />
            )}
        </section>
    );
};

export default Services;
