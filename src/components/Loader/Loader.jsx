import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const subtitleRef = useRef(null);
    const barOuterRef = useRef(null);
    const barInnerRef = useRef(null);
    const percentRef = useRef(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate logo, subtitle, bar in
        tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
            .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.5)
            .to(barOuterRef.current, { opacity: 1, duration: 0.5 }, 0.7)
            .to(percentRef.current, { opacity: 1, duration: 0.4 }, 0.9);

        // Progress bar animation
        let prog = 0;
        const interval = setInterval(() => {
            prog += Math.random() * 4 + 1;
            if (prog >= 100) {
                prog = 100;
                clearInterval(interval);
                setPercent(100);
                if (barInnerRef.current) barInnerRef.current.style.width = '100%';

                // Small pause then exit
                setTimeout(() => {
                    gsap.to(loaderRef.current, {
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.inOut',
                        onComplete: () => {
                            if (loaderRef.current) loaderRef.current.style.display = 'none';
                            onComplete();
                        }
                    });
                }, 400);
            } else {
                setPercent(Math.floor(prog));
                if (barInnerRef.current) barInnerRef.current.style.width = prog + '%';
            }
        }, 40);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="loader-wrapper" ref={loaderRef}>
            <div className="loader-logo" ref={logoRef} style={{ transform: 'translateY(20px)' }}>
                Latte <span style={{ color: 'var(--gold-accent)' }}>Global</span>
            </div>
            <div className="loader-subtitle" ref={subtitleRef} style={{ transform: 'translateY(10px)' }}>
                Brewing perfection since 2018
            </div>
            <div className="loader-bar-outer" ref={barOuterRef}>
                <div className="loader-bar-inner" ref={barInnerRef}></div>
            </div>
            <div className="loader-percent" ref={percentRef}>{percent}%</div>
        </div>
    );
};

export default Loader;
