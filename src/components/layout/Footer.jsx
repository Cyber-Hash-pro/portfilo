import Container from "../ui/Container";

/**
 * Footer - Simple, clean footer
 * Social links and copyright, nothing more needed
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: "https://github.com", label: "GitHub" },
        { href: "https://linkedin.com", label: "LinkedIn" },
        { href: "https://twitter.com", label: "Twitter" },
    ];

    return (
        <footer className="py-12 border-t border-bone">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Social Links */}
                    <ul className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate text-sm hover:text-ink transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Copyright */}
                    <p className="text-slate text-sm">
                        © {currentYear} — Designed & built with care
                    </p>
                </div>
            </Container>
        </footer>
    );
}
