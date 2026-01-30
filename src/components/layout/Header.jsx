import { useState, useEffect } from "react";
import { siteConfig } from "../../data/content";

/**
 * Header - MagicTeal inspired premium navigation
 * Glass effect, smooth animations, modern feel
 */
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? "bg-dark/90 backdrop-blur-xl border-b border-border" 
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Name */}
                    <a
                        href="#"
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-cyan-400 flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                            N
                        </div>
                        <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
                            {siteConfig.name.split(' ')[0]}
                            <span className="text-teal">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 text-sm font-medium hover:text-teal transition-colors duration-300 animated-underline"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal to-cyan-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Hire Me
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 -mr-2 text-white hover:text-teal transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="py-4 border-t border-border">
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gray-300 font-medium hover:text-teal transition-colors block py-3 px-4 rounded-lg hover:bg-surface"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-teal to-cyan-500 text-white font-medium rounded-full"
                                >
                                    Hire Me
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
