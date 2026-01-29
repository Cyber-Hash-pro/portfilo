import { useState } from "react";

/**
 * Header - Minimal fixed navigation
 * Wordmark instead of logo, clean nav links
 * Mobile: hamburger menu with slide-in panel
 */
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#work", label: "Work" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
            <nav className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Wordmark - confident, no logo needed */}
                    <a
                        href="#"
                        className="text-ink font-semibold text-lg tracking-tight hover:text-accent transition-colors"
                    >
                        developer.
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-slate text-sm font-medium hover:text-ink transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 -mr-2 text-ink"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-bone py-4">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-slate text-sm font-medium hover:text-ink transition-colors block py-1"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
