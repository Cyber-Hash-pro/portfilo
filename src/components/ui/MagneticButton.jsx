import { useEffect, useRef } from "react";

/**
 * MagneticButton - Button that attracts to cursor on hover
 * Creates a premium interactive feel
 */
export default function MagneticButton({ 
    children, 
    className = "", 
    strength = 30,
    ...props 
}) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distX = e.clientX - centerX;
            const distY = e.clientY - centerY;
            
            const distance = Math.sqrt(distX * distX + distY * distY);
            const maxDistance = Math.max(rect.width, rect.height);
            
            if (distance < maxDistance) {
                const factor = (maxDistance - distance) / maxDistance;
                const moveX = (distX / maxDistance) * strength * factor;
                const moveY = (distY / maxDistance) * strength * factor;
                
                button.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        const handleMouseLeave = () => {
            button.style.transform = "translate(0, 0)";
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={buttonRef}
            className={`transition-transform duration-200 ease-out ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
