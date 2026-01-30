import Container from "../ui/Container";
import { intro } from "../../data/content";
import TypeWriter from "../ui/TypeWriter";
import AvailabilityBadge from "../ui/AvailabilityBadge";
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
                    {/* Availability Badge - HR loves this! */}
                    <div className="mb-6 animate-fade-in-up">
                        <AvailabilityBadge available={true} />
                    </div>

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
                    </div>

                    {/* Stats with Animated Counters */}
                    <div className="grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up animation-delay-400">
                        {intro.stats.map((stat, index) => {
                            // Extract number from value like "3+" or "10+"
                            const numValue = parseInt(stat.value.replace(/\D/g, ''));
                            const suffix = stat.value.includes('+') ? '+' : '';
                            
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
