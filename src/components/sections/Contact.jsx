import Container from "../ui/Container";
import Section from "../ui/Section";
import { contact } from "../../data/content";

/**
 * Contact - Personal yet professional
 * 
 * Design decisions:
 * - Direct email link, no form (feels impersonal)
 * - Clear availability status
 * - Large, inviting typography
 * - Simple and confident tone
 */
export default function Contact() {
    return (
        <Section id="contact">
            <Container>
                <div className="max-w-2xl">
                    {/* Section header */}
                    <h2 className="text-sm font-medium text-slate uppercase tracking-wider mb-4">
                        {contact.title}
                    </h2>

                    {/* Main message */}
                    <p className="text-charcoal text-xl mb-8">
                        {contact.message}
                    </p>

                    {/* Email - prominent, actionable */}
                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-block text-2xl md:text-3xl font-semibold text-ink hover:text-accent transition-colors mb-6"
                    >
                        {contact.email}
                    </a>

                    {/* Availability note */}
                    <p className="text-slate text-sm">
                        {contact.availability}
                    </p>
                </div>
            </Container>
        </Section>
    );
}
