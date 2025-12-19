import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import DoodleBackground from './DoodleBackground';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';
import '../styles/Hero.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 35}px,${y / 35}px,0)`;
const transCard = (x, y) => `perspective(1000px) rotateX(${y / 40}deg) rotateY(${x / 40}deg) scale(1.02)`;

const Hero = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    return (
        <section className="hero" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{ position: 'absolute', inset: 0, transform: props.xy.to(trans2) }}>
                <DoodleBackground
                    type="grid"
                    color="rgba(255,255,255,0.05)"
                    opacity={1}
                    style={{ width: '100%', height: '100%' }}
                />
            </animated.div>

            {/* Squiggly Line - Top Right */}
            <animated.div style={{ position: 'absolute', top: '15%', right: '10%', transform: props.xy.to(trans3), zIndex: 0 }}>
                <DoodleBackground
                    type="squiggly"
                    color="var(--color-secondary)"
                    opacity={0.3}
                    style={{ width: '150px', height: '150px', transform: 'rotate(45deg)' }}
                />
            </animated.div>

            {/* Dots - Bottom Left */}
            <animated.div style={{ position: 'absolute', bottom: '20%', left: '5%', transform: props.xy.to(trans2), zIndex: 0 }}>
                <DoodleBackground
                    type="dots"
                    color="var(--color-primary)"
                    opacity={0.2}
                    style={{ width: '200px', height: '200px' }}
                />
            </animated.div>

            {/* Crosses - Floating */}
            <animated.div style={{ position: 'absolute', top: '40%', right: '40%', transform: props.xy.to(trans4), zIndex: 0 }}>
                <DoodleBackground
                    type="cross"
                    color="var(--color-accent)"
                    opacity={0.15}
                    style={{ width: '100px', height: '100px' }}
                />
            </animated.div>

            <animated.div style={{ position: 'absolute', inset: 0, transform: props.xy.to(trans1) }}>
                <DoodleBackground
                    type="blob"
                    color="var(--color-primary)"
                    opacity={0.2}
                    style={{
                        top: '-10%',
                        right: '-10%',
                        filter: 'blur(80px)'
                    }}
                />
            </animated.div>

            <div className="container hero-container">
                <animated.div
                    className="hero-content animate-fade-in"
                    style={{ transform: props.xy.to(trans3) }}
                >
                    <div className="hero-badge-container">
                        <span className="hero-badge">Rebound Labs</span>
                        <span className="hero-badge-line"></span>
                        <span className="hero-badge-text">Partner with the best</span>
                    </div>
                    <div className="hero-title-wrapper">
                        <h1 className="hero-title">
                            <TextReveal text="Crafting Digital" />
                            <span className="text-gradient">Masterpieces.</span>
                        </h1>
                    </div>
                    <p className="hero-description">
                        We transform ambitious ideas into premium digital reality.
                        Exceptional web experiences designed for growth and built for scale.
                    </p>
                    <div className="hero-actions">
                        <Magnetic>
                            <a href="#contact" className="btn btn-primary">
                                Start Your Project <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#services" className="btn btn-outline" style={{ border: 'none', color: 'var(--color-text-secondary)' }}>
                                Explore Services
                            </a>
                        </Magnetic>
                    </div>
                </animated.div>
                <div className="hero-visual">
                    <animated.div
                        className="hero-card glass-panel float-animation"
                        style={{ transform: props.xy.to(transCard) }}
                    >
                        <div className="card-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="card-content">
                            <div className="skeleton-line full"></div>
                            <div className="skeleton-line half"></div>
                            <div className="skeleton-box"></div>
                        </div>
                    </animated.div>
                    <animated.div className="abstract-shape shape-1" style={{ transform: props.xy.to(trans4) }}></animated.div>
                    <animated.div className="abstract-shape shape-2" style={{ transform: props.xy.to(trans3) }}></animated.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
