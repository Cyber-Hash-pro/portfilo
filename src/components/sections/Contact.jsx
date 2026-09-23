import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import ScrollReveal from "../ui/ScrollReveal";
import { contact } from "../../data/content";

/**
 * Contact - MagicTeal inspired contact section
 * Web3Forms integration, Cal.com booking, Instagram social link
 */
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitState, setSubmitState] = useState("idle"); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitState("loading");

        try {
            const data = new FormData();
            data.append("access_key", contact.web3formsKey);
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("message", formData.message);
            data.append("subject", `Portfolio Contact from ${formData.name}`);
            data.append("from_name", "cyberhash.me Portfolio");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (result.success) {
                setSubmitState("success");
                setFormData({ name: "", email: "", message: "" });
                // Reset after 5s
                setTimeout(() => setSubmitState("idle"), 5000);
            } else {
                setSubmitState("error");
                setTimeout(() => setSubmitState("idle"), 4000);
            }
        } catch {
            setSubmitState("error");
            setTimeout(() => setSubmitState("idle"), 4000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact" className="relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
            
            <Container className="relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fadeUp">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-teal/10 border border-teal/30 rounded-full text-teal text-sm font-medium mb-4">
                            {contact.subtitle}
                        </span>
                        <h2 className="text-white mb-4">{contact.title}</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {contact.message}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact info */}
                    <ScrollReveal animation="fadeLeft">
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href={`mailto:${contact.email}`}
                                className="group flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                            >
                                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p className="text-white font-medium group-hover:text-teal transition-colors duration-300">{contact.email}</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${contact.phone}`}
                                className="group flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-teal/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                            >
                                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Phone</p>
                                    <p className="text-white font-medium group-hover:text-teal transition-colors duration-300">{contact.phone}</p>
                                </div>
                            </a>

                            {/* Cal.com — Book a Call */}
                            <a
                                href={contact.calcom}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-5 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-violet-400 font-semibold">Book a 15-min Call</p>
                                    <p className="text-gray-400 text-sm">Schedule via cal.com</p>
                                </div>
                                <svg className="w-4 h-4 text-violet-400 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Download Resume */}
                            <a
                                href="/resume.pdf"
                                download="Nilesh_Patil_Resume.pdf"
                                className="group flex items-center gap-4 p-5 bg-gradient-to-r from-teal/10 to-cyan-500/10 border border-teal/30 rounded-2xl hover:border-teal/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center text-teal group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-teal font-semibold">Download Resume</p>
                                    <p className="text-gray-400 text-sm">PDF • Updated 2025</p>
                                </div>
                                <svg className="w-5 h-5 text-teal ml-auto group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>

                            {/* Social links */}
                            <div>
                                <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                                <div className="flex gap-3">
                                    {/* GitHub */}
                                    <a
                                        href={contact.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    {/* LinkedIn */}
                                    <a
                                        href={contact.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center text-gray-400 hover:text-teal hover:border-teal/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        href={contact.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="p-5 bg-gradient-to-br from-teal/10 to-cyan-500/5 border border-teal/20 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                                    <p className="text-white font-medium">Available for opportunities</p>
                                </div>
                                <p className="text-gray-400 text-sm">{contact.availability}</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact form — Web3Forms */}
                    <ScrollReveal animation="fadeRight" delay={200}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="p-8 bg-surface border border-border rounded-3xl">
                                <h3 className="text-white font-semibold text-xl mb-2">Send a Message</h3>
                                <p className="text-gray-500 text-sm mb-6">I'll reply within 24 hours.</p>

                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-gray-400 text-sm mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-dark border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" className="block text-gray-400 text-sm mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-dark border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className="block text-gray-400 text-sm mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-5 py-4 bg-dark border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={submitState === "loading"}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-teal to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        {submitState === "loading" ? (
                                            <>
                                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg
                                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {/* Success / Error Toast */}
                                    {submitState === "success" && (
                                        <div className="flex items-center gap-3 p-4 bg-teal/10 border border-teal/30 rounded-xl animate-fade-in-up">
                                            <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <p className="text-teal text-sm font-medium">Message sent! I'll get back to you within 24 hours.</p>
                                        </div>
                                    )}
                                    {submitState === "error" && (
                                        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-fade-in-up">
                                            <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <p className="text-red-400 text-sm font-medium">Something went wrong. Please email me directly at {contact.email}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </Container>
        </Section>
    );
}
