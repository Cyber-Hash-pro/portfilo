import { useState, useEffect, useRef } from "react";

/**
 * MouseFollower - Optimized cursor follow effect
 * Lightweight, performant version using CSS transforms
 */
export default function MouseFollower() {
    const followerRef = useRef(null);
    const dotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    // Use refs for position to avoid re-renders
    const mousePos = useRef({ x: 0, y: 0 });
    const followerPos = useRef({ x: 0, y: 0 });
    const animationId = useRef(null);

    useEffect(() => {
        // Check for touch device
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
            
            // Update dot position immediately (no lag)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Smooth animation loop for follower
        const animate = () => {
            followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
            followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate(${followerPos.current.x - 15}px, ${followerPos.current.y - 15}px)`;
            }

            animationId.current = requestAnimationFrame(animate);
        };

        // Hover detection with event delegation
        const handleMouseOver = (e) => {
            const target = e.target;
            const isHoverTarget =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button");
            setIsHovering(isHoverTarget);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseover", handleMouseOver, { passive: true });
        
        animationId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseover", handleMouseOver);
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, [isVisible]);

    // Don't render on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* Main follower circle */}
            <div
                ref={followerRef}
                className={`absolute w-[30px] h-[30px] rounded-full border will-change-transform transition-[width,height,border-color,background-color] duration-200 ${
                    isVisible ? "opacity-100" : "opacity-0"
                } ${
                    isHovering 
                        ? "w-[50px] h-[50px] border-teal bg-teal/10" 
                        : "border-teal/50 bg-transparent"
                }`}
                style={{
                    boxShadow: isHovering
                        ? "0 0 20px rgba(20, 184, 166, 0.3)"
                        : "0 0 10px rgba(20, 184, 166, 0.15)",
                }}
            />

            {/* Center dot - follows immediately */}
            <div
                ref={dotRef}
                className={`absolute w-[6px] h-[6px] rounded-full bg-teal will-change-transform ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    boxShadow: "0 0 8px rgba(20, 184, 166, 0.8)",
                }}
            />
        </div>
    );
}
