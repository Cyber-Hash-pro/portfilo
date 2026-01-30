import { useState, useEffect, useRef } from "react";

/**
 * AnimatedCounter - Count up animation when in view
 * Impressive for showing stats/metrics
 */
export default function AnimatedCounter({ 
    end, 
    duration = 2000, 
    suffix = "", 
    prefix = "",
    className = "" 
}) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = performance.now();
        const endValue = parseFloat(end);

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = easeOutQuart * endValue;
            
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    const formatNumber = (num) => {
        if (suffix === "%") {
            return Math.round(num);
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return Math.round(num);
    };

    return (
        <span ref={ref} className={className}>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}
