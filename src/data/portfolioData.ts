export interface NavLink {
  href: string;
  vi: string;
  en: string;
}

export interface ContactInfo {
  email: string;
  secondaryEmail: string;
  phone: string;
  linkedin: string;
  github: string;
  location: {
    vi: string;
    en: string;
  };
}

export interface SocialLink {
  href: string;
  icon: string;
  label: {
    vi: string;
    en: string;
  };
}

export interface StatItem {
  value: string;
  label: {
    vi: string;
    en: string;
  };
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: string[];
}

export interface SoftSkill {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  icon: string;
  iconColor: string;
}

export interface OutstandingStrength {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  icon: string;
  iconColor: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  color: string;
  project: string;
  technologies: string[];
  responsibilities: {
    vi: string;
    en: string;
  }[];
  links: string[];
}

export interface ExperienceContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  items: ExperienceItem[];
}

export interface HeroContent {
  greeting: {
    vi: string;
    en: string;
  };
  name: {
    vi: string;
    en: string;
  };
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  shortDescription: {
    vi: string;
    en: string;
  };
  availability: {
    vi: string;
    en: string;
  };
  yearsExperience: string;
  buttons: {
    contact: {
      vi: string;
      en: string;
    };
    resume: {
      vi: string;
      en: string;
    };
    cv: {
      vi: string;
      en: string;
    };
  };
}

export interface AboutHighlight {
  text: {
    vi: string;
    en: string;
  };
  icon: string;
}

export interface AboutContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  stats: StatItem[];
  description1: {
    vi: string;
    en: string;
  };
  description2: {
    vi: string;
    en: string;
  };
  description3: {
    vi: string;
    en: string;
  };
  highlights: AboutHighlight[];
  contactInfo: ContactInfo;
}

export interface SkillsContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  categories: SkillCategory[];
  softSkillsTitle: {
    vi: string;
    en: string;
  };
  softSkills: SoftSkill[];
}

export interface OutstandingStrengthsContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  strengths: OutstandingStrength[];
}

export interface EducationItem {
  institution: {
    vi: string;
    en: string;
  };
  major: {
    vi: string;
    en: string;
  };
  period: string;
  color: string;
}

export interface LanguageItem {
  language: {
    vi: string;
    en: string;
  };
  proficiency: {
    vi: string;
    en: string;
  };
  color: string;
}

export interface EducationContent {
  title: {
    vi: string;
    en: string;
  };
  items: EducationItem[];
}

export interface LanguagesContent {
  title: {
    vi: string;
    en: string;
  };
  items: LanguageItem[];
}

export interface ContactContent {
  title: {
    vi: string;
    en: string;
  };
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  contactInfoTitle: {
    vi: string;
    en: string;
  };
  contactInfo: ContactInfo;
  form: {
    namePlaceholder: {
      vi: string;
      en: string;
    };
    emailPlaceholder: {
      vi: string;
      en: string;
    };
    messagePlaceholder: {
      vi: string;
      en: string;
    };
    submitButton: {
      vi: string;
      en: string;
    };
    sendingButton: {
      vi: string;
      en: string;
    };
    successMessage: {
      vi: string;
      en: string;
    };
  };
}

export interface FooterContent {
  name: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  socialLinks: SocialLink[];
  copyright: {
    vi: string;
    en: string;
  };
}

export interface SelectedWorkProject {
  title: {
    vi: string;
    en: string;
  };
  company: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  technologies: string[];
  url?: string;
}

export interface SelectedWorkContent {
  headline: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  searchPlaceholder: {
    vi: string;
    en: string;
  };
  allFilterLabel: {
    vi: string;
    en: string;
  };
  filters: string[];
  projects: SelectedWorkProject[];
}

export interface PortfolioData {
  navigation: NavLink[];
  hero: HeroContent;
  selectedWork: SelectedWorkContent;
  about: AboutContent;
  skills: SkillsContent;
  strengths: OutstandingStrengthsContent;
  education: EducationContent;
  languages: LanguagesContent;
  experience: ExperienceContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const portfolioData: PortfolioData = {
  navigation: [
    { href: "#home", vi: "Trang chủ", en: "Home" },
    { href: "#about", vi: "Giới thiệu", en: "About" },
    { href: "#skills", vi: "Kỹ năng", en: "Skills" },
    { href: "#strengths", vi: "Điểm mạnh", en: "Strengths" },
    { href: "#experience", vi: "Kinh nghiệm", en: "Experience" },
    {
      href: "#education-languages",
      vi: "Học vấn & Ngôn ngữ",
      en: "Education & Languages",
    },
    {
      href: "#selected-work",
      vi: "Dự án",
      en: "Projects",
    },
    { href: "#contact", vi: "Liên hệ", en: "Contact" },
  ],

  hero: {
    greeting: {
      vi: "Xin chào, tôi là",
      en: "Hello, I'm",
    },
    name: {
      vi: "Nguyễn Phi Trường",
      en: "Nguyen Phi Truong",
    },
    title: {
      vi: "Senior Frontend Developer",
      en: "Senior Frontend Developer",
    },
    description: {
      vi: "Tôi là Senior Frontend Developer với hơn 6 năm kinh nghiệm phát triển ứng dụng web và các sản phẩm SaaS sử dụng ReactJS, Next.js và TypeScript. Tôi có nhiều kinh nghiệm trong việc xây dựng các giao diện người dùng hiệu năng cao, đáp ứng tốt trên nhiều thiết bị và triển khai các hệ thống phức tạp như LMS (Learning Management System), CRM (Customer Relationship Management) và HRM (Human Resource Management). Với nền tảng Fullstack vững chắc trên PHP/Laravel và MySQL, tôi có khả năng kết nối hiệu quả giữa frontend và backend, góp phần xây dựng các ứng dụng có khả năng mở rộng cao, dễ bảo trì và vận hành ổn định.",
      en: "I am a Senior Frontend Developer with 6+ years of experience building web applications and SaaS products using ReactJS, Next.js, and TypeScript. I have extensive experience developing high-performance, responsive user interfaces and delivering complex systems such as LMS, CRM, and HRM platforms. With a strong Fullstack foundation in PHP/Laravel and MySQL, I effectively bridge frontend and backend development to build scalable, maintainable, and reliable applications."
    },
    shortDescription: {
      vi: "Senior Frontend Developer với hơn 6 năm xây dựng sản phẩm SaaS hiệu năng cao bằng React, Next.js & TypeScript. Nền tảng Fullstack vững với PHP/Laravel — triển khai các nền tảng LMS, CRM và HRM có khả năng mở rộng cho nhiều tổ chức.",
      en: "Senior Frontend Developer with 6+ years building high-performance SaaS products in React, Next.js & TypeScript. Strong fullstack foundation in PHP/Laravel — shipping scalable LMS, CRM and HRM platforms used by teams across multiple organizations.",
    },
    availability: {
      vi: "Sẵn sàng cho cơ hội mới",
      en: "Available for new opportunities",
    },
    yearsExperience: "6+",
    buttons: {
      contact: {
        vi: "Liên hệ",
        en: "Contact Me",
      },
      resume: {
        vi: "Tải CV",
        en: "Download CV",
      },
      cv: {
        vi: "/cv/CV_Senior_Frontend_Developer_Nguyen_Phi_Truong_VI.pdf",
        en: "/cv/CV_Senior_Frontend_Developer_Nguyen_Phi_Truong_EN.pdf",
      },
    },
  },

  selectedWork: {
    headline: {
      vi: "Dự án tiêu biểu",
      en: "Selected work",
    },
    subtitle: {
      vi: "Tổng quan các sản phẩm tôi đã triển khai trong SaaS, giáo dục, nhân sự và logistics.",
      en: "A snapshot of products I've shipped across SaaS, education, HR and logistics.",
    },
    searchPlaceholder: {
      vi: "Tìm kiếm dự án...",
      en: "Search projects...",
    },
    allFilterLabel: {
      vi: "Tất cả",
      en: "All",
    },
    filters: [
      "Next.js",
      "TypeScript",
      "ShadCN UI",
      "WebSocket",
      "REST",
      "ReactJS",
      "Laravel",
    ],
    projects: [
      {
        title: {
          vi: "Edutify — SaaS LMS",
          en: "Edutify — SaaS LMS",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Thiết kế và triển khai bộ sản phẩm giáo dục SaaS (LMS + Test Platform + CRM) với Next.js, TypeScript và ShadCN UI.",
          en: "Designed and shipped a SaaS education suite (LMS + Test Platform + CRM) with Next.js, TypeScript and ShadCN UI.",
        },
        technologies: ["Next.js", "TypeScript", "ShadCN UI", "WebSocket"],
        url: "https://dash.edutify.io",
      },
      {
        title: {
          vi: "HPM — SaaS Hosting Provider Management",
          en: "Hosting Provider Management (HPM) — SaaS",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Thiết kế nền tảng SaaS quản lý nhà cung cấp hosting với Next.js và ShadCN UI.",
          en: "Designed a SaaS platform for hosting providers in Next.js + ShadCN UI.",
        },
        technologies: ["Next.js", "TypeScript", "ShadCN UI", "WebSocket"],
        url: "https://portal.system443.com",
      },
      {
        title: {
          vi: "The IELTS Workshop — CRM",
          en: "The IELTS Workshop — CRM",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Nâng cấp CRM quản lý học viên, khóa học, hợp đồng và thanh toán.",
          en: "Upgraded CRM for student, course, contract and payment management.",
        },
        technologies: ["Next.js", "TypeScript", "ShadCN UI"],
        url: "https://newcrm.tiw.vn",
      },
      {
        title: {
          vi: "Pasal LMS",
          en: "Pasal LMS",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Phát triển và nâng cấp module LMS cho học viên, bài test, lớp học và theo dõi tiến độ.",
          en: "Developed and enhanced LMS modules for students, tests, classes and progress tracking.",
        },
        technologies: ["Next.js", "TypeScript", "ShadCN UI"],
        url: "https://online.pasal.edu.vn",
      },
      {
        title: {
          vi: "Qualee — HRM SaaS",
          en: "Qualee — HRM SaaS",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Xây dựng nền tảng HRM Qualee với ReactJS, TypeScript và Laravel.",
          en: "Built the Qualee HRM platform with ReactJS, TypeScript and Laravel.",
        },
        technologies: ["ReactJS", "TypeScript", "Laravel", "WebSocket"],
        url: "https://console.qualee.com",
      },
      {
        title: {
          vi: "PNP Global Supply — Logistics CRM",
          en: "PNP Global Supply — Logistics CRM",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Xây dựng CRM logistics với ReactJS, Ant Design và WebSocket.",
          en: "Built logistics CRM with ReactJS + Ant Design + WebSocket.",
        },
        technologies: ["ReactJS", "Ant Design", "Laravel", "MySQL"],
        url: "https://console.pnpglobalsupply.com",
      },
      {
        title: {
          vi: "Transportme — AU Bus Transportation",
          en: "Transportme — AU Bus Transportation",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Xây dựng nền tảng Transportme với VueJS, Vuetify và CodeIgniter.",
          en: "Built the Transportme platform with VueJS, Vuetify and CodeIgniter.",
        },
        technologies: ["VueJS", "Vuetify", "CodeIgniter", "MySQL"],
        url: "https://transportme.com.au",
      },
      {
        title: {
          vi: "E-commerce & Corporate Websites",
          en: "E-commerce & Corporate Websites",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Triển khai các dự án thương mại điện tử với ReactJS, Vue.js, Bootstrap và Shopify.",
          en: "Shipped e-commerce projects with ReactJS, Vue.js, Bootstrap and Shopify.",
        },
        technologies: ["ReactJS", "Vue.js", "Next.js", "Shopify"],
        url: "https://www.sanctuaryclothing.com",
      },
    ],
  },

  about: {
    title: {
      vi: "Giới thiệu",
      en: "About Me",
    },
    headline: {
      vi: "Kỹ thuật cho chất lượng & quy mô",
      en: "Engineering for craft & scale",
    },
    stats: [
      {
        value: "6+",
        label: { vi: "Năm kinh nghiệm", en: "Years Experience" },
        color: "text-blue-600 dark:text-blue-400",
      },
      {
        value: "10+",
        label: { vi: "Dự án đã giao", en: "Projects Delivered" },
        color: "text-purple-600 dark:text-purple-400",
      },
      {
        value: "10+",
        label: { vi: "Công nghệ", en: "Technologies" },
        color: "text-green-600 dark:text-green-400",
      },
      {
        value: "99%",
        label: { vi: "Cam kết", en: "Commitment" },
        color: "text-orange-600 dark:text-orange-400",
      },
    ],
    description1: {
      vi: "Tôi xây dựng các nền tảng web production-grade — từ giao diện pixel-perfect đến kiến trúc có khả năng mở rộng. Trọng tâm của tôi là hiệu năng, khả năng bảo trì và sự rõ ràng trong phối hợp.",
      en: "I build production-grade web platforms — from pixel-perfect interfaces to scalable architectures. My focus is performance, maintainability and clarity in collaboration.",
    },
    description2: {
      vi: "Tôi đã dẫn dắt frontend cho các hệ thống LMS, CRM và HRM ở quy mô production — từ bàn giao Figma đến kiến trúc, review code và nhịp triển khai. Nền tảng Fullstack PHP/Laravel giúp tôi làm việc linh hoạt giữa client và server.",
      en: "I've led frontend on LMS, CRM and HRM systems at production scale — from the Figma handoff to the architecture, code review and shipping cadence. My fullstack background in PHP/Laravel lets me move fluently across the seam between client and server.",
    },
    description3: {
      vi: "Chủ động, có trách nhiệm và cam kết với sự tinh xảo lâu dài — cả trong codebase lẫn đội ngũ xung quanh.",
      en: "Proactive, responsible and committed to long-term craftsmanship — both in the codebase and in the team around it.",
    },
    highlights: [
      {
        text: {
          vi: "Thiết kế kiến trúc hệ thống SaaS trong các lĩnh vực Giáo dục, Nhân sự & Logistics",
          en: "Architected SaaS systems across Education, HR & Logistics domains",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Chuyển đổi thiết kế Figma phức tạp thành hệ thống component tái sử dụng",
          en: "Translated complex Figma designs into reusable component systems",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Dẫn dắt code review & quyết định kiến trúc frontend trong team Agile",
          en: "Led code reviews & frontend architecture decisions in Agile teams",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Kết nối frontend & backend với PHP/Laravel & RESTful APIs",
          en: "Bridged frontend & backend with PHP/Laravel & RESTful APIs",
        },
        icon: "fas fa-bolt",
      },
    ],
    contactInfo: {
      email: "truongnpt1998@gmail.com",
      secondaryEmail: "truongnguyen1998.dev@gmail.com",
      phone: "0399812700",
      linkedin: "https://www.linkedin.com/in/truongnguyen1998/",
      github: "https://github.com/truongnpt",
      location: {
        vi: "TP Hồ Chí Minh",
        en: "Ho Chi Minh City",
      },
    },
  },

  skills: {
    title: {
      vi: "Kỹ năng chuyên môn",
      en: "Technical Skills",
    },
    headline: {
      vi: "Công cụ chuyên môn",
      en: "Tools of the trade",
    },
    subtitle: {
      vi: "Bộ công nghệ thực tiễn, được tinh chỉnh qua sáu năm triển khai phần mềm production.",
      en: "A pragmatic stack, refined over six years of shipping production software.",
    },
    categories: [
      {
        title: "Frontend",
        icon: "fas fa-code",
        iconColor: "text-blue-600 dark:text-blue-400",
        skills: [
          "ReactJS",
          "Next.js (SSR/SSG)",
          "TypeScript",
          "Redux",
          "Zustand",
          "React Query",
        ],
      },
      {
        title: "Backend",
        icon: "fas fa-database",
        iconColor: "text-green-600 dark:text-green-400",
        skills: [
          "PHP / Laravel",
          "MySQL",
          "MVC",
          "Query Optimization",
          "REST APIs",
        ],
      },
      {
        title: "UI & Styling",
        icon: "fas fa-palette",
        iconColor: "text-purple-600 dark:text-purple-400",
        skills: [
          "TailwindCSS",
          "ShadCN UI",
          "Ant Design",
          "Styled-Components",
          "SCSS",
          "Figma",
        ],
      },
      {
        title: "API & Data",
        icon: "fas fa-project-diagram",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        skills: [
          "RESTful APIs",
          "WebSocket",
          "Axios / Fetch",
          "Realtime Sync",
        ],
      },
      {
        title: "Performance & SEO",
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Lazy Loading",
          "Code Splitting",
          "SSR/SSG Tuning",
          "Core Web Vitals",
        ],
      },
      {
        title: "Tools & Workflow",
        icon: "fas fa-wrench",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Git / GitHub / GitLab",
          "Docker",
          "Scrum / Agile",
          "AI-Assisted Coding",
        ],
      },
      {
        title: "Testing",
        icon: "fas fa-vial",
        iconColor: "text-green-600 dark:text-green-400",
        skills: ["Jest", "React Testing Library", "Unit Testing"],
      },
    ],
    softSkillsTitle: {
      vi: "Kỹ năng mềm",
      en: "Soft Skills",
    },
    softSkills: [
      {
        title: {
          vi: "Tư duy logic & giải quyết vấn đề",
          en: "Problem-Solving & Analytical Thinking",
        },
        description: {
          vi: "Phân tích yêu cầu nghiệp vụ, xử lý sự cố, debug và tối ưu hệ thống hiệu quả.",
          en: "Strong ability to analyze business requirements, troubleshoot issues, debug applications, and optimize system performance effectively.",
        },
        icon: "fas fa-brain",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Chủ động học hỏi",
          en: "Continuous Learning",
        },
        description: {
          vi: "Nhanh chóng tiếp cận công nghệ, thư viện và công cụ mới để nâng cao chất lượng sản phẩm.",
          en: "Ready to learn new libraries and technologies and apply them in real projects.",
        },
        icon: "fas fa-rocket",
        iconColor: "text-yellow-500 dark:text-yellow-400",
      },
      {
        title: {
          vi: "Giao tiếp & hợp tác",
          en: "Communication & Collaboration",
        },
        description: {
          vi: "Phối hợp hiệu quả với Product Owner, BA, UI/UX Designer, Tester và Backend Developer trong môi trường Agile/Scrum.",
          en: "Effective collaboration with Product Owners, Business Analysts, UI/UX Designers, QA Engineers, and Backend Developers in Agile/Scrum environments.",
        },
        icon: "fas fa-users",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Phân tích nghiệp vụ",
          en: "Business Analysis",
        },
        description: {
          vi: "Đọc hiểu tài liệu tiếng Anh, phân tích yêu cầu và chuyển đổi thành giải pháp kỹ thuật phù hợp.",
          en: "Capable of understanding English documentation, analyzing requirements, and translating business needs into technical solutions.",
        },
        icon: "fas fa-file-alt",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Quản lý công việc",
          en: "Work Management",
        },
        description: {
          vi: "Có khả năng làm việc độc lập hoặc theo nhóm, đảm bảo tiến độ và chất lượng trong môi trường áp lực cao.",
          en: "Able to work independently or collaboratively while maintaining high quality and meeting deadlines in fast-paced environments.",
        },
        icon: "fas fa-book",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "Tinh thần trách nhiệm",
          en: "Ownership & Responsibility",
        },
        description: {
          vi: "Cam kết chất lượng sản phẩm, tuân thủ quy trình phát triển và chủ động hỗ trợ các thành viên trong nhóm.",
          en: "Committed to product quality, development best practices, and proactively supporting team members to achieve project goals.",
        },
        icon: "fas fa-check-circle",
        iconColor: "text-green-600 dark:text-green-400",
      },
    ],
  },

  strengths: {
    title: {
      vi: "Điểm mạnh nổi bật",
      en: "Outstanding Strengths",
    },
    headline: {
      vi: "Tôi mang đến cho đội ngũ",
      en: "What I bring to your team",
    },
    strengths: [
      {
        title: {
          vi: "Thành thạo ReactJS & Next.js",
          en: "ReactJS & Next.js Mastery",
        },
        description: {
          vi: "Chuyên sâu SSR, SSG, App Router và các pattern React hiện đại cho hiệu năng và SEO.",
          en: "Deep expertise in SSR, SSG, App Router and modern React patterns for performance and SEO.",
        },
        icon: "fas fa-bolt",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Kiến trúc Design System",
          en: "Design System Architect",
        },
        description: {
          vi: "Xây dựng thư viện component tái sử dụng với TailwindCSS, ShadCN UI, Ant Design và Styled-components.",
          en: "Build reusable component libraries with TailwindCSS, ShadCN UI, Ant Design and Styled-components.",
        },
        icon: "fas fa-layer-group",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Fullstack đa năng",
          en: "Fullstack Capable",
        },
        description: {
          vi: "Hơn 3 năm xây dựng backend với PHP/Laravel và MySQL — hiệu quả trên toàn bộ stack.",
          en: "3+ years building backends with PHP/Laravel and MySQL — effective across the whole stack.",
        },
        icon: "fas fa-database",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Realtime & APIs",
          en: "Realtime & APIs",
        },
        description: {
          vi: "Microservices RESTful và tính năng realtime WebSocket ở quy mô production.",
          en: "RESTful microservices and WebSocket-powered realtime features at production scale.",
        },
        icon: "fas fa-broadcast-tower",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        title: {
          vi: "Hiệu năng & SEO",
          en: "Performance & SEO",
        },
        description: {
          vi: "Responsive mobile-first, lazy loading, code splitting và tối ưu Core Web Vitals.",
          en: "Mobile-first responsive design, lazy loading, code splitting and Core Web Vitals optimization.",
        },
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "Hợp tác Agile",
          en: "Agile Collaboration",
        },
        description: {
          vi: "Sẵn sàng sở hữu kiến trúc frontend và phối hợp với PM, BA, UX và Backend.",
          en: "Comfortable owning frontend architecture while shipping with PM, BA, UX and Backend partners.",
        },
        icon: "fas fa-users",
        iconColor: "text-teal-600 dark:text-teal-400",
      },
    ],
  },

  education: {
    title: {
      vi: "Học vấn",
      en: "Education",
    },
    items: [
      {
        institution: {
          vi: "Cao đẳng Kỹ Thuật Cao Thắng",
          en: "Cao Thang Technical College",
        },
        major: {
          vi: "Công nghệ thông tin",
          en: "Information Technology",
        },
        period: "2016 — 2019",
        color: "text-blue-600 dark:text-blue-400",
      },
    ],
  },

  languages: {
    title: {
      vi: "Ngôn ngữ",
      en: "Languages",
    },
    items: [
      {
        language: {
          vi: "Tiếng Việt",
          en: "Vietnamese",
        },
        proficiency: {
          vi: "Bản ngữ",
          en: "Native",
        },
        color: "text-green-600 dark:text-green-400",
      },
      {
        language: {
          vi: "Tiếng Anh",
          en: "English",
        },
        proficiency: {
          vi: "Đọc, viết & giao tiếp kỹ thuật",
          en: "Reading, writing & technical communication",
        },
        color: "text-blue-600 dark:text-blue-400",
      },
    ],
  },

  experience: {
    title: {
      vi: "Kinh nghiệm làm việc",
      en: "Work Experience",
    },
    headline: {
      vi: "Hành trình tạo giá trị",
      en: "A timeline of impact",
    },
    subtitle: {
      vi: "Kỹ sư frontend senior qua các lĩnh vực SaaS Giáo dục, Nhân sự, Logistics và Thương mại điện tử.",
      en: "Senior frontend engineering across SaaS Education, HR, Logistics and E-commerce domains.",
    },
    items: [
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "10/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "Edutify — SaaS LMS",
        technologies: ["Next.js", "TypeScript", "ShadCN UI", "WebSocket", "REST"],
        responsibilities: [
          {
            vi: "• Thiết kế, phát triển và quản lý bộ sản phẩm giáo dục theo mô hình SaaS, bao gồm Test Platform, LMS và CRM bằng Next.js, TypeScript và ShadCN UI",
            en: "• Designed, developed and managed a SaaS education product suite including Test Platform, LMS and CRM using Next.js, TypeScript and ShadCN UI",
          },
          {
            vi: "• Xây dựng giao diện từ thiết kế Figma, đảm bảo tính nhất quán, khả năng tái sử dụng và trải nghiệm người dùng tối ưu",
            en: "• Built UI from Figma designs, ensuring consistency, reusability and optimal user experience",
          },
          {
            vi: "• Tham gia phát triển các module quản lý học viên, khóa học, lớp học, lịch học, bài kiểm tra, ngân hàng câu hỏi, CRM và theo dõi tiến độ học tập",
            en: "• Developed modules for student, course, class and schedule management, exams, question banks, CRM and learning progress tracking",
          },
          {
            vi: "• Tối ưu hiệu năng, khả năng mở rộng và độ ổn định của hệ thống nhằm đáp ứng nhu cầu vận hành đa tổ chức",
            en: "• Optimized performance, scalability and system stability to support multi-organization operations",
          },
          {
            vi: "• Tích hợp RESTful API, WebSocket và các tính năng đồng bộ dữ liệu thời gian thực giữa các module",
            en: "• Integrated RESTful APIs, WebSocket and real-time data sync features across modules",
          },
          {
            vi: "• Thực hiện review code, đóng góp vào kiến trúc frontend và áp dụng các tiêu chuẩn phát triển phần mềm",
            en: "• Conducted code reviews, contributed to frontend architecture and applied software development standards",
          },
          {
            vi: "• Phối hợp với Product Owner, UI/UX Designer và Backend Developer theo quy trình Agile/Scrum để phát triển, nâng cấp và vận hành sản phẩm",
            en: "• Collaborated with Product Owner, UI/UX Designer and Backend Developer in Agile/Scrum to develop, upgrade and operate the product",
          },
        ],
        links: ["https://dash.edutify.io"],
      },
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "10/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "HPM — SaaS Hosting Provider Management",
        technologies: ["Next.js", "TypeScript", "ShadCN UI", "WebSocket"],
        responsibilities: [
          {
            vi: "• Thiết kế và phát triển nền tảng quản lý nhà cung cấp dịch vụ hosting (HPM) theo mô hình SaaS bằng Next.js, TypeScript và ShadCN UI.",
            en: "• Designed and developed a SaaS Hosting Provider Management (HPM) platform using Next.js, TypeScript, and ShadCN UI.",
          },
          {
            vi: "• Xây dựng giao diện từ thiết kế Figma, đảm bảo tính nhất quán, khả năng tái sử dụng và trải nghiệm người dùng tối ưu.",
            en: "• Built UI from Figma designs, ensuring consistency, reusability, and optimal user experience.",
          },
          {
            vi: "• Tối ưu hiệu năng, khả năng mở rộng và độ ổn định của hệ thống.",
            en: "• Optimized performance, scalability, and system stability.",
          },
          {
            vi: "• Tích hợp RESTful API, WebSocket và các tính năng đồng bộ dữ liệu thời gian thực.",
            en: "• Integrated RESTful APIs, WebSocket, and real-time data synchronization features.",
          },
          {
            vi: "• Thực hiện review code, xây dựng kiến trúc frontend và áp dụng các tiêu chuẩn phát triển phần mềm.",
            en: "• Conducted code reviews, designed frontend architecture, and applied software development standards.",
          },
          {
            vi: "• Phối hợp với đội ngũ Product, UI/UX và Backend theo quy trình Agile/Scrum để triển khai và nâng cấp sản phẩm.",
            en: "• Collaborated with Product, UI/UX, and Backend teams in Agile/Scrum to deliver and enhance the product.",
          },
          {
            vi: "• Tham gia phát triển các module quản lý khách hàng, gói dịch vụ, tên miền, hóa đơn và hỗ trợ kỹ thuật.",
            en: "• Developed modules for customer management, service packages, domain handling, invoicing, and technical support.",
          },
        ],
        links: ["https://portal.system443.com"],
      },
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "10/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "The IELTS Workshop — CRM",
        technologies: ["Next.js", "TypeScript", "ShadCN UI"],
        responsibilities: [
          {
            vi: "• Phát triển và nâng cấp hệ thống CRM phục vụ quản lý học viên, khóa học, hợp đồng và thanh toán bằng Next.js, TypeScript và ShadCN UI.",
            en: "• Developed and upgraded the CRM system for managing students, courses, contracts, and payments using Next.js, TypeScript, and ShadCN UI.",
          },
          {
            vi: "• Xây dựng giao diện từ Figma, phát triển hệ thống component tái sử dụng và tối ưu trải nghiệm người dùng.",
            en: "• Built UI from Figma, developed a reusable component system, and optimized user experience.",
          },
          {
            vi: "• Tích hợp RESTful API, WebSocket và các dịch vụ nội bộ để đồng bộ dữ liệu thời gian thực.",
            en: "• Integrated RESTful APIs, WebSocket, and internal services for real-time data synchronization.",
          },
          {
            vi: "• Tham gia thiết kế kiến trúc frontend, review code và hỗ trợ các thành viên trong nhóm.",
            en: "• Participated in frontend architecture design, conducted code reviews, and supported team members.",
          },
          {
            vi: "• Phối hợp chặt chẽ với UI/UX Designer và Backend Developer để triển khai và nâng cấp các tính năng.",
            en: "• Collaborated closely with UI/UX Designer and Backend Developer to implement and enhance features.",
          },
        ],
        links: ["https://newcrm.tiw.vn"],
      },
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "10/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "Pasal LMS",
        technologies: ["Next.js", "TypeScript", "ShadCN UI"],
        responsibilities: [
          {
            vi: "• Tham gia phát triển và nâng cấp hệ thống LMS phục vụ học viên làm bài test, quản lý học viên, khóa học, lớp học, bài kiểm tra và tiến độ học tập bằng Next.js, TypeScript và ShadCN UI.",
            en: "• Participated in the development and enhancement of the LMS for test-taking, student management, course/class/test/progress tracking using Next.js, TypeScript, and ShadCN UI.",
          },
          {
            vi: "• Xây dựng giao diện từ thiết kế Figma, đảm bảo tính nhất quán, khả năng tái sử dụng và trải nghiệm người dùng tối ưu.",
            en: "• Built UI from Figma designs, ensuring consistency, reusability, and optimal user experience.",
          },
          {
            vi: "• Thực hiện review code, xây dựng component dùng chung và đóng góp vào kiến trúc frontend của hệ thống.",
            en: "• Conducted code reviews, built shared components, and contributed to the frontend architecture.",
          },
          {
            vi: "• Phối hợp với UI/UX Designer và Backend Developer để triển khai và nâng cấp sản phẩm.",
            en: "• Collaborated with UI/UX Designer and Backend Developer to deliver and enhance the product.",
          },
        ],
        links: ["https://online.pasal.edu.vn"],
      },
 
      {
        title: "Senior Frontend Developer",
        company: "Faba Technology",
        period: "01/2023 – 09/2025",
        color: "text-blue-600 dark:text-blue-400",
        project: "Qualee — HRM SaaS",
        technologies: ["ReactJS", "TypeScript", "Laravel", "WebSocket"],
        responsibilities: [
          {
            vi: "• Tham gia thiết kế và phát triển nền tảng quản lý nhân sự (HRM) Qualee bằng ReactJS, TypeScript và Laravel.",
            en: "• Participated in designing and developing the Qualee Human Resource Management (HRM) platform using ReactJS, TypeScript, and Laravel.",
          },
          {
            vi: "• Phát triển các module quản lý nhân sự, hồ sơ nhân viên, chấm công, nghỉ phép, quy trình nội bộ, làm bài onboarding, email template builder (Drag & Drop).",
            en: "• Developed modules for HR management, employee profiles, timekeeping, leave management, internal workflows, onboarding tasks, and an email template builder (Drag & Drop).",
          },
          {
            vi: "• Tích hợp RESTful API, WebSocket và các tính năng đồng bộ dữ liệu thời gian thực.",
            en: "• Integrated RESTful APIs, WebSocket, and real-time data synchronization features.",
          },
          {
            vi: "• Thực hiện review code, đóng góp vào kiến trúc frontend và áp dụng các tiêu chuẩn phát triển phần mềm.",
            en: "• Conducted code reviews, contributed to frontend architecture, and applied software development best practices.",
          },
          {
            vi: "• Phối hợp với PM, BA, UI/UX Designer và Backend Developer theo quy trình Scrum để phát triển và nâng cấp sản phẩm.",
            en: "• Collaborated with PM, BA, UI/UX Designer, and Backend Developer following Scrum methodology to develop and enhance the product.",
          },
        ],
        links: ["https://console.qualee.com"],
      },
 
      {
        title: "Middle Frontend Developer",
        company: "Faba Technology",
        period: "01/2023 – 12/2023",
        color: "text-purple-600 dark:text-purple-400",
        project: "PNP Global Supply — Logistics CRM",
        technologies: ["ReactJS", "Ant Design", "Laravel", "MySQL", "Docker"],
        responsibilities: [
          {
            vi: "• Tham gia phát triển hệ thống Logistics CRM (PNP Global Supply) với ReactJS, Ant Design framework và WebSocket.",
            en: "• Participated in the development of the Logistics CRM system (PNP Global Supply) using ReactJS, Ant Design framework, and WebSocket.",
          },
          {
            vi: "• Phát triển backend, thiết kế cơ sở dữ liệu bằng PHP/Laravel, MySQL và Docker.",
            en: "• Developed backend and designed the database with PHP/Laravel, MySQL, and Docker.",
          },
          {
            vi: "• Xây dựng tính năng mới, xử lý lỗi, tối ưu hệ thống và thực hiện review code.",
            en: "• Built new features, handled bugs, optimized the system, and performed code reviews.",
          },
          {
            vi: "• Phối hợp hỗ trợ các thành viên trong nhóm, tham gia thiết kế mockup và hiện thực hóa sản phẩm từ thiết kế đến triển khai.",
            en: "• Collaborated to support team members, participated in mockup design, and delivered solutions from design to deployment.",
          },
        ],
        links: ["https://console.pnpglobalsupply.com"],
      },
 
      {
        title: "Frontend Developer",
        company: "Faba Technology",
        period: "07/2020 – 12/2022",
        color: "text-green-600 dark:text-green-400",
        project: "Transportme — AU Bus Transportation",
        technologies: ["VueJS", "Vuetify", "CodeIgniter", "MySQL"],
        responsibilities: [
          {
            vi: "• Tham gia phát triển và nâng cấp nền tảng quản lý vận tải hành khách Transportme bằng VueJS, Vuetify và CodeIgniter.",
            en: "• Participated in the development and enhancement of the Transportme passenger transportation management platform using VueJS, Vuetify, and CodeIgniter.",
          },
          {
            vi: "• Xây dựng giao diện người dùng từ thiết kế đến triển khai hoàn chỉnh, đảm bảo tính nhất quán và trải nghiệm người dùng.",
            en: "• Built user interfaces from design to full deployment, ensuring consistency and user experience.",
          },
          {
            vi: "• Tham gia phát triển backend, thiết kế cơ sở dữ liệu bằng PHP/CodeIgniter, MySQL và Docker.",
            en: "• Participated in backend development and database design using PHP/CodeIgniter, MySQL, and Docker.",
          },
          {
            vi: "• Phát triển tính năng mới, xử lý lỗi và tối ưu hiệu năng hệ thống.",
            en: "• Developed new features, fixed bugs, and optimized system performance.",
          },
        ],
        links: ["https://transportme.com.au"],
      },
 
      {
        title: "Junior Frontend Developer",
        company: "Faba Technology",
        period: "07/2019 – 06/2020",
        color: "text-orange-600 dark:text-orange-400",
        project: "E-commerce & Corporate Websites",
        technologies: ["ReactJS", "Vue.js", "Next.js", "Shopify", "WordPress"],
        responsibilities: [
          {
            vi: "• Tham gia các dự án website thương mại điện tử với ReactJS, Vue.js, Bootstrap, Shopify",
            en: "• Participated in E-commerce website projects with ReactJS, Vue.js, Bootstrap, Shopify",
          },
          {
            vi: "• Phát triển website doanh nghiệp với NextJS, Bootstrap, PHP/WordPress",
            en: "• Developed corporate websites with NextJS, Bootstrap, PHP/WordPress",
          },
          {
            vi: "• Xây dựng giao diện responsive, sửa lỗi, nâng cấp tính năng, tối ưu SEO",
            en: "• Built responsive UI, fixed bugs, upgraded features, optimized SEO",
          },
        ],
        links: [
          "https://www.sanctuaryclothing.com",
          "https://www.fabatechnology.com",
        ],
      },
    ],
  },

  contact: {
    title: {
      vi: "Liên hệ với tôi",
      en: "Get In Touch",
    },
    headline: {
      vi: "Cùng xây dựng điều tuyệt vời",
      en: "Let's build something great",
    },
    subtitle: {
      vi: "Sẵn sàng cho vai trò senior frontend, tech lead và fullstack. Hãy liên hệ để trò chuyện.",
      en: "Open to senior frontend, tech lead and fullstack roles. Reach out and let's talk.",
    },
    contactInfoTitle: {
      vi: "Thông tin liên hệ",
      en: "Contact Information",
    },
    contactInfo: {
      email: "truongnpt1998@gmail.com",
      secondaryEmail: "truongnguyen1998.dev@gmail.com",
      phone: "0399812700",
      linkedin: "https://www.linkedin.com/in/truongnguyen1998/",
      github: "https://github.com/truongnpt",
      location: {
        vi: "TP. Hồ Chí Minh",
        en: "Ho Chi Minh City",
      },
    },
    form: {
      namePlaceholder: {
        vi: "Tên của bạn",
        en: "Your name",
      },
      emailPlaceholder: {
        vi: "Email của bạn",
        en: "you@email.com",
      },
      messagePlaceholder: {
        vi: "Tin nhắn của bạn",
        en: "Tell me about your project...",
      },
      submitButton: {
        vi: "Gửi tin nhắn",
        en: "Send message",
      },
      sendingButton: {
        vi: "Đang gửi...",
        en: "Sending...",
      },
      successMessage: {
        vi: "Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.",
        en: "Thank you for your message! I will get back to you as soon as possible.",
      },
    },
  },

  footer: {
    name: {
      vi: "Nguyễn Phi Trường",
      en: "Nguyen Phi Truong",
    },
    description: {
      vi: "Senior Frontend Developer — xây dựng sản phẩm SaaS có khả năng mở rộng với React, Next.js và TypeScript.",
      en: "Senior Frontend Developer — building scalable SaaS products with React, Next.js and TypeScript.",
    },
    socialLinks: [
      {
        href: "mailto:truongnpt1998@gmail.com",
        icon: "fas fa-envelope",
        label: { vi: "Email", en: "Email" },
      },
      {
        href: "https://www.linkedin.com/in/truongnguyen1998/",
        icon: "fab fa-linkedin-in",
        label: { vi: "LinkedIn", en: "LinkedIn" },
      },
      {
        href: "https://github.com/truongnpt",
        icon: "fab fa-github",
        label: { vi: "GitHub", en: "GitHub" },
      },
    ],
    copyright: {
      vi: "© 2026 Nguyễn Phi Trường. Tất cả quyền được bảo lưu.",
      en: "© 2026 Nguyen Phi Truong. All rights reserved.",
    },
  },
};
