import Container from "../ui/Container";
import Section from "../ui/Section";
import { projects } from "../../data/content";

/**
 * Projects - Impact-focused, not card grid
 * 
 * Design decisions:
 * - Full-width stacked blocks, not cramped cards
 * - Impact statement is the hook, not project name
 * - Technologies listed subtly, not as pill badges
 * - Alternating alignment creates visual rhythm
 */
export default function Projects() {
    return (
        <Section id="work" className="bg-bone">
            <Container>
                {/* Section header */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="text-sm font-medium text-slate uppercase tracking-wider mb-4">
                        Selected Work
                    </h2>
                    <p className="text-charcoal text-xl max-w-xl">
                        Projects where I've had meaningful impact—from architecture to shipping.
                    </p>
                </div>

                {/* Project list - stacked, not grid */}
                <div className="space-y-16 lg:space-y-24">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 ${index % 2 === 1 ? "lg:text-right" : ""
                                }`}
                        >
                            {/* Project number - subtle indicator */}
                            <div className={`lg:col-span-1 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                                <span className="text-sm font-mono text-slate">
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Project content */}
                            <div className={`lg:col-span-11 ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                                {/* Project title */}
                                <h3 className="text-ink mb-3">
                                    {project.title}
                                </h3>

                                {/* Impact statement - the hook */}
                                <p className="text-accent font-medium mb-4">
                                    {project.impact}
                                </p>

                                {/* Description */}
                                <p className="text-slate mb-6 max-w-2xl">
                                    {project.description}
                                </p>

                                {/* Technologies - subtle, inline */}
                                <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate/70 ${index % 2 === 1 ? "lg:justify-end" : ""
                                    }`}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
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
