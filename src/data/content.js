/**
 * Content data for Nilesh Patil's Portfolio
 * Extracted from resume and enhanced for web presentation
 */

export const siteConfig = {
    name: "Nilesh Patil",
    title: "Full-Stack & AI Developer",
    email: "np103177@gmail.com",
    phone: "+91-7972590399",
    linkedin: "https://linkedin.com/in/nilesh-patil-451637322",
    github: "https://github.com/Cyber-Hash-pro",
    instagram: "https://www.instagram.com/nilesh_patil_954/",
    calcom: "https://cal.com/nilesh-patil-vv3gv3/15min?overlayCalendar=true",
    website: "https://cyberhash.me",
};

export const intro = {
    greeting: "Hi, I'm",
    name: "Nilesh Patil",
    title: "Full-Stack & AI Developer",
    headline: "Building AI-Powered Platforms That Scale",
    subheadline: "I architect production-grade applications with real-time systems, microservices, and conversational AI. Passionate about creating high-performance solutions that deliver measurable real-world impact.",
    cta: {
        primary: {
            label: "View My Work",
            href: "#projects",
        },
        secondary: {
            label: "Get In Touch",
            href: "#contact",
        },
        github: {
            label: "GitHub",
            href: "https://github.com/Cyber-Hash-pro",
        },
    },
    stats: [
        { value: "6+", label: "Apps Shipped" },
        { value: "1000+", label: "Concurrent Users" },
        { value: "99.9%", label: "Uptime" },
    ],
};

export const about = {
    title: "About Me",
    subtitle: "Transforming Ideas Into Scalable Solutions",
    narrative: [
        "I'm a Full-Stack Developer specializing in AI-powered platforms, real-time systems, and scalable microservices architectures. I don't just write code—I build production-grade applications that handle real users and deliver measurable impact.",
        "My expertise spans building AI conversational systems with mood detection, e-commerce marketplaces with 1000+ concurrent users, and chat applications with RAG-powered semantic search. I've architected Docker-based microservices, implemented event-driven workflows with RabbitMQ, and secured platforms with JWT, OAuth, and RBAC authentication.",
        "Currently interning at Creuto Cloud Private Limited and pursuing my B.Tech in Computer Science at G H Raisoni College of Engineering and Management. I believe in shipping fast, learning continuously, and building systems that don't break under pressure.",
    ],
    highlights: [
        { icon: "code", label: "Full-Stack Development" },
        { icon: "ai", label: "AI/ML Integration" },
        { icon: "server", label: "Microservices Architecture" },
        { icon: "realtime", label: "Real-Time Systems" },
    ],
};

export const projects = [
    {
        id: 1,
        title: "Real-Time AI Synchronized Music Platform",
        impact: "45% higher engagement • 60% faster discovery • Sub-200ms latency",
        description: "Built an AI-powered music streaming platform with mood detection and conversational assistant for personalized recommendations. Architected Docker-based microservices (Auth, Music, AI Agent, Notifications) enabling scalable deployment and reducing downtime by 40%. Implemented synchronized listening rooms using Socket.IO with secure room access and shared playback controls.",
        features: [
            "AI mood detection for personalized recommendations",
            "Synchronized listening rooms with Socket.IO",
            "RabbitMQ event-driven workflows",
            "OAuth + JWT authentication",
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "LangChain", "Google Gemini", "RabbitMQ", "Docker", "JWT"],
        link: "#",
        github: "https://github.com/Cyber-Hash-pro",
    },
    {
        id: 2,
        title: "Mino – AI-Powered E-Commerce Marketplace",
        impact: "1000+ concurrent users • 99.9% uptime • 60% faster APIs",
        description: "Built a microservices-based marketplace with 7 services (Auth, Product, Cart, Order, AI Buddy, Seller Dashboard, Notifications). Developed AI shopping assistant using LangChain + Gemini enabling natural language shopping experience. Implemented event-driven system with RabbitMQ achieving sub-100ms message processing.",
        features: [
            "7 microservices architecture",
            "AI shopping assistant with LangChain",
            "Real-time order tracking with Socket.IO",
            "JWT + RBAC authentication",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "Socket.IO", "LangChain", "Docker", "JWT"],
        link: "#",
        github: "https://github.com/Cyber-Hash-pro",
    },
    {
        id: 3,
        title: "Cyber-AI – Full-Stack AI Chat Application",
        impact: "35% improved retrieval accuracy • Production-ready LLM integration",
        description: "Developed a real-time conversational AI platform supporting text, image & file interactions with WebSockets. Integrated Gemini AI with custom prompts & structured handling ensuring stable responses. Implemented Pinecone vector memory for semantic context retrieval improving accuracy by 35%.",
        features: [
            "Real-time WebSocket communication",
            "RAG with Pinecone vector database",
            "CI/CD pipeline with GitHub Actions",
            "Docker containerization",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Google Gemini", "Pinecone", "Docker", "AWS EC2", "Nginx"],
        link: "https://ai.cyberhash.me/",
        github: "https://github.com/Cyber-Hash-pro",
    },
];

export const skills = {
    title: "Skills & Technologies",
    subtitle: "Tools I use to bring ideas to life",
    categories: [
        {
            name: "Frontend",
            icon: "frontend",
            skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Vite", "PWA"],
        },
        {
            name: "Backend",
            icon: "backend",
            skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL", "Prisma ORM", "Redis", "Socket.IO"],
        },
        {
            name: "AI / ML",
            icon: "ai",
            skills: ["Google Gemini", "LangChain", "LangGraph", "LangSmith", "Pinecone", "Embeddings", "RAG"],
        },
        {
            name: "DevOps & Cloud",
            icon: "devops",
            skills: ["Docker", "Docker Compose", "AWS EC2", "Nginx", "GitHub Actions", "CI/CD", "ImageKit CDN"],
        },
        {
            name: "Architecture",
            icon: "architecture",
            skills: ["Microservices", "Event-Driven Systems", "REST APIs", "WebSockets", "RabbitMQ", "BullMQ", "ClickHouse"],
        },
        {
            name: "Security",
            icon: "security",
            skills: ["JWT", "OAuth 2.0", "RBAC", "bcrypt", "HTTP-Only Cookies"],
        },
    ],
    languages: ["JavaScript (ES6+)", "TypeScript"],
};

export const capabilities = [
    {
        domain: "Frontend Engineering",
        skills: [
            "React.js, Next.js, and modern JavaScript/TypeScript",
            "State management with Redux Toolkit",
            "Responsive design with Tailwind CSS",
            "Real-time interfaces with WebSockets",
        ],
    },
    {
        domain: "Backend & Infrastructure",
        skills: [
            "Node.js, NestJS, Express.js, and RESTful API design",
            "MongoDB, PostgreSQL, ClickHouse (OLAP) and Prisma ORM",
            "Redis caching, BullMQ queues and Socket.IO real-time",
            "Docker, AWS EC2, and CI/CD pipelines",
        ],
    },
    {
        domain: "AI & Machine Learning",
        skills: [
            "LangChain and LangGraph orchestration",
            "Google Gemini AI integration",
            "Pinecone vector search and RAG",
            "Conversational AI with custom prompts",
        ],
    },
];

export const experience = [
    {
        id: 1,
        role: "Software Development Engineer — Intern",
        company: "Creuto Cloud Private Limited",
        companyUrl: "https://creuto.com",
        period: "January 2026 — Present",
        projects: [
            {
                name: "Edverise Platform — API & Analytics Engine",
                tech: "NestJS 11 · TypeScript · MongoDB · ClickHouse · RabbitMQ · AWS S3 · Docker · GitHub Actions CI/CD",
            },
            {
                name: "Creuto Sales CRM & MML/Brabima — Lead Management + Notification Engine",
                tech: "NestJS 11 · FeathersJS · TypeScript · MongoDB · Redis · BullMQ · Zod v4 · Firebase FCM",
            },
        ],
        description: "Architecting scalable backend systems at Creuto Cloud — from scratch. Built 30+ service modules, 50+ REST APIs and a full multi-tenant Sales CRM with pipeline workflows, org-level RBAC, and real-time notification systems.",
        highlights: [
            "Cut manual workflows 41% and raised data accuracy 48%",
            "Zero message loss via fault-tolerant RabbitMQ AMQP layer",
            "BullMQ + Redis broadcast notification system (500 users/batch)",
            "ClickHouse OLAP microservice — 12+ analytics queries",
        ],
    },
    {
        id: 2,
        role: "Full-Stack & AI Developer",
        company: "Independent Projects",
        companyUrl: "https://github.com/Cyber-Hash-pro",
        period: "2023 — Present",
        projects: [],
        description: "Building production-grade AI-powered applications including music platforms, e-commerce marketplaces, and conversational AI systems. Architecting microservices handling 1000+ concurrent users with 99.9% uptime.",
        highlights: [
            "Shipped 6+ production applications from scratch",
            "40% reduction in deployment downtime",
            "35% improvement in AI retrieval accuracy",
        ],
    },
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering",
        institution: "G H Raisoni College of Engineering and Management",
        location: "Jalgaon, Maharashtra",
        period: "2023 — 2027",
    },
];

export const certifications = [
    {
        id: 1,
        title: "Job Ready Cohort – Full Stack Development",
        subtitle: "(Frontend, Backend, DevOps)",
        issuer: "Sheryians Coding School",
        year: "2025",
        credentialId: "9808d600",
    },
];

export const contact = {
    title: "Let's Build Something Amazing",
    subtitle: "Get In Touch",
    message: "I'm always excited to discuss new projects, innovative ideas, or opportunities to contribute to cutting-edge AI and full-stack solutions. Let's create something extraordinary together.",
    email: "np103177@gmail.com",
    phone: "+91-7972590399",
    availability: "Open to full-time opportunities and exciting freelance projects.",
    calcom: "https://cal.com/nilesh-patil-vv3gv3/15min?overlayCalendar=true",
    web3formsKey: "5d380131-c47b-4b8a-9cd8-57df5a81d5fa",
    social: {
        github: "https://github.com/Cyber-Hash-pro",
        linkedin: "https://linkedin.com/in/nilesh-patil-451637322",
        instagram: "https://www.instagram.com/nilesh_patil_954/",
    },
};
