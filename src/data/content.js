/**
 * Content data for the portfolio
 * Centralized content makes updates easy and keeps components clean
 * 
 * IMPORTANT: Replace this placeholder content with your own
 */

export const siteConfig = {
    name: "developer.",
    email: "hello@example.com",
};

export const intro = {
    headline: "I build systems that scale.",
    subheadline: "Full-stack engineer focused on performance, clarity, and shipping products that matter.",
    cta: {
        label: "See my work",
        href: "#work",
    },
};

export const about = {
    title: "About",
    narrative: [
        "I started writing code to solve problems—not to follow tutorials. That mindset hasn't changed. Over the past 5 years, I've shipped products used by thousands, rebuilt legacy systems that teams feared touching, and led migrations that cut infrastructure costs in half.",
        "I care about code that reads well, systems that fail gracefully, and interfaces that don't make users think. I prefer small teams, hard problems, and shipping over slides.",
        "Currently based in San Francisco, working on developer tools. Previously at a fintech startup and a design agency before that. I've worn many hats—sometimes by choice, sometimes not.",
    ],
};

export const projects = [
    {
        id: 1,
        title: "Distributed Task Queue",
        impact: "Reduced job processing time by 73% for a team of 40 engineers",
        description: "Designed and implemented a fault-tolerant task queue handling 2M+ jobs daily. Built with Redis clusters, dead-letter queues, and comprehensive observability.",
        technologies: ["Node.js", "Redis", "PostgreSQL", "Prometheus"],
        link: "#",
    },
    {
        id: 2,
        title: "Design System & Component Library",
        impact: "Adopted by 12 product teams, reduced frontend development time by 40%",
        description: "Built a comprehensive design system from scratch with accessibility baked in. Included 60+ components, thorough documentation, and Figma integration.",
        technologies: ["React", "TypeScript", "Storybook", "Testing Library"],
        link: "#",
    },
    {
        id: 3,
        title: "Real-time Collaboration Engine",
        impact: "Powers collaborative editing for 100K+ monthly active users",
        description: "Architected WebSocket infrastructure for real-time document collaboration. Handles presence, cursor sync, and conflict resolution at scale.",
        technologies: ["WebSocket", "CRDT", "Node.js", "AWS"],
        link: "#",
    },
];

export const capabilities = [
    {
        domain: "Frontend Engineering",
        skills: [
            "React, Next.js, and modern JavaScript/TypeScript",
            "Component architecture and design systems",
            "Performance optimization and Core Web Vitals",
            "Accessibility and responsive design",
        ],
    },
    {
        domain: "Backend & Infrastructure",
        skills: [
            "Node.js, Python, and API design",
            "PostgreSQL, Redis, and data modeling",
            "AWS/GCP cloud architecture",
            "CI/CD, containerization, and DevOps",
        ],
    },
    {
        domain: "Product & Leadership",
        skills: [
            "Technical architecture and system design",
            "Code review and mentoring",
            "Cross-functional collaboration",
            "Shipping under constraints",
        ],
    },
];

export const experience = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "DevTools Inc.",
        period: "2022 — Present",
        description: "Leading frontend architecture for developer productivity tools. Shipped a new code review experience that increased review completion by 35%.",
    },
    {
        id: 2,
        role: "Full-Stack Engineer",
        company: "Fintech Startup",
        period: "2020 — 2022",
        description: "Built payment infrastructure handling $50M+ monthly volume. Owned the transition from monolith to microservices.",
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "Design Agency",
        period: "2018 — 2020",
        description: "Developed web applications for clients across healthcare, e-commerce, and media. Learned to ship fast while maintaining quality.",
    },
];

export const contact = {
    title: "Let's talk",
    message: "I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow engineers.",
    email: "hello@example.com",
    availability: "Currently open to senior engineering roles.",
};
