import Container from "../ui/Container";
import Section from "../ui/Section";
import { experience, education, certifications, siteConfig } from "../../data/content";

/**
 * Experience - MagicTeal inspired timeline
 * Cards with gradients, clean hierarchy — Creuto internship + GitHub profile card
 */
export default function Experience() {
    return (
        <Section id="experience" className="relative overflow-hidden bg-surface">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />
            
            <Container className="relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium mb-4">
                        Background
                    </span>
                    <h2 className="text-white mb-4">Experience &amp; Education</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience & Certifications Column */}
                    <div className="space-y-8">
                        {/* Experience */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Experience
                            </h3>
                            
                            <div className="space-y-4">
                                {experience.map((job) => (
                                    <div
                                        key={job.id}
                                        className="group p-6 bg-dark border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                                    >
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                            <h4 className="text-white font-semibold group-hover:text-teal transition-colors duration-300">
                                                {job.role}
                                            </h4>
                                            <span className="text-teal text-sm font-mono">
                                                {job.period}
                                            </span>
                                        </div>
                                        {/* Company */}
                                        <a
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 text-sm mb-3 inline-flex items-center gap-1 hover:text-teal transition-colors duration-300"
                                        >
                                            {job.company}
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>

                                        {/* Sub-projects (for Creuto) */}
                                        {job.projects && job.projects.length > 0 && (
                                            <div className="mb-3 space-y-2">
                                                {job.projects.map((proj, i) => (
                                                    <div key={i} className="pl-3 border-l-2 border-teal/30">
                                                        <p className="text-gray-300 text-xs font-semibold">{proj.name}</p>
                                                        <p className="text-gray-600 text-xs font-mono mt-0.5">{proj.tech}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <p className="text-gray-400 text-sm mb-4">{job.description}</p>
                                        
                                        {/* Highlights */}
                                        <div className="space-y-2">
                                            {job.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                                                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </span>
                                Certifications
                            </h3>
                            
                            <div className="space-y-4">
                                {certifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="group p-6 bg-dark border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-white font-semibold mb-1 group-hover:text-teal transition-colors duration-300">
                                                    {cert.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm mb-2">{cert.subtitle}</p>
                                                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                                <p className="text-gray-600 text-xs mt-2">Credential ID: {cert.credentialId}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium flex-shrink-0">
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education + GitHub Column */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                Education
                            </h3>
                            
                            <div className="space-y-4">
                                {education.map((edu) => (
                                    <div
                                        key={edu.id}
                                        className="group relative p-8 bg-dark border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] overflow-hidden"
                                    >
                                        {/* Gradient accent */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-cyan-500" />
                                        
                                        <span className="text-teal text-sm font-mono mb-4 block">
                                            {edu.period}
                                        </span>
                                        <h4 className="text-white font-bold text-xl mb-2 group-hover:text-teal transition-colors duration-300">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-gray-300 font-medium mb-4">{edu.field}</p>
                                        <div className="pt-4 border-t border-border">
                                            <p className="text-gray-400">{edu.institution}</p>
                                            <p className="text-gray-500 text-sm">{edu.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* GitHub Profile Card */}
                        <a
                            href={siteConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-5 p-6 bg-gradient-to-br from-gray-900 to-dark border border-gray-700/50 rounded-2xl hover:border-teal/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] overflow-hidden"
                        >
                            {/* Animated gradient bg */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-gray-700/50 flex-shrink-0">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </div>
                            <div className="relative z-10 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-white font-bold text-lg group-hover:text-teal transition-colors duration-300">Cyber-Hash-pro</p>
                                    <span className="px-2 py-0.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-xs font-medium">GitHub</span>
                                </div>
                                <p className="text-gray-400 text-sm">github.com/Cyber-Hash-pro</p>
                                <p className="text-gray-500 text-xs mt-1">6+ production repos · AI · Microservices · Full-Stack</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Stats card */}
                        <div className="p-6 bg-gradient-to-br from-teal/10 to-cyan-500/5 border border-teal/20 rounded-2xl">
                            <h4 className="text-white font-semibold mb-4">Quick Stats</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-dark/50 rounded-xl">
                                    <div className="text-2xl font-bold text-teal">6+</div>
                                    <div className="text-gray-400 text-sm">Apps Shipped</div>
                                </div>
                                <div className="text-center p-4 bg-dark/50 rounded-xl">
                                    <div className="text-2xl font-bold text-teal">1000+</div>
                                    <div className="text-gray-400 text-sm">Users Served</div>
                                </div>
                                <div className="text-center p-4 bg-dark/50 rounded-xl">
                                    <div className="text-2xl font-bold text-teal">99.9%</div>
                                    <div className="text-gray-400 text-sm">Uptime</div>
                                </div>
                                <div className="text-center p-4 bg-dark/50 rounded-xl">
                                    <div className="text-2xl font-bold text-teal">50+</div>
                                    <div className="text-gray-400 text-sm">REST APIs Built</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
