/**
 * FloatingTechStack - Animated floating icons
 * Creates a dynamic, modern feel
 */
export default function FloatingTechStack() {
    const technologies = [
        { name: "React", icon: "⚛️", color: "#61DAFB" },
        { name: "Node.js", icon: "🟢", color: "#339933" },
        { name: "Python", icon: "🐍", color: "#3776AB" },
        { name: "MongoDB", icon: "🍃", color: "#47A248" },
        { name: "AI/ML", icon: "🤖", color: "#FF6F61" },
        { name: "TypeScript", icon: "📘", color: "#3178C6" },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {technologies.map((tech, index) => (
                <div
                    key={tech.name}
                    className="absolute opacity-20 hover:opacity-40 transition-opacity"
                    style={{
                        left: `${10 + (index % 3) * 35}%`,
                        top: `${15 + Math.floor(index / 3) * 50}%`,
                        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                        animationDelay: `${index * 0.3}s`
                    }}
                >
                    <div 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/30 backdrop-blur-sm border border-white/5"
                        style={{ 
                            boxShadow: `0 0 20px ${tech.color}20`
                        }}
                    >
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-xs text-muted hidden sm:block">{tech.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
