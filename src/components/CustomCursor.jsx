import React, { useEffect, useState } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over a clickable element
            const target = e.target;
            const isClickable = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');
            setLinkHovered(!!isClickable);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const cursorClasses = `custom-cursor 
        ${hidden ? 'hidden' : ''} 
        ${clicked ? 'clicked' : ''} 
        ${linkHovered ? 'hovered' : ''}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default CustomCursor;
