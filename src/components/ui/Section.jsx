/**
 * Section - Wrapper with consistent vertical rhythm
 * Uses generous padding for that "breathing room" feel
 */
export default function Section({ children, className = "", id = "" }) {
    return (
        <section id={id} className={`section-padding ${className}`}>
            {children}
        </section>
    );
}
