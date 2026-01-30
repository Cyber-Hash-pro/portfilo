import Container from "../ui/Container";
import Section from "../ui/Section";
import { projects } from "../../data/content";

/**
 * Projects - MagicTeal inspired showcase
 * Large cards, gradient accents, hover animations
 */
export default function Projects() {
    return (
        <Section id="projects" className="relative overflow-hidden bg-surface">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
            
            <Container className="relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium mb-4">
                        Featured Work
                    </span>
                    <h2 className="text-white mb-4">Projects That Make an Impact</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Production-grade applications built with modern technologies and designed for scale.
                    </p>
                </div>

                {/* Project cards */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative bg-dark border border-border rounded-3xl p-8 lg:p-10 hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                {/* Project header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div>
                                        {/* Project number */}
                                        <span className="text-teal font-mono text-sm mb-2 block">
                                            0{project.id}
                                        </span>
                                        {/* Project title */}
                                        <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3 group-hover:text-teal transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {/* Impact statement */}
                                        <p className="text-teal-light font-medium text-sm md:text-base">
                                            {project.impact}
                                        </p>
                                    </div>
                                    
                                    {/* Links */}
                                    <div className="flex items-center gap-3">
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/50 transition-all duration-300"
                                                aria-label="Live demo"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/50 transition-all duration-300"
                                            aria-label="GitHub"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 text-base lg:text-lg leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-surface-light border border-border rounded-full text-gray-400 text-xs font-medium hover:border-teal/30 hover:text-teal transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
