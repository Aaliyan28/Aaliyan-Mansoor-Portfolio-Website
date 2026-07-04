// Single source of truth for all portfolio content.

export const site = {
  name: "Aaliyan Mansoor",
  role: "Computer Systems Engineer",
  tagline: "Engineering intelligence — from silicon to story.",
  summary:
    "Computer Systems Engineer, full-stack developer, and published AI/Vision researcher. I architect scalable web platforms, deploy machine-learning models at the edge, and translate complex technical work into crystal-clear writing.",
  location: "Karachi, Pakistan",
  github: "https://github.com/Aaliyan28",
  linkedin: "https://www.linkedin.com/in/aaliyanmansoor",
  cvPath: "/Aaliyan-Mansoor-CV.pdf",
};

export const heroRoles = [
  "Computer Systems Engineer",
  "AI / Computer Vision Researcher",
  "Full-Stack Developer",
  "Technical Writer",
];

export const heroCarousel = [
  {
    src: "/images/pic3.jpeg",
    alt: "Aaliyan in front of the Computer & Information Systems Engineering Department, NED University",
  },
  {
    src: "/images/pic5.jpeg",
    alt: "Aaliyan in Interlaken, Switzerland",
  },
  {
    src: "/images/pic7.jpg",
    alt: "Aaliyan on an industrial site visit in Italy",
  },
];

export const stats = [
  { value: "4+", label: "Years of building" },
  { value: "5", label: "Shipped projects" },
  { value: "2", label: "Research papers" },
  { value: "8.0", label: "IELTS band (C1)" },
];

export type Chapter = {
  id: string;
  period: string;
  title: string;
  place: string;
  kicker: string;
  description: string;
  highlights?: string[];
  image?: { src: string; alt: string };
};

export const journey: Chapter[] = [
  {
    id: "o-levels",
    period: "2017 – 2019",
    kicker: "Chapter 01 — The Foundation",
    title: "O Levels (GCE Ordinary Level)",
    place: "Chapter And Verse, Karachi",
    description:
      "Where the story begins — Cambridge O Levels built the discipline and curiosity that everything since has been stacked on.",
  },
  {
    id: "a-levels",
    period: "2019 – 2021",
    kicker: "Chapter 02 — First Leadership",
    title: "A Levels (GCE Advanced Level)",
    place: "Highbrow College, Karachi",
    description:
      "Alongside Cambridge A Levels, I founded and presided over the Highbrow E-Sports Society — building a team from zero and running two inter-college tournaments in consecutive years.",
    highlights: [
      "President & founding member, Highbrow E-Sports Society",
      "Organized two inter-college e-sports tournaments",
      "Official Letter of Appreciation from the college",
    ],
  },
  {
    id: "university",
    period: "2021 – 2025",
    kicker: "Chapter 03 — The Engineer",
    title: "BE, Computer & Information Systems Engineering",
    place: "NED University of Engineering & Technology, Karachi",
    description:
      "135 credit hours across systems, software, and machine intelligence — the years where code, hardware, and research converged.",
    highlights: [
      "IC Design Summer School 2024 — 12-week program (NED / NCL)",
      "IBM & DeepLearning.AI data-science certifications",
    ],
    image: { src: "/images/pic3.jpeg", alt: "Aaliyan at the CIS Engineering Department, NED University" },
  },
  {
    id: "ncai",
    period: "Nov 2023 – Jan 2024",
    kicker: "Chapter 04 — First Research",
    title: "Research Intern — Computer Vision & ML",
    place: "National Center of Artificial Intelligence (NCAI)",
    description:
      "Hands-on with real industrial data: preprocessing steel-rod image datasets, applying classical vision techniques, and training supervised models for defect classification with Python and OpenCV.",
    highlights: [
      "Thresholding, Canny edge detection, contour analysis",
      "Defect classification models across imaging conditions",
    ],
  },
  {
    id: "fyp",
    period: "Aug 2024 – Jun 2025",
    kicker: "Chapter 05 — The Flagship",
    title: "Machine Vision on FPGA — Final Year Project",
    place: "In collaboration with Agriauto Industries Ltd.",
    description:
      "A research-driven deep-learning pipeline for automated steel surface defect detection, deployed at the edge. Benchmarked YOLOv5 variants, selected YOLOv5n (mAP50 0.989), applied INT8 quantization with Vitis AI, and deployed on an Avnet Ultra96-V2 FPGA SoC at 16 FPS on 5.7 W.",
    highlights: [
      "Selected among NED's top 33 projects — NEDAASC FYDP Funding 2024–25",
      "mAP50 0.989 → 0.933 post-INT8 quantization",
      "16 FPS at 5.7 W on Avnet Ultra96-V2",
    ],
  },
  {
    id: "graduation",
    period: "Sept 2025",
    kicker: "Chapter 06 — The Launch",
    title: "Graduation — and a published researcher",
    place: "NED University, 34th Convocation",
    description:
      "Graduated as a published AI/Vision researcher with industry collaborations, shipped client platforms, and a second paper under review. The story is just getting started.",
    image: { src: "/images/pic1.jpeg", alt: "Aaliyan at the NED University 34th Convocation" },
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Computer Vision Engineer",
    org: "In collaboration with Agriauto Industries",
    period: "Aug 2024 – Jun 2025",
    location: "Karachi, Pakistan",
    points: [
      "Designed a real-time machine-vision pipeline for steel surface defect detection using YOLO architectures on an FPGA SoC (Avnet Ultra96-V2).",
      "Managed end-to-end data pipelines with advanced augmentation, optimized with Vitis AI to maximize FPS at the edge.",
      "Authored a highly-commended technical report on hardware utilization, architectural efficiency, and inference metrics.",
    ],
    tags: ["YOLO", "Vitis AI", "FPGA SoC", "Python"],
  },
  {
    role: "Data Science Intern",
    org: "National Center of Artificial Intelligence (NCAI)",
    period: "Nov 2023 – Jan 2024",
    location: "Karachi, Pakistan",
    points: [
      "Collected and preprocessed industrial rod image datasets for vision-based defect detection.",
      "Applied thresholding, Canny edge detection, and Laplacian of Gaussian to identify defective components.",
      "Translated technical findings into actionable research reports.",
    ],
    tags: ["OpenCV", "Image Processing", "Research"],
  },
  {
    role: "Freelance Developer & Writer",
    org: "Independent — clients in UAE, Portugal & Pakistan",
    period: "2022 – Present",
    location: "Remote",
    points: [
      "Shipped full-stack platforms for logistics, industrial trading, and luxury-charter clients.",
      "Delivered SEO content and technical copy across tech and consumer-health niches.",
    ],
    tags: ["React", "Node.js", "SEO", "Copywriting"],
  },
];

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  period: string;
  description: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  github?: string;
  poster?: string;
  featured?: boolean;
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "steel-defect-fpga",
    name: "Steel Surface Defect Detection on FPGA SoC",
    subtitle: "Edge AI · Machine Vision · Research",
    period: "2024 – 2025",
    description:
      "Research-driven deep-learning pipeline for automated steel surface inspection, benchmarking YOLOv5 variants and deploying an INT8-quantized YOLOv5n on an Avnet Ultra96-V2 — real-time industrial QA at the edge, in collaboration with Agriauto Industries.",
    stack: ["Python", "YOLOv5", "Vitis AI", "FPGA SoC", "OpenCV"],
    metrics: [
      { value: "0.989", label: "mAP50 (fp32)" },
      { value: "16 FPS", label: "on-device inference" },
      { value: "5.7 W", label: "power draw" },
    ],
    github: "https://github.com/Aaliyan28/Steel-Surface-Defect-Detection-on-FPGA-SoC",
    poster: "/images/fyp-poster.png",
    featured: true,
    image: { src: "/images/pic4.jpeg", alt: "FYP poster presentation" },
  },
  {
    slug: "centaurus-charter",
    name: "Centaurus Charter",
    subtitle: "Luxury Yacht Booking Platform · Dubai",
    period: "Oct 2024 – Jan 2025",
    description:
      "High-conversion consumer booking platform for a Dubai-based luxury yacht charter — dynamic fleet catalog filtering, internationalization, and Core Web Vitals tuned for global SEO.",
    stack: ["React", "TypeScript", "Tailwind CSS", "i18n", "SEO"],
  },
  {
    slug: "ami-co",
    name: "AMI CO",
    subtitle: "B2B Industrial Trading Platform",
    period: "Feb 2026 – Mar 2026",
    description:
      "Full-stack B2B product catalogue and lead-generation platform — React 19, Vite 7, Tailwind v4, with end-to-end cloud deployment on Railway, DNS management, and Resend email integration.",
    stack: ["React 19", "Vite 7", "Tailwind v4", "Railway", "Resend"],
    github: "https://github.com/Aaliyan28/amipk-website",
  },
  {
    slug: "global-freight",
    name: "Global Freight PK & GloPro",
    subtitle: "Corporate Web Presence · Pakistan & Portugal",
    period: "Sep 2025 – Nov 2025",
    description:
      "Engineered the digital presence for Global Freight Pakistan and its Portugal-based sister company GloPro — robust deployments with 3D brand modeling built in Spline.",
    stack: ["React", "Spline 3D", "Deployment", "Branding"],
    github: "https://github.com/Aaliyan28/global-freight-pk",
  },
  {
    slug: "whatsapp-chatbot",
    name: "WhatsApp Diamond Chatbot",
    subtitle: "Conversational Commerce Automation",
    period: "2024",
    description:
      "Automated WhatsApp chatbot for product inquiry and ordering flows — conversational commerce plumbed straight into a business's most-used channel.",
    stack: ["Node.js", "WhatsApp API", "Automation"],
    github: "https://github.com/Aaliyan28/whatsapp-diamond-chatbot",
  },
];

export type Publication = {
  title: string;
  venue: string;
  detail: string;
  year: string;
  status: "Published" | "Under review";
  authors: string;
  doi?: string;
  pdf?: string;
};

export const publications: Publication[] = [
  {
    title:
      "A Comparative Assessment of YOLO Nano Architectures for High-Speed and Accurate Steel Surface Inspection",
    venue: "Advances in Science and Technology Research Journal (ASTRJ)",
    detail: "Vol. 20, Issue 3, pp. 29–46",
    year: "2026",
    status: "Published",
    authors: "F. Aftab, M. B. Ali, M. M. Khan, A. Mansoor, M. Ud Din, M. Kazmi",
    doi: "https://doi.org/10.12913/22998624/212538",
    pdf: "/papers/Aaliyan-Mansoor-YOLO-Nano-Steel-Inspection-ASTRJ-2026.pdf",
  },
  {
    title:
      "Secure Edge Deployment of Machine Vision System on FPGA Platform: Reducing Cloud-Related Privacy and Security Risks",
    venue: "International Conference on Cyberworlds (CW 2026)",
    detail: "Track 1: Visual and Interactive Computing",
    year: "2026",
    status: "Under review",
    authors: "F. Aftab, M. Kazmi, M. B. Ali, A. Mansoor, M. Ud Din, M. M. Khan",
  },
];

export type WritingPiece = {
  title: string;
  niche: string;
  type: string;
  pdf: string;
};

export const writingPieces: WritingPiece[] = [
  {
    title: "ASUS TUF Gaming FX705 — Full Review",
    niche: "Tech & Hardware",
    type: "Product Review",
    pdf: "/writing/asus-tuf-gaming-fx705-review.pdf",
  },
  {
    title: "Best Corsair Headsets",
    niche: "Tech & Hardware",
    type: "Buyer's Guide",
    pdf: "/writing/best-corsair-headsets.pdf",
  },
  {
    title: "10 Best Fat Burner Pills",
    niche: "Health & Wellness",
    type: "SEO Listicle",
    pdf: "/writing/10-best-fat-burner-pills.pdf",
  },
  {
    title: "Best Appetite Suppressants",
    niche: "Health & Wellness",
    type: "SEO Listicle",
    pdf: "/writing/best-appetite-suppressants.pdf",
  },
];

export const skillGroups = [
  {
    name: "AI & Machine Vision",
    skills: ["Python", "OpenCV", "YOLO", "Machine Learning", "Vitis AI", "FPGA SoC", "Digital Image Processing", "pandas / numpy"],
  },
  {
    name: "Frontend & Web",
    skills: ["React 19", "TypeScript", "Next.js", "Tailwind CSS v4", "Vite", "Node.js", "Express", "Railway"],
  },
  {
    name: "Writing & Research",
    skills: ["Academic Writing", "Technical Documentation", "Whitepapers", "SEO Content", "Comparative Analysis", "Research Publication"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { name: "Academic IELTS — Band 8.0 (CEFR C1)", issuer: "British Council", year: "2025" },
  { name: "Google Prompting Essentials Specialization", issuer: "Google", year: "2025" },
  { name: "IC Design Summer School — 12 weeks", issuer: "NED University / NCL", year: "2024" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM (Coursera)", year: "2024" },
  { name: "Probability & Statistics for ML & Data Science", issuer: "DeepLearning.AI (Coursera)", year: "2024" },
  { name: "Data Science Methodology", issuer: "IBM (Coursera)", year: "2024" },
  { name: "Tools for Data Science", issuer: "IBM (Coursera)", year: "2024" },
];

export const awards = [
  {
    name: "NEDAASC FYDP Funding 2024–25",
    detail: "Selected among the top 33 Final Year Design Projects across NED University.",
    year: "2025",
  },
  {
    name: "President & Founding Member — Highbrow E-Sports Society",
    detail: "Founded the society and ran two successful inter-college tournaments.",
    year: "2021",
  },
];

export const navLinks = [
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];
