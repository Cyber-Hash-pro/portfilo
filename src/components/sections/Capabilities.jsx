import Container from "../ui/Container";
import Section from "../ui/Section";
import { capabilities } from "../../data/content";

/**
 * Capabilities - Skills as narrative, not icon lists
 * 
 * Design decisions:
 * - Grouped by domain, not flat list
 * - No icons or progress bars
 * - Text-focused, confident presentation
 * - Clean separators between groups
 */
export default function Capabilities() {
    return (
        <Section id="capabilities">
            <Container>
                {/* Section header */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="text-sm font-medium text-slate uppercase tracking-wider mb-4">
                        Capabilities
                    </h2>
                    <p className="text-charcoal text-xl max-w-xl">
                        What I bring to teams and projects.
                    </p>
                </div>

                {/* Capability groups */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {capabilities.map((group, index) => (
                        <div key={index}>
                            {/* Domain header */}
                            <h3 className="text-ink text-lg font-semibold mb-6">
                                {group.domain}
                            </h3>

                            {/* Skills list - clean, no bullets */}
                            <ul className="space-y-3">
                                {group.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="text-slate border-l-2 border-bone pl-4 hover:border-accent transition-colors"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
