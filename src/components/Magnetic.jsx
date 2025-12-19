import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Magnetic = ({ children, padding = 100, disabled = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const [props, set] = useSpring(() => ({ x: 0, y: 0, scale: 1 }));

    if (disabled) return children;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = clientX - centerX;
        const y = clientY - centerY;

        set({ x, y, scale: 1.1 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        set({ x: 0, y: 0, scale: 1 });
    };

    return (
        <animated.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'inline-block',
                transform: props.x.to((x) => `translate3d(${x}px, ${props.y.get()}px, 0)`),
                ...props // Spread other animated props if needed
            }}
        >
            {React.cloneElement(children, {
                style: {
                    ...children.props.style,
                    // transition: 'transform 0.1s ease' // Optional: if child has its own transitions
                }
            })}
        </animated.div>
    );
};

export default Magnetic;
