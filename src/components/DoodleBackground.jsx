import React from 'react';
import { doodles } from '../utils/doodlePatterns';

const DoodleBackground = ({ type = 'blob', color = 'var(--color-primary-light)', opacity = 0.1, style = {} }) => {
    const isDots = type === 'dots';

    return (
        <div style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', animation: 'float 6s ease-in-out infinite', ...style }}>
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {isDots ? (
                    doodles.dots.map((dot, i) => (
                        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={color} opacity={opacity} />
                    ))
                ) : (
                    type === 'blob' ? (
                        <path transform="translate(100 100)" d={doodles.blob} fill={color} opacity={opacity} />
                    ) : (
                        <path d={doodles[type] || doodles.squiggly} fill="none" stroke={color} strokeWidth="3" opacity={opacity} strokeLinecap="round" />
                    )

                )}
            </svg>
        </div>
    );
};

export default DoodleBackground;
