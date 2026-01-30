import Container from "../ui/Container";
import Section from "../ui/Section";
import { skills } from "../../data/content";

/**
 * Skills - MagicTeal inspired categorized skills
 * Icon cards, gradient accents, modern grid layout
 */
export default function Capabilities() {
    const icons = {
        frontend: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        backend: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        ai: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        devops: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        architecture: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        security: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    };

    return (
        <Section id="skills" className="relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
            
            <Container className="relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium mb-4">
                        {skills.title}
                    </span>
                    <h2 className="text-white mb-4">{skills.subtitle}</h2>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.categories.map((category, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-surface border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-teal group-hover:scale-110 transition-transform duration-300">
                                    {icons[category.icon]}
                                </div>
                                <h3 className="text-white font-semibold text-lg">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Skills tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 bg-dark border border-border rounded-lg text-gray-400 text-sm hover:border-teal/30 hover:text-teal transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">Languages</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.languages.map((lang, index) => (
                            <span
                                key={index}
                                className="px-5 py-2 bg-gradient-to-r from-teal/10 to-cyan-500/10 border border-teal/20 rounded-full text-teal font-medium"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
