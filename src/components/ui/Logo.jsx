/**
 * Logo - Animated SVG logo for Nilesh Patil
 * Modern, tech-inspired design with gradient and animation
 */
export default function Logo({ size = 40, animated = false, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            >
                <defs>
                    {/* Main gradient */}
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#14b8a6" />
                        {animated && (
                            <animate
                            attributeName="x1"
                            values="0%;100%;0%"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    )}
                </linearGradient>
                
                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Background gradient */}
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Background shape */}
            <rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="20"
                fill="url(#bgGradient)"
                stroke="url(#logoGradient)"
                strokeWidth="2"
            >
                {animated && (
                    <animate
                        attributeName="rx"
                        values="20;24;20"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                )}
            </rect>

            {/* Letter N - stylized */}
            <g filter={animated ? "url(#glow)" : undefined}>
                {/* Left vertical bar */}
                <path
                    d="M28 72V28"
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    {animated && (
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,100;44,0"
                            dur="0.5s"
                            fill="freeze"
                        />
                    )}
                </path>
                
                {/* Diagonal */}
                <path
                    d="M28 28L72 72"
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    {animated && (
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,100;62,0"
                            dur="0.5s"
                            begin="0.3s"
                            fill="freeze"
                        />
                    )}
                </path>
                
                {/* Right vertical bar */}
                <path
                    d="M72 28V72"
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    {animated && (
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,100;44,0"
                            dur="0.5s"
                            begin="0.6s"
                            fill="freeze"
                        />
                    )}
                </path>
            </g>

            {/* Accent dots */}
            <circle cx="28" cy="28" r="4" fill="url(#logoGradient)">
                {animated && (
                    <animate
                        attributeName="r"
                        values="0;4;4"
                        dur="0.3s"
                        fill="freeze"
                    />
                )}
            </circle>
            <circle cx="72" cy="72" r="4" fill="url(#logoGradient)">
                {animated && (
                    <animate
                        attributeName="r"
                        values="0;4;4"
                        dur="0.3s"
                        begin="0.8s"
                        fill="freeze"
                    />
                )}
            </circle>
        </svg>
    );
}

/**
 * LogoMark - Simplified logo mark for smaller sizes
 */
export function LogoMark({ size = 32, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="markGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
            </defs>
            
            <rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="20"
                fill="url(#markGradient)"
            />
            
            {/* Letter N in white */}
            <path
                d="M28 72V28M28 28L72 72M72 28V72"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
