import Container from "../ui/Container";
import { siteConfig, contact } from "../../data/content";
import { LogoMark } from "../ui/Logo";

/**
 * Footer - MagicTeal inspired premium footer
 * Gradient accents, social links, modern feel
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: contact.social.github, label: "GitHub", icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        )},
        { href: contact.social.linkedin, label: "LinkedIn", icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        )},
    ];

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <footer className="relative bg-surface border-t border-border">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
            
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <a href="#" className="flex items-center gap-3 mb-6">
                                <LogoMark size={48} />
                                <div>
                                    <span className="text-white font-bold text-xl block">
                                        {siteConfig.name}
                                    </span>
                                    <span className="text-gray-500 text-sm">{siteConfig.title}</span>
                                </div>
                            </a>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Building AI-powered platforms and scalable microservices that deliver real-world impact. Let's create something extraordinary together.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-dark border border-border rounded-lg flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/30 transition-all duration-300"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-teal transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold mb-6">Contact</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {siteConfig.email}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {siteConfig.phone}
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <span className="inline-flex items-center gap-2 text-teal text-sm">
                                        <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                                        Available for work
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                        Designed & built with
                        <span className="text-red-500 animate-pulse">♥</span>
                        using React & Tailwind
                    </p>
                </div>
            </Container>
        </footer>
    );
}
