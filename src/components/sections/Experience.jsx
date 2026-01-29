import Container from "../ui/Container";
import Section from "../ui/Section";
import { experience } from "../../data/content";

/**
 * Experience - Timeline format, minimal decoration
 * 
 * Design decisions:
 * - Vertical timeline with subtle connector
 * - Impact-focused descriptions, not job duties
 * - Clean hierarchy: role > company > period
 * - Asymmetric grid matching About section
 */
export default function Experience() {
    return (
        <Section id="experience" className="bg-bone">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Section label */}
                    <div className="lg:col-span-3">
                        <h2 className="text-sm font-medium text-slate uppercase tracking-wider">
                            Experience
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-9">
                        <div className="space-y-12">
                            {experience.map((job, index) => (
                                <article
                                    key={job.id}
                                    className="relative pl-8 border-l-2 border-slate/20"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[5px] bg-ink rounded-full" />

                                    {/* Role - primary */}
                                    <h3 className="text-ink text-lg font-semibold mb-1">
                                        {job.role}
                                    </h3>

                                    {/* Company and period */}
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                                        <span className="text-charcoal font-medium">
                                            {job.company}
                                        </span>
                                        <span className="text-slate text-sm">
                                            {job.period}
                                        </span>
                                    </div>

                                    {/* Description - impact focused */}
                                    <p className="text-slate max-w-lg">
                                        {job.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
