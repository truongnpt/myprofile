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

export interface PersonalProjectContent {
  badge: {
    vi: string;
    en: string;
  };
  brand: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  technologies: string[];
  image: string;
  url: string;
  cta: {
    vi: string;
    en: string;
  };
}

export interface PortfolioData {
  navigation: NavLink[];
  hero: HeroContent;
  personalProject: PersonalProjectContent;
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
      href: "#personal-project",
      vi: "KinderCRM",
      en: "KinderCRM",
    },
    {
      href: "#selected-work",
      vi: "Dự án",
      en: "Projects",
    },
    { href: "#contact", vi: "Liên hệ", en: "Contact" },
  ],

  personalProject: {
    badge: {
      vi: "Dự án cá nhân",
      en: "Personal Project",
    },
    brand: "KinderCRM",
    title: {
      vi: "Quản lý trường mầm non SaaS",
      en: "SaaS Preschool Management Platform",
    },
    description: {
      vi: "Nền tảng Cloud SaaS giúp số hóa toàn diện hoạt động quản lý trường mầm non — tuyển sinh, học sinh, lớp học, giáo viên, học phí và kết nối phụ huynh trên một hệ thống thống nhất.",
      en: "A Cloud SaaS platform that digitizes preschool operations end-to-end — admissions, students, classrooms, teachers, tuition, and parent communication in one system.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React Query",
      "ShadCN UI",
      "Supabase",
    ],
    image: "/images/kinder-banner.PNG",
    url: "https://kindercrm.cudem.online",
    cta: {
      vi: "Xem sản phẩm",
      en: "View live product",
    },
  },

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
      vi: "Lập trình viên Frontend Senior với hơn 6 năm kinh nghiệm phát triển các nền tảng SaaS doanh nghiệp, hệ thống LMS, CRM và HRM. Thành thạo React.js, Next.js và TypeScript, đồng thời có nền tảng Full-stack với PHP/Laravel và MySQL. Có kinh nghiệm thiết kế kiến trúc Frontend có khả năng mở rộng, tối ưu hiệu năng bằng SSR/SSG, triển khai các tính năng real-time với WebSocket và phối hợp hiệu quả với các nhóm đa chức năng.",
      en: "Senior Frontend Developer with 6+ years of experience building enterprise SaaS platforms, LMS, CRM, and HRM systems. Expert in React.js, Next.js, and TypeScript with a strong full-stack foundation in PHP/Laravel and MySQL. Proven ability to architect scalable frontend solutions, optimize performance through SSR/SSG, implement real-time features via WebSocket, and collaborate effectively with cross-functional teams.",
    },
    shortDescription: {
      vi: "Lập trình viên Frontend Senior với hơn 6 năm kinh nghiệm phát triển các nền tảng SaaS doanh nghiệp, hệ thống LMS, CRM và HRM. Thành thạo React.js, Next.js và TypeScript, đồng thời có nền tảng Full-stack với PHP/Laravel và MySQL. Có kinh nghiệm thiết kế kiến trúc Frontend có khả năng mở rộng, tối ưu hiệu năng bằng SSR/SSG, triển khai các tính năng real-time với WebSocket và phối hợp hiệu quả với các nhóm đa chức năng. Am hiểu về kiến trúc component, xây dựng Design System và hướng dẫn, hỗ trợ các lập trình viên Junior. Luôn hướng đến việc phát triển mã nguồn sạch, dễ bảo trì và tạo ra các sản phẩm có giá trị cao.",
      en: "Senior Frontend Developer with 6+ years of hands-on experience building enterprise SaaS platforms, LMS, CRM, and HRM systems. Expert in React.js, Next.js, and TypeScript with strong full-stack foundation (PHP/Laravel, MySQL). Proven ability to architect scalable frontend solutions, optimize performance through SSR/SSG, implement real-time features via WebSocket, and lead cross-functional teams. Experienced in component architecture, design systems, and mentoring junior developers. Passionate about writing clean, maintainable code and delivering high-impact products.",
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
        vi: "/cv/CV_Frontend_Developer_Nguyen_Phi_Truong_VI.pdf",
        en: "/cv/CV_Frontend_Developer_Nguyen_Phi_Truong_EN.pdf",
      },
    },
  },

  selectedWork: {
    headline: {
      vi: "Dự án tiêu biểu",
      en: "Selected work",
    },
    subtitle: {
      vi: "Tổng quan các sản phẩm tôi đã triển khai trong SaaS, giáo dục, nhân sự, hosting và logistics.",
      en: "A snapshot of products I've shipped across SaaS, education, HR, hosting and logistics.",
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
      "ReactJS",
      "Laravel",
      "Vue.js",
      "Supabase",
    ],
    projects: [
      {
        title: {
          vi: "Edutify — Nền tảng E-Learning SaaS",
          en: "Edutify – SaaS E-Learning Platform",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Nền tảng giáo dục đa tenant tích hợp LMS, hệ thống thi trực tuyến, CRM, quản lý khóa học, quản lý học viên, ngân hàng câu hỏi, lập lịch học và theo dõi tiến độ học tập.",
          en: "Multi-tenant education platform featuring LMS, online testing, CRM, course management, student management, question banks, scheduling, and learning progress tracking.",
        },
        technologies: [
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "Ant Design",
          "Open API",
          "WebSocket",
          "Micro Frontend",
          "Module Federation",
        ],
        url: "https://dash.edutify.io",
      },
      {
        title: {
          vi: "HPM — Quản lý nhà cung cấp Hosting",
          en: "Hosting Provider Management (HPM)",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Nền tảng SaaS quản lý Hosting, Domain, khách hàng, thanh toán, hóa đơn và hỗ trợ khách hàng, được thiết kế với giao diện Responsive và kiến trúc có khả năng mở rộng.",
          en: "SaaS platform for managing hosting services, domains, customers, billing, invoicing, and support workflows with scalable and responsive interfaces.",
        },
        technologies: [
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "ShadCN UI",
          "Open API",
        ],
        url: "https://portal.system443.com",
      },
      {
        title: {
          vi: "The IELTS Workshop — CRM",
          en: "The IELTS Workshop (CRM)",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Nền tảng CRM quản lý học viên, khóa học, hợp đồng và thanh toán, sử dụng kiến trúc Component tái sử dụng và giao diện Responsive, đáp ứng yêu cầu vận hành và mở rộng của hệ thống.",
          en: "CRM platform for managing students, courses, contracts, and payment workflows with production-ready interfaces and reusable component patterns.",
        },
        technologies: [
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "ShadCN UI",
          "RESTful API",
        ],
        url: "https://newcrm.tiw.vn",
      },
      {
        title: {
          vi: "Pasal LMS — Nền tảng học trực tuyến",
          en: "Pasal LMS – Online Learning Platform",
        },
        company: {
          vi: "The Mona Group — Mona Host",
          en: "The Mona Group — Mona Host",
        },
        description: {
          vi: "Nền tảng E-Learning với các chức năng quản lý khóa học, thi trực tuyến, đánh giá và theo dõi tiến độ học tập, tối ưu hiệu năng bằng hệ thống Component tái sử dụng.",
          en: "Online learning platform with course management, assessments, online testing, and learning progress tracking with optimized performance through component reusability.",
        },
        technologies: [
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "ShadCN UI",
          "RESTful API",
        ],
        url: "https://online.pasal.edu.vn",
      },
      {
        title: {
          vi: "KinderCRM — Quản lý trường mầm non SaaS",
          en: "Kinder CRM – SaaS Preschool Management Platform",
        },
        company: {
          vi: "Dự án cá nhân",
          en: "Personal Project",
        },
        description: {
          vi: "Phát triển KinderCRM – nền tảng Cloud SaaS giúp số hóa toàn diện hoạt động quản lý trường mầm non, bao gồm tuyển sinh, quản lý học sinh, lớp học, giáo viên, học phí và kết nối với phụ huynh.",
          en: "Developed KinderCRM, a Cloud SaaS platform that digitizes preschool management, including admissions, student management, classrooms, teachers, tuition, and parent communication.",
        },
        technologies: [
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "ShadCN UI",
          "Supabase",
        ],
        url: "https://kindercrm.cudem.online",
      },
      {
        title: {
          vi: "Qualee — Nền tảng quản lý nhân sự",
          en: "Qualee – Human Resource Management Platform",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Nền tảng HRM doanh nghiệp hỗ trợ quản lý nhân viên, chấm công, nghỉ phép, onboarding, quy trình nội bộ và Email Builder kéo thả, đáp ứng nhu cầu quản trị nhân sự và tự động hóa quy trình làm việc.",
          en: "Enterprise HRM system featuring employee management, attendance tracking, leave management, onboarding workflows, internal business processes, and drag-and-drop email builder.",
        },
        technologies: [
          "React.js",
          "TypeScript",
          "Redux",
          "Styled-components",
          "Laravel",
          "RESTful API",
          "WebSocket",
        ],
        url: "https://console.qualee.com",
      },
      {
        title: {
          vi: "PNP Global Supply — CRM Logistics",
          en: "PNP Global Supply – Logistics CRM",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Nền tảng CRM Logistics hỗ trợ quản lý khách hàng, đơn hàng và quy trình vận hành, với sự tham gia phát triển Full-stack bao gồm giao diện, REST API và thiết kế cơ sở dữ liệu.",
          en: "Logistics CRM platform supporting customer management and operational workflows with full-stack development including API implementation and database design.",
        },
        technologies: [
          "React.js",
          "React Query",
          "Ant Design",
          "PHP/Laravel",
          "MySQL",
          "Docker",
          "WebSocket",
        ],
        url: "https://console.pnpglobalsupply.com",
      },
      {
        title: {
          vi: "Transportme — Bán vé & theo dõi phương tiện",
          en: "Transportme – Vehicle Ticketing & Tracking",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Hệ thống bán vé và theo dõi phương tiện được bảo hộ bản quyền phần mềm, tích hợp các tính năng theo yêu cầu nghiệp vụ, giao diện Responsive và tuân thủ tiêu chuẩn WCAG về khả năng truy cập web.",
          en: "Patented software system for vehicle ticketing and tracking with responsive interfaces, business-driven features, and WCAG web accessibility compliance.",
        },
        technologies: [
          "Vue.js",
          "Vuetify",
          "PHP/CodeIgniter",
          "MySQL",
          "Docker",
          "WCAG",
        ],
        url: "https://transportme.com.au",
      },
      {
        title: {
          vi: "Nền tảng thương mại điện tử",
          en: "E-Commerce Platforms",
        },
        company: {
          vi: "Faba Technology",
          en: "Faba Technology",
        },
        description: {
          vi: "Phát triển nhiều nền tảng thương mại điện tử sử dụng Vue.js, Next.js, WordPress và Shopify, với giao diện Responsive, tối ưu hiệu năng và tăng cường bảo mật.",
          en: "Multiple e-commerce platforms built with Vue.js, Next.js, WordPress, and Shopify featuring responsive design, performance optimization, and security enhancements.",
        },
        technologies: [
          "Vue.js",
          "Next.js",
          "WordPress",
          "Shopify",
          "Responsive Design",
        ],
        url: "https://dragun-beauty.com",
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
        value: "20+",
        label: { vi: "Doanh nghiệp phục vụ", en: "Businesses Served" },
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
          vi: "Phát triển & triển khai nền tảng SaaS phục vụ 20+ doanh nghiệp (HRM, Logistics, E-Learning, Hosting)",
          en: "Developed and deployed SaaS platforms serving 20+ businesses across HRM, Logistics, E-Learning, and Hosting",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Thiết kế kiến trúc Component tái sử dụng, Design System & chuẩn hóa UI Pattern",
          en: "Built reusable component libraries, Design Systems, and standardized UI patterns",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Triển khai RBAC, WebSocket realtime & tối ưu hiệu năng qua SSR/SSG",
          en: "Implemented RBAC, WebSocket realtime features, and performance optimization via SSR/SSG",
        },
        icon: "fas fa-bolt",
      },
      {
        text: {
          vi: "Phát triển Full-stack: UI, REST API, thiết kế CSDL và triển khai hệ thống",
          en: "Full-stack delivery: UI, REST API integration, database schema design, and deployment",
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
        title: "Frontend Frameworks",
        icon: "fas fa-code",
        iconColor: "text-blue-600 dark:text-blue-400",
        skills: [
          "React.js",
          "Next.js",
          "Vue.js",
          "TypeScript",
          "JavaScript ES6+",
        ],
      },
      {
        title: "State Management",
        icon: "fas fa-project-diagram",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        skills: ["Redux", "Zustand", "React Query", "Context API"],
      },
      {
        title: "UI & Styling",
        icon: "fas fa-palette",
        iconColor: "text-purple-600 dark:text-purple-400",
        skills: [
          "HTML5",
          "CSS3",
          "SCSS",
          "TailwindCSS",
          "ShadCN UI",
          "Radix UI",
          "Ant Design",
          "Responsive Design",
          "WCAG",
          "ECharts",
        ],
      },
      {
        title: "Architecture & Performance",
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Micro Frontend",
          "Module Federation",
          "Design System",
          "SSR / SSG",
          "Code Splitting",
          "Lazy Loading",
          "Caching",
        ],
      },
      {
        title: "API & Real-time",
        icon: "fas fa-broadcast-tower",
        iconColor: "text-teal-600 dark:text-teal-400",
        skills: [
          "REST API",
          "WebSocket",
          "Swagger",
          "Axios / Fetch",
          "JWT Authentication",
          "RBAC",
        ],
      },
      {
        title: "Backend",
        icon: "fas fa-database",
        iconColor: "text-green-600 dark:text-green-400",
        skills: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Docker",
          "Queue / Pusher",
        ],
      },
      {
        title: "Tools & Workflow",
        icon: "fas fa-wrench",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Git / GitHub / GitLab",
          "Docker",
          "ESLint",
          "Jira / Trello",
          "Cursor",
          "ChatGPT / Claude",
        ],
      },
      {
        title: "Testing & QA",
        icon: "fas fa-vial",
        iconColor: "text-green-600 dark:text-green-400",
        skills: [
          "React Testing Library",
          "Unit Testing",
          "E2E Testing",
          "Cross-browser Testing",
        ],
      },
    ],
    softSkillsTitle: {
      vi: "Kỹ năng mềm",
      en: "Soft Skills",
    },
    softSkills: [
      {
        title: {
          vi: "Lãnh đạo & Đào tạo",
          en: "Leadership & Mentoring",
        },
        description: {
          vi: "Dẫn dắt nhóm phát triển từ 3–4 thành viên, hướng dẫn thực tập sinh và thực hiện Code Review nhằm đảm bảo chất lượng mã nguồn.",
          en: "Led teams (3–4 members), mentored interns, and performed code reviews to ensure code quality.",
        },
        icon: "fas fa-users",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Giải quyết vấn đề",
          en: "Problem Solving",
        },
        description: {
          vi: "Có tư duy phân tích tốt, tập trung xây dựng các giải pháp có khả năng mở rộng và dễ bảo trì.",
          en: "Strong analytical mindset focused on scalable, maintainable solutions.",
        },
        icon: "fas fa-brain",
        iconColor: "text-yellow-500 dark:text-yellow-400",
      },
      {
        title: {
          vi: "Trách nhiệm & Hợp tác",
          en: "Ownership & Collaboration",
        },
        description: {
          vi: "Chủ động, có trách nhiệm trong công việc và có kinh nghiệm làm việc hiệu quả với các nhóm đa chức năng theo quy trình Agile/Scrum.",
          en: "Proactive, accountable, and experienced with cross-functional Agile/Scrum teams.",
        },
        icon: "fas fa-handshake",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Phân tích yêu cầu",
          en: "Requirement Analysis",
        },
        description: {
          vi: "Phân tích yêu cầu nghiệp vụ và đề xuất các giải pháp kỹ thuật phù hợp, đáp ứng khả năng mở rộng của hệ thống.",
          en: "Analyze business requirements and propose scalable technical solutions.",
        },
        icon: "fas fa-file-alt",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Quản lý quy trình nghiệp vụ (BPM)",
          en: "Business Process Management (BPM)",
        },
        description: {
          vi: "Phối hợp với BA và PO để phân tích, thiết kế và tối ưu quy trình nghiệp vụ cho các hệ thống CRM, LMS và Logistics.",
          en: "Work with BA/PO to define and optimize workflow requirements for CRM, LMS, and Logistics systems.",
        },
        icon: "fas fa-sitemap",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "Code Review & Agile",
          en: "Code Review & Agile",
        },
        description: {
          vi: "Thực hiện Code Review, cộng tác nhóm và làm việc theo quy trình Agile/Scrum để đảm bảo chất lượng và tiến độ dự án.",
          en: "Experienced in code review, team collaboration, and delivering in Agile/Scrum environments.",
        },
        icon: "fas fa-check-circle",
        iconColor: "text-teal-600 dark:text-teal-400",
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
          vi: "Phát triển nền tảng doanh nghiệp",
          en: "Enterprise Platform Impact",
        },
        description: {
          vi: "Tham gia phát triển và triển khai các nền tảng SaaS phục vụ hơn 20 doanh nghiệp trong các lĩnh vực HRM, Logistics, E-Learning và Hosting.",
          en: "Developed and deployed SaaS platforms serving 20+ businesses across HRM, Logistics, E-Learning, and Hosting domains.",
        },
        icon: "fas fa-building",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Tối ưu hiệu năng",
          en: "Performance Optimization",
        },
        description: {
          vi: "Nâng cao tốc độ tải trang và trải nghiệm người dùng thông qua Code Splitting, SSR/SSG, Lazy Loading và Caching trên production.",
          en: "Improved page load speed and UX across production platforms through code splitting, SSR/SSG, and caching strategies.",
        },
        icon: "fas fa-tachometer-alt",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "Kiến trúc Real-time",
          en: "Real-time Architecture",
        },
        description: {
          vi: "Thiết kế và triển khai giải pháp WebSocket cho các tính năng cộng tác và đồng bộ dữ liệu theo thời gian thực.",
          en: "Designed and implemented WebSocket integration for collaborative features and real-time data synchronization.",
        },
        icon: "fas fa-broadcast-tower",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        title: {
          vi: "Kiến trúc Component",
          en: "Component Architecture",
        },
        description: {
          vi: "Xây dựng thư viện Component tái sử dụng và chuẩn hóa UI Pattern, giúp giảm trùng lặp mã nguồn và tăng hiệu quả phát triển.",
          en: "Built reusable component libraries and standardized UI patterns reducing code duplication and improving development efficiency.",
        },
        icon: "fas fa-layer-group",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Hệ thống phân quyền (RBAC)",
          en: "RBAC Systems",
        },
        description: {
          vi: "Thiết kế và triển khai hệ thống Role-Based Access Control (RBAC) cùng cơ chế phân quyền linh hoạt cho các ứng dụng doanh nghiệp.",
          en: "Designed and implemented complex role-based access control (RBAC) and permission management systems for enterprise applications.",
        },
        icon: "fas fa-shield-alt",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Team Leadership",
          en: "Team Leadership",
        },
        description: {
          vi: "Tham gia định hướng kiến trúc Frontend, thực hiện Code Review và hướng dẫn các lập trình viên Junior áp dụng các thực tiễn phát triển phần mềm hiệu quả.",
          en: "Led frontend architecture decisions, performed code reviews, and mentored junior developers on best practices and scalable solutions.",
        },
        icon: "fas fa-users",
        iconColor: "text-teal-600 dark:text-teal-400",
      },
      {
        title: {
          vi: "Phát triển Full-stack",
          en: "Full-Stack Delivery",
        },
        description: {
          vi: "Tham gia phát triển sản phẩm từ đầu đến cuối, bao gồm xây dựng giao diện người dùng, tích hợp REST API, thiết kế cơ sở dữ liệu và triển khai hệ thống.",
          en: "Contributed to end-to-end product development including frontend UI, REST API integration, database schema design, and deployment.",
        },
        icon: "fas fa-database",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Chuẩn quốc tế",
          en: "International Standards",
        },
        description: {
          vi: "Triển khai các dạng câu hỏi chuẩn IELTS và TOEIC, tuân thủ tiêu chuẩn QTI (Question & Test Interoperability) để đảm bảo khả năng tương thích và mở rộng.",
          en: "Implemented IELTS and TOEIC standardized question types with QTI (Question & Test Interoperability) compliance.",
        },
        icon: "fas fa-globe",
        iconColor: "text-blue-600 dark:text-blue-400",
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
          vi: "Trường Cao đẳng Kỹ thuật Cao Thắng",
          en: "Cao Thang Technical College",
        },
        major: {
          vi: "Cử nhân Công nghệ Thông tin",
          en: "Bachelor of Information Technology",
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
          vi: "Ngôn ngữ chính",
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
          vi: "Đọc, viết & trao đổi kỹ thuật",
          en: "Reading, writing, and technical communication",
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
      vi: "Kỹ sư frontend senior qua các lĩnh vực SaaS Giáo dục, Nhân sự, Logistics, Hosting và Thương mại điện tử.",
      en: "Senior frontend engineering across SaaS Education, HR, Logistics, Hosting and E-commerce domains.",
    },
    items: [
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group – Mona Host",
        period: "10/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "E-Learning, CRM & Hosting SaaS",
        technologies: ["Next.js", "ReactJS", "TypeScript", "WebSocket", "SSR/SSG"],
        responsibilities: [
          {
            vi: "• Phát triển và bảo trì nhiều nền tảng SaaS doanh nghiệp trong các lĩnh vực E-Learning, CRM và Hosting bằng Next.js, ReactJS và TypeScript.",
            en: "• Developed and maintained multiple enterprise SaaS platforms across E-Learning, CRM, and Hosting domains using Next.js, ReactJS and TypeScript.",
          },
          {
            vi: "• Xây dựng thư viện Component tái sử dụng và chuẩn hóa UI Pattern, giúp tăng hiệu quả phát triển và cải thiện khả năng bảo trì mã nguồn.",
            en: "• Built reusable component libraries and standardized UI patterns, improving development efficiency and code maintainability.",
          },
          {
            vi: "• Tối ưu hiệu năng ứng dụng và trải nghiệm người dùng thông qua Server-Side Rendering (SSR), Static Site Generation (SSG), đồng thời xây dựng giao diện Responsive theo hướng Mobile-First.",
            en: "• Optimized application performance and user experience through SSR and SSG, while implementing responsive, mobile-first designs across all screen sizes.",
          },
          {
            vi: "• Phát triển các tính năng Real-time như Dashboard, Thông báo và Chat, đảm bảo dữ liệu được đồng bộ theo thời gian thực.",
            en: "• Developed real-time features, including dashboards, notifications, and chat functionality for the system.",
          },
          {
            vi: "• Phối hợp với các nhóm Product, UI/UX, Backend và QA trong môi trường Agile để thiết kế kiến trúc Frontend, thực hiện Code Review và triển khai sản phẩm.",
            en: "• Collaborated on frontend architecture, code reviews, and cross-functional delivery with Product, UI/UX, Backend, and QA teams in Agile environments.",
          },
          {
            vi: "• Thiết kế và phát triển giao diện cho hệ thống phân quyền theo vai trò (RBAC), quản lý quyền truy cập và không gian làm việc theo từng tổ chức (Organization Workspace).",
            en: "• Designed and implemented user interfaces for role-based access control (RBAC), permission management, and organization-level workspaces.",
          },
          {
            vi: "• Phối hợp với đội ngũ Backend để phân tích yêu cầu nghiệp vụ và thiết kế cơ sở dữ liệu, đảm bảo đáp ứng các yêu cầu phát triển hệ thống.",
            en: "• Collaborated with the Backend team to analyze business requirements and design database schemas to support system development.",
          },
          {
            vi: "• Tham gia phân tích, thiết kế và phát triển các dạng câu hỏi chuẩn IELTS và TOEIC, tuân thủ tiêu chuẩn quốc tế QTI (Question & Test Interoperability) nhằm đảm bảo tính tương thích và khả năng mở rộng của hệ thống đánh giá.",
            en: "• Participated in the analysis, design, and development of IELTS and TOEIC standardized question types, ensuring compliance with official exam structures and international assessment standards QTI (Question & Test Interoperability).",
          },
        ],
        links: [
          "https://dash.edutify.io",
          "https://portal.system443.com",
          "https://newcrm.tiw.vn",
          "https://online.pasal.edu.vn",
        ],
      },
      {
        title: "Junior → Middle → Senior Frontend Developer",
        company: "Faba Technology",
        period: "07/2019 – 09/2025",
        color: "text-blue-600 dark:text-blue-400",
        project: "HRM, Logistics CRM & Transportation",
        technologies: [
          "ReactJS",
          "VueJS",
          "TypeScript",
          "Laravel",
          "WebSocket",
        ],
        responsibilities: [
          {
            vi: "• Phát triển và bảo trì các nền tảng doanh nghiệp trong lĩnh vực Quản lý nhân sự (HRM), CRM Logistics và Vận tải sử dụng ReactJS, VueJS, TypeScript và Laravel.",
            en: "• Developed and maintained enterprise platforms across Human Resource Management (HRM), Logistics CRM, and Transportation domains using ReactJS, VueJS, TypeScript, and Laravel.",
          },
          {
            vi: "• Xây dựng các giải pháp Frontend có khả năng mở rộng và tái sử dụng, tích hợp RESTful API và WebSocket để phát triển các tính năng Real-time như Dashboard, Thông báo và Chat, đồng thời tham gia thiết kế và triển khai cơ sở dữ liệu phục vụ quá trình phát triển sản phẩm từ đầu đến cuối.",
            en: "• Built scalable and reusable frontend solutions, integrated RESTful APIs and WebSocket to deliver real-time features such as dashboards, notification and chat systems, and contributed to database design and implementation to support end-to-end product development.",
          },
          {
            vi: "• Phát triển chức năng tải lên, lưu trữ và xem trước tệp tin an toàn thông qua Laravel REST API, tích hợp Amazon S3 để quản lý và lưu trữ dữ liệu.",
            en: "• Developed secure file upload and preview functionality using Laravel REST APIs, integrating Amazon S3 for file storage and management.",
          },
          {
            vi: "• Chuẩn hóa và tối ưu quy trình nghiệp vụ bằng cách tập trung quản lý khách hàng, nhân viên, hợp đồng, hóa đơn, thanh toán và chăm sóc khách hàng trên một nền tảng thống nhất, giúp giảm các thao tác thủ công và nâng cao hiệu quả vận hành.",
            en: "• Streamlined business operations and workflows by centralizing customer, employee, contract, invoicing, payment, and customer service management into a unified platform, reducing manual processes and improving operational efficiency.",
          },
          {
            vi: "• Tối ưu hiệu năng ứng dụng, cải thiện tốc độ tải trang và nâng cao trải nghiệm người dùng trên các hệ thống đang vận hành.",
            en: "• Optimized application performance, improving page load speed and enhancing the overall user experience.",
          },
          {
            vi: "• Phối hợp chặt chẽ với các nhóm Product, Business Analyst (BA), UI/UX, Backend và QA để phân tích yêu cầu nghiệp vụ, đề xuất giải pháp kỹ thuật và triển khai dự án đúng tiến độ với chất lượng cao.",
            en: "• Worked closely with cross-functional teams to analyze business requirements, develop solutions, and deliver projects on schedule with high quality.",
          },
          {
            vi: "• Góp phần phát triển và vận hành thành công nền tảng WebApp phục vụ hơn 200 doanh nghiệp chỉ sau một năm ra mắt, đáp ứng yêu cầu về hiệu năng, khả năng mở rộng và độ ổn định của hệ thống.",
            en: "• Contributed to the successful development and operation of a WebApp platform that served more than 200 businesses within just one year of launch.",
          },
        ],
        links: [
          "https://console.qualee.com",
          "https://console.pnpglobalsupply.com",
          "https://transportme.com.au",
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
