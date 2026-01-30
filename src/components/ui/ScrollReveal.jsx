import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal - Animate elements when they come into view
 * Creates a professional scroll experience
 */
export default function ScrollReveal({ 
    children, 
    animation = "fadeUp",
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = ""
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const animations = {
        fadeUp: {
            hidden: { opacity: 0, transform: "translateY(40px)" },
            visible: { opacity: 1, transform: "translateY(0)" }
        },
        fadeDown: {
            hidden: { opacity: 0, transform: "translateY(-40px)" },
            visible: { opacity: 1, transform: "translateY(0)" }
        },
        fadeLeft: {
            hidden: { opacity: 0, transform: "translateX(-40px)" },
            visible: { opacity: 1, transform: "translateX(0)" }
        },
        fadeRight: {
            hidden: { opacity: 0, transform: "translateX(40px)" },
            visible: { opacity: 1, transform: "translateX(0)" }
        },
        scale: {
            hidden: { opacity: 0, transform: "scale(0.8)" },
            visible: { opacity: 1, transform: "scale(1)" }
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0)" }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const currentAnimation = animations[animation] || animations.fadeUp;
    const styles = isVisible ? currentAnimation.visible : currentAnimation.hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...styles,
                transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
