import Container from "../ui/Container";
import { intro } from "../../data/content";

/**
 * Intro - Product-like headline, not "Hi I'm..."
 * 
 * Design decisions:
 * - Left-aligned for asymmetry and editorial feel
 * - Large headline with controlled measure (max-width)
 * - Minimal elements, maximum impact
 * - No hero image or background - typography does the work
 */
export default function Intro() {
    return (
        <section className="min-h-[85vh] flex items-center pt-20">
            <Container>
                <div className="max-w-2xl">
                    {/* Main headline - product-like, confident */}
                    <h1 className="text-balance mb-6">
                        {intro.headline}
                    </h1>

                    {/* Supporting copy - brief, impactful */}
                    <p className="text-lg md:text-xl text-slate mb-10 max-w-xl">
                        {intro.subheadline}
                    </p>

                    {/* Single CTA - no button soup */}
                    <a
                        href={intro.cta.href}
                        className="inline-flex items-center gap-2 text-ink font-medium hover:text-accent transition-colors group"
                    >
                        {intro.cta.label}
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>
            </Container>
        </section>
    );
}
