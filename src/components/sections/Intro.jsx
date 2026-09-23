import Container from "../ui/Container";
import { intro } from "../../data/content";
import TypeWriter from "../ui/TypeWriter";
import AnimatedCounter from "../ui/AnimatedCounter";
import FloatingTechStack from "../ui/FloatingTechStack";

/**
 * Intro - MagicTeal inspired hero section
 * Bold typography, gradient accents, animated elements
 */
export default function Intro() {
    const roles = [
        "Full-Stack Developer",
        "AI Engineer", 
        "UI/UX Enthusiast",
        "Problem Solver"
    ];

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
            
            {/* Floating Tech Stack */}
            <FloatingTechStack />
            
            <Container className="relative z-10">
                <div className="max-w-4xl">


                    {/* Greeting badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full mb-8 animate-fade-in-up animation-delay-100">
                        <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                        <span className="text-gray-400 text-sm font-medium">
                            {intro.greeting} <span className="text-white">{intro.name}</span>
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-balance mb-6 animate-fade-in-up animation-delay-100">
                        <span className="block text-white">{intro.headline.split(' ').slice(0, 2).join(' ')}</span>
                        <span className="block gradient-text">{intro.headline.split(' ').slice(2).join(' ')}</span>
                    </h1>

                    {/* Dynamic Role TypeWriter */}
                    <div className="mb-6 animate-fade-in-up animation-delay-200">
                        <span className="text-lg text-muted">I'm a </span>
                        <TypeWriter 
                            words={roles}
                            className="text-lg text-teal font-semibold"
                            typingSpeed={100}
                            deletingSpeed={50}
                            pauseDuration={2000}
                        />
                    </div>

                    {/* Title badge */}
                    <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up animation-delay-200">
                        <span className="px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium">
                            {intro.title}
                        </span>
                    </div>

                    {/* Supporting copy */}
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
                        {intro.subheadline}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-16 animate-fade-in-up animation-delay-300">
                        <a
                            href={intro.cta.primary.href}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {intro.cta.primary.label}
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                        <a
                            href={intro.cta.secondary.href}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-full hover:border-teal/50 hover:bg-surface-light transition-all duration-300 group"
                        >
                            {intro.cta.secondary.label}
                            <svg
                                className="w-5 h-5 transition-transform group-hover:rotate-45"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                />
                            </svg>
                        </a>
                        {/* GitHub CTA */}
                        <a
                            href={intro.cta.github.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-4 bg-surface border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            {intro.cta.github.label}
                        </a>
                    </div>

                    {/* Stats with Animated Counters */}
                    <div className="grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up animation-delay-400">
                        {intro.stats.map((stat, index) => {
                            // Extract number from value like "6+" or "1000+"
                            const numValue = parseInt(stat.value.replace(/\D/g, ''));
                            const suffix = stat.value.includes('+') ? '+' : (stat.value.includes('%') ? '%' : '');
                            
                            return (
                                <div key={index} className="text-center md:text-left group">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-teal transition-colors">
                                        <AnimatedCounter 
                                            end={numValue} 
                                            suffix={suffix}
                                            duration={2000 + index * 300}
                                        />
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-teal rounded-full animate-pulse" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
