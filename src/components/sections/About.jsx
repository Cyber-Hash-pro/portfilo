import Container from "../ui/Container";
import Section from "../ui/Section";
import { about } from "../../data/content";

/**
 * About - Narrative format, like a founder story
 * 
 * Design decisions:
 * - No bullet lists or icons
 * - Written as prose, not resume bullets
 * - Two-column layout with subtle decorative element
 * - Generous line height for readability
 */
export default function About() {
    return (
        <Section id="about">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Section label - positioned uniquely */}
                    <div className="lg:col-span-3">
                        <h2 className="text-sm font-medium text-slate uppercase tracking-wider">
                            {about.title}
                        </h2>
                    </div>

                    {/* Narrative content */}
                    <div className="lg:col-span-9">
                        <div className="max-w-xl space-y-6">
                            {about.narrative.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-charcoal text-lg leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
