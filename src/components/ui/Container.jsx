/**
 * Container - Max-width wrapper with responsive padding
 * Provides consistent horizontal containment across sections
 */
export default function Container({ children, className = "" }) {
    return (
        <div className={`max-w-5xl mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
            {children}
        </div>
    );
}
