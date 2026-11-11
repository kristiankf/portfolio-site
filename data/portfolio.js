const icons = {
  Claude: "logos:anthropic-icon",
  Cursor: "simple-icons:cursor",
  Codex: "simple-icons:openai",
  "Grok Bot": "logos:grok",
  Jira: "logos:jira",
  AWS: "logos:aws",
  Linux: "logos:linux-tux",
  "Server Management": "hugeicons:server-stack-01",
  VPS: "hugeicons:cloud-server",
  "Tailwind CSS": "logos:tailwindcss-icon",
  TypeScript: "logos:typescript-icon",
  "Vue JS": "logos:vue",
  "React JS": "logos:react",
  Angular: "logos:angular-icon",
  Nuxt: "logos:nuxt-icon",
  "Next JS": "logos:nextjs-icon",
  GIT: "logos:git-icon",
  NPM: "logos:npm",
  "Search Engine Optimization": "tabler:seo",
  HTML: "logos:html-5",
  CSS: "logos:css-3",
  JavaScript: "logos:javascript",
  Python: "logos:python",
  Django: "logos:django",
  "Django Rest Framework": "devicon-plain:djangorest",
  "Amazon Web Services": "logos:aws",
  Nginx: "logos:nginx",
  Jenkins: "logos:jenkins",
  "Github Actions": "logos:github-actions",
  Docker: "logos:docker-icon",
  PostgreSQL: "logos:postgresql",
  Firebase: "logos:firebase",
  Bash: "simple-icons:gnubash",
  Redis: "logos:redis",
};

const technology = (name) => ({
  id: name,
  name,
  icon_name: icons[name] || "hugeicons:code",
});
const technologies = (names) => names.map(technology);
const descriptions = (items) =>
  items.map((content, index) => ({ id: `${index + 1}`, content }));

const skillGroupDefinitions = [
  {
    id: "ai-tools",
    title: "AI-assisted development",
    description: "AI tools I use to explore, build, and refine products.",
    icon: "hugeicons:artificial-intelligence-04",
    skills: ["Claude", "Cursor", "Codex", "Grok Bot"],
  },
  {
    id: "delivery",
    title: "Workflow & delivery",
    description: "Tools for planning work and shipping it reliably.",
    icon: "hugeicons:workflow-square-10",
    skills: ["Jira", "GIT", "NPM", "Github Actions", "Jenkins", "Search Engine Optimization"],
  },
  {
    id: "engineering",
    title: "Product engineering",
    description: "The frontend and backend foundations behind the products I build.",
    icon: "hugeicons:code",
    skills: [
      "Tailwind CSS", "TypeScript", "Vue JS", "React JS", "Angular", "Nuxt", "Next JS",
      "HTML", "CSS", "JavaScript", "Python", "Django", "Django Rest Framework",
    ],
  },
  {
    id: "cloud-operations",
    title: "Cloud & operations",
    description: "Infrastructure for deploying, managing, and maintaining software.",
    icon: "hugeicons:cloud-server",
    skills: [
      "AWS", "Linux", "Server Management", "VPS", "Docker", "Nginx", "PostgreSQL",
      "Firebase", "Bash", "Redis",
    ],
  },
];

export const skillGroups = skillGroupDefinitions.map((group) => ({
  ...group,
  skills: technologies(group.skills),
}));

export const skills = skillGroups.flatMap((group) => group.skills);

export const education = [
  {
    id: "university-of-ghana",
    institution: "University of Ghana",
    degree: "Bachelor's degree",
    program: "Computer Science",
    date_started: "2016-08-01",
    date_completed: "2020-08-01",
  },
  {
    id: "safe-devops",
    institution: "Certificate",
    program: "Certified SAFe® 6 DevOps Practitioner",
    date_started: "2023-01-01",
    date_completed: "2023-03-01",
  },
  {
    id: "psm-i",
    institution: "Certificate",
    program: "Professional Scrum Master I",
    date_started: "2024-03-01",
    date_completed: "2024-05-01",
  },
];

export const experience = [
  {
    id: "ayadata",
    company_name: "AyaData",
    role: "FullStack Developer",
    employment_type: "Full-time",
    link: "https://ayadata.ai/",
    location: "Remote",
    start_date: "2025-10-01",
    skills: technologies([
      "TypeScript",
      "React JS",
      "Angular",
      "Python",
      "Django",
      "Django Rest Framework",
      "Amazon Web Services",
      "Nginx",
      "Github Actions",
      "Docker",
      "PostgreSQL",
      "Firebase",
      "Bash",
      "Redis",
    ]),
    descriptions: descriptions([
      "Contributed to AyaGrow, an agricultural intelligence platform that turns aerial imagery and field data into tree- and block-level insights for farm managers and agribusinesses.",
      "Developed geospatial dashboards with Angular and MapTiler to render farm maps, layers, markers, and boundary polygons.",
      "Designed backend APIs for farm structures, worker management, operational tasks, harvesting workflows, and analytics data.",
      "Managed and maintained the application on AWS EC2.",
      "Sole developer of ClientFlow, an internal project management application for tracking and managing ongoing projects.",
    ]),
  },
  {
    id: "datrix-tech-solutions",
    company_name: "Datrix Tech Solutions",
    role: "Front-end Developer",
    employment_type: "Full-time",
    link: "https://datrixtechsolutions.com/",
    location: "ARS, Ogbojo - Ghana",
    start_date: "2023-09-01",
    skills: technologies([
      "Tailwind CSS",
      "TypeScript",
      "React JS",
      "Next JS",
      "GIT",
      "NPM",
      "Search Engine Optimization",
    ]),
    descriptions: descriptions([
      "Created interactive interfaces and responsive web applications for different screen sizes.",
      "Collaborated with back-end developers to optimize performance and ensure cross-browser compatibility.",
      "Delivered web applications with intuitive designs and efficient functionality.",
    ]),
  },
  {
    id: "lean-icon",
    company_name: "Lean Icon Technology and Training",
    display_name: "Lean Icon Technology",
    role: "Front-end Developer",
    employment_type: "Full-time",
    link: "https://leanicontechnology.com/",
    location: "Kotobabi, Accra - Ghana",
    start_date: "2022-01-01",
    skills: technologies([
      "Tailwind CSS",
      "TypeScript",
      "Vue JS",
      "Angular",
      "Nuxt",
      "GIT",
      "NPM",
      "Search Engine Optimization",
    ]),
    descriptions: descriptions([
      "Improved overall website performance for mobile users.",
      "Collaborated with back-end developers and web designers to improve usability.",
      "Applied search engine optimization to improve website visibility and reach.",
    ]),
  },
  {
    id: "freelance",
    company_name: "Freelance",
    role: "Full-stack Web Engineering",
    employment_type: "Freelance",
    link: "",
    location: "Remote",
    start_date: "2020-06-01",
    skills: technologies([
      "Tailwind CSS",
      "TypeScript",
      "Vue JS",
      "React JS",
      "Nuxt",
      "Next JS",
      "GIT",
      "NPM",
      "Search Engine Optimization",
      "Python",
      "Django",
      "Django Rest Framework",
    ]),
    descriptions: descriptions([
      "Designed and built full-stack web applications using Django for the backend and React or Next.js for the frontend.",
      "Created scalable, secure, and user-friendly platforms tailored to client needs.",
      "Handled API development, database integration, responsive UI design, and deployment.",
    ]),
  },
];

const project = (id, title, image, liveLink, stack) => ({
  id,
  title,
  image_url: `/images/portfolio/${image}.png`,
  live_link: liveLink,
  skills: technologies(stack),
});

export const projects = [
  {
    id: "very-demure-shopping-with-frimpomaa",
    title: "The Very Demure Shopping with Frimpomaa",
    image_url: "/images/portfolio/frimpomaa-store-photo.png",
    live_link: "https://theverydemureshoppingwithfrimpomaa.com/",
    summary:
      "A mobile-first store that brings orders, payments, inventory, fulfilment, and reporting into one place.",
    result: "Supported 100+ orders during the initial operating period.",
    metric: "100+",
    metric_label: "orders processed",
    skills: [
      { id: "e-commerce", name: "E-commerce" },
      { id: "operations", name: "Orders · Finance · Reports" },
    ],
  },
  {
    id: "ayagrow",
    title: "AyaGrow",
    image_url: "/images/portfolio/ayagrow.svg",
    summary:
      "Agricultural intelligence that turns aerial imagery and field data into farm maps and tree- and block-level insights.",
    result: "Geospatial dashboards and operational workflows for farm teams.",
    metric: "Farm",
    metric_label: "mapping & operations",
    skills: [
      { id: "geospatial", name: "Geospatial dashboards" },
      { id: "farm-ops", name: "Farm operations" },
    ],
  },
  {
    id: "ayadata-skynet",
    title: "AyaData Skynet",
    image_url: "/images/portfolio/skynet-dashboard.png",
    summary:
      "A workforce platform that replaced spreadsheet tracking with task-level activity, dashboards, and consolidated reports.",
    result: "One operational view for annotators, team leads, and executives.",
    metric: "400+",
    metric_label: "platform users",
    skills: [
      { id: "workforce", name: "Workforce operations" },
      { id: "reporting", name: "Tracking · Reporting" },
    ],
  },
  {
    id: "coding-with-sir-chris",
    title: "Coding With Sir Chris",
    image_url: "/images/portfolio/coding-with-sir-chris-dashboard.png",
    live_link: "https://codingwithsirchris.com/",
    summary:
      "A structured learning platform connecting courses, lessons, assignments, payments, and mentor sessions.",
    result: "Launched with three courses and about 20 active students.",
    metric: "50+",
    metric_label: "students served",
    skills: [
      { id: "learning", name: "Learning platform" },
      { id: "mentorship", name: "Courses · Mentorship" },
    ],
  },
  {
    ...project(
      "skuldent",
      "Skuldent",
      "skuldent",
      "https://skuldent.netlify.app/",
      ["Tailwind CSS", "Nuxt", "Search Engine Optimization"],
    ),
    summary:
      "A responsive dental care website built to make services and key information easy to find.",
  },
  {
    ...project(
      "black-konnect",
      "Black Konnect",
      "blackkonnect",
      "https://portal.dev.blackkonnect.io/",
      ["Tailwind CSS", "TypeScript", "Angular"],
    ),
    summary:
      "An SMS campaign platform with audience groups, targeting rules, and bulk messaging workflows.",
  },
  {
    ...project(
      "hr-phelo",
      "HR Phelo",
      "hrphelo",
      "https://hrphello.vercel.app/",
      ["Tailwind CSS", "TypeScript", "Next JS"],
    ),
    summary:
      "An HR management product designed to bring onboarding, employee records, payroll, tasks, and payments into one workflow.",
  },
  {
    ...project(
      "blueprint-care",
      "BluePrint Care",
      "blueprintcare",
      "https://blueprintcarellc.com/",
      ["Tailwind CSS", "TypeScript", "Next JS", "Search Engine Optimization"],
    ),
    summary:
      "A responsive business website built to make care services clear and accessible across devices.",
  },
  {
    ...project("bibiaa", "Bibiaa", "bibiaa", "https://bibiaaonline.com/", [
      "Tailwind CSS",
      "TypeScript",
      "Next JS",
    ]),
    summary:
      "A multi-vendor marketplace where sellers create storefronts and customers discover and buy products in one place.",
  },
  project(
    "litt-digital-academy",
    "Litt Digital Academy",
    "lda",
    "https://littdigitalacademy.org/",
    ["Tailwind CSS", "Nuxt", "Search Engine Optimization"],
  ),
  {
    ...project(
      "gh-compare",
      "Gh Compare",
      "ghcompare",
      "https://ghcompare.com/",
      ["Tailwind CSS", "Vue JS", "Search Engine Optimization"],
    ),
    summary:
      "An insurance comparison and purchasing journey rebuilt around quote discovery, information capture, comparison, and purchase.",
  },
  project(
    "modern-auto-motors",
    "Modern Auto Motors",
    "mam",
    "https://mam.co.bw/",
    ["Tailwind CSS", "Nuxt", "Search Engine Optimization"],
  ),
  {
    ...project("nnuro", "Nnuro", "nnuro", "https://nnuro.com/", [
      "Tailwind CSS",
      "Vue JS",
    ]),
    summary:
      "A pharmaceutical marketplace connecting wholesalers, retailers, suppliers, and customers across inventory, orders, invoicing, and sales.",
  },
  project(
    "product-growth-institute",
    "Product Growth Institute",
    "pgi",
    "https://productgrowthinstitute.org/",
    ["Tailwind CSS", "Nuxt", "Search Engine Optimization"],
  ),
];

export const featuredProjects = [
  {
    id: "frimpomaa",
    title: "The Very Demure Shopping with Frimpomaa",
    label: "E-COMMERCE · BUSINESS OPERATIONS",
    image: "/images/portfolio/frimpomaa-store-photo.png",
    alt: "The Very Demure Shopping product catalogue, with shop filters and product listings",
    link: "https://theverydemureshoppingwithfrimpomaa.com/",
    linkLabel: "Visit the store",
    tags: ["Online orders", "Transactions", "Finance", "Reports"],
    summary:
      "One online store for orders, payments, inventory, fulfilment, and reports—built around how the business runs each day.",
    result:
      "She can manage the business in one place, making everyday operations much easier.",
    value:
      "Orders, transactions, finances, and reports are together on one site, making day-to-day business much easier.",
    metric: "100+",
    metricLabel: "orders supported",
  },
  {
    id: "coding-with-sir-chris",
    title: "Coding With Sir Chris",
    label: "ONLINE LEARNING · SELF-PACED COURSES",
    image: "/images/portfolio/coding-with-sir-chris-dashboard.png",
    alt: "Coding With Sir Chris student dashboard with courses, assignments, mentor sessions, and progress",
    link: "https://codingwithsirchris.com/",
    linkLabel: "Visit Coding With Sir Chris",
    tags: ["Courses", "Lessons", "Assignments", "Mentorship"],
    summary:
      "A simple learning platform that brings courses, lessons, and resources together so students can focus on learning at their own pace.",
    result:
      "More than 50 students served with structured learning paths and centralized resources.",
    value:
      "Students spend less time figuring out the platform and finding materials, and more time building practical skills at their own pace.",
    metric: "50+",
    metricLabel: "students served",
  },
  {
    id: "skynet",
    title: "Skynet",
    label: "INTERNAL PLATFORM · WORKFORCE OPERATIONS",
    image: "/images/portfolio/skynet-dashboard.png",
    alt: "Skynet workforce operations dashboard showing project hours, clients, and team activity",
    tags: ["Time tracking", "Team verification", "Project hours", "Reporting"],
    summary:
      "Annotators track sessions in one place, team leads verify hours, and managers see project activity.",
    result:
      "Less spreadsheet consolidation, with clearer hours for finance teams and clients—and time and earnings visibility for freelancers.",
    value:
      "A fragmented tracking process becomes one shared workflow, giving teams clearer hours and reducing manual coordination.",
    metric: "400+",
    metricLabel: "annotators supported",
  },
];
