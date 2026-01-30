import Container from "../ui/Container";
import Section from "../ui/Section";
import { about } from "../../data/content";

/**
 * About - MagicTeal inspired professional section
 * Clean cards, gradient accents, modern layout
 */
export default function About() {
    const icons = {
        code: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        ai: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        server: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        realtime: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    };

    return (
        <Section id="about" className="relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient opacity-50" />
            
            <Container className="relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium mb-4">
                        {about.title}
                    </span>
                    <h2 className="text-white mb-4">{about.subtitle}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Narrative content */}
                    <div className="space-y-6">
                        {about.narrative.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-400 text-lg leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Highlight cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {about.highlights.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-surface border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                            >
                                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {icons[item.icon]}
                                </div>
                                <h4 className="text-white font-semibold text-sm">
                                    {item.label}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
