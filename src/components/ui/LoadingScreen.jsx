import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import { siteConfig } from "../../data/content";

/**
 * LoadingScreen - Animated loading/splash screen
 * Premium feel with logo animation and progress
 */
export default function LoadingScreen({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Faster at start, slower towards end
                const increment = Math.max(1, Math.floor((100 - prev) / 10));
                return Math.min(100, prev + increment);
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Start exit animation after progress complete
            const exitTimer = setTimeout(() => {
                setIsExiting(true);
            }, 500);

            // Remove loading screen
            const removeTimer = setTimeout(() => {
                setIsVisible(false);
                onLoadingComplete?.();
            }, 1200);

            return () => {
                clearTimeout(exitTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [progress, onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark transition-all duration-700 ${
                isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid opacity-30" />
                
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
                
                {/* Radial gradient */}
                <div className="absolute inset-0 bg-radial-gradient" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with animation */}
                <div className={`mb-8 transition-all duration-500 ${
                    isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100"
                }`}>
                    <Logo size={100} animated={true} />
                </div>

                {/* Name */}
                <h1 className={`text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-500 delay-300 ${
                    progress > 20 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                    {siteConfig.name}
                </h1>

                {/* Title */}
                <p className={`text-teal font-medium mb-12 transition-all duration-500 delay-500 ${
                    progress > 40 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                    {siteConfig.title}
                </p>

                {/* Progress bar */}
                <div className={`w-64 transition-all duration-500 delay-700 ${
                    progress > 60 ? "opacity-100" : "opacity-0"
                }`}>
                    {/* Progress track */}
                    <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-teal to-cyan-400 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    
                    {/* Progress text */}
                    <div className="flex justify-between items-center mt-3 text-sm">
                        <span className="text-gray-500">Loading</span>
                        <span className="text-teal font-mono">{progress}%</span>
                    </div>
                </div>

                {/* Loading dots */}
                <div className={`flex items-center gap-2 mt-8 transition-all duration-500 ${
                    progress < 100 ? "opacity-100" : "opacity-0"
                }`}>
                    <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-teal/30 rounded-tl-xl" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-teal/30 rounded-tr-xl" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-teal/30 rounded-bl-xl" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-teal/30 rounded-br-xl" />
        </div>
    );
}
