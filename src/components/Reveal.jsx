import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "100%", delay = 0.25, className = "", fullHeight = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden", height: fullHeight ? "100%" : "auto" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
                style={{ height: fullHeight ? "100%" : "auto" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
