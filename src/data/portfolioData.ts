export interface NavLink {
  href: string;
  vi: string;
  en: string;
}

export interface ContactInfo {
  email: string;
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
  hoverColor: string;
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
  responsibilities: {
    vi: string;
    en: string;
  }[];
  links: string[];
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

export interface AboutContent {
  title: {
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
  contactInfo: ContactInfo;
}

export interface SkillsContent {
  title: {
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

export interface ExperienceContent {
  title: {
    vi: string;
    en: string;
  };
  items: ExperienceItem[];
}

export interface ContactContent {
  title: {
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

export interface PortfolioData {
  navigation: NavLink[];
  hero: HeroContent;
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
      vi: "Frontend Developer",
      en: "Frontend Developer",
    },
    description: {
      vi: "Tôi là Frontend Developer với hơn 5 năm kinh nghiệm phát triển ứng dụng web và nền tảng SaaS. Thành thạo ReactJS, Next.js, TypeScript, HTML5, CSS3 và xây dựng giao diện responsive theo hướng mobile-first. Có kinh nghiệm phát triển các hệ thống E-Learning (LMS), CRM, HRM HPM và các nền tảng quản trị doanh nghiệp.",
      en: "I am a Frontend Developer with over 5 years of experience in developing web applications and SaaS platforms. Proficient in ReactJS, Next.js, TypeScript, HTML5, and CSS3, with strong expertise in building responsive, mobile-first user interfaces. Experienced in developing E-Learning (LMS), CRM, HRM, HPM, and enterprise management systems.",
    },
    buttons: {
      contact: {
        vi: "Liên hệ với tôi",
        en: "Contact Me",
      },
      resume: {
        vi: "Xem CV",
        en: "View CV",
      },
      cv: {
        vi: "/cv/CV - NGUYEN PHI TRUONG - SENIOR FRONTEND DEVELOPER - VI.pdf",
        en: "/cv/CV - NGUYEN PHI TRUONG - SENIOR FRONTEND DEVELOPER - EN.pdf",
      },
    },
  },

  about: {
    title: {
      vi: "Giới thiệu",
      en: "About Me",
    },
    stats: [
      {
        value: "5+",
        label: { vi: "Năm kinh nghiệm", en: "Years Experience" },
        color: "text-blue-600 dark:text-blue-400",
      },
      {
        value: "20+",
        label: { vi: "Dự án hoàn thành", en: "Projects Completed" },
        color: "text-purple-600 dark:text-purple-400",
      },
      {
        value: "10+",
        label: { vi: "Công nghệ", en: "Technologies" },
        color: "text-green-600 dark:text-green-400",
      },
      {
        value: "100%",
        label: { vi: "Cam kết", en: "Commitment" },
        color: "text-orange-600 dark:text-orange-400",
      },
    ],
    description1: {
      vi: "Tôi là Frontend Developer với hơn 5 năm kinh nghiệm phát triển ứng dụng web và nền tảng SaaS. Thành thạo ReactJS, Next.js, TypeScript, HTML5, CSS3 và xây dựng giao diện responsive theo hướng mobile-first. Có kinh nghiệm phát triển các hệ thống E-Learning (LMS), CRM, HRM HPM và các nền tảng quản trị doanh nghiệp.",
      en: "I am a Frontend Developer with over 5 years of experience in developing web applications and SaaS platforms. Proficient in ReactJS, Next.js, TypeScript, HTML5, and CSS3, with strong expertise in building responsive, mobile-first user interfaces. Experienced in developing E-Learning (LMS), CRM, HRM, HPM, and enterprise management systems.",
    },
    description2: {
      vi: "Có nền tảng Fullstack với PHP/Laravel, MySQL, giúp phối hợp hiệu quả giữa frontend và backend trong quá trình phát triển sản phẩm. Có kinh nghiệm xây dựng giao diện từ Figma, tích hợp RESTful API, WebSocket, tối ưu hiệu năng và trải nghiệm người dùng. Đồng thời tham gia review code, xây dựng kiến trúc frontend và áp dụng các tiêu chuẩn phát triển phần mềm trong môi trường Agile/Scrum.",
      en: "With a Fullstack background in PHP/Laravel and MySQL, I am able to collaborate effectively across both frontend and backend development throughout the product lifecycle. I have hands-on experience translating Figma designs into production-ready applications, integrating RESTful APIs and WebSocket services, and optimizing application performance and user experience. Additionally, I have contributed to code reviews, frontend architecture design, and the implementation of software development best practices within Agile/Scrum environments.",
    },
    description3: {
      vi: "Chủ động, trách nhiệm, có tinh thần học hỏi và mong muốn phát triển lâu dài cùng công ty.",
      en: "Proactive, responsible, eager to learn, and committed to long-term development with the company.",
    },
    contactInfo: {
      email: "truongnguyen1998.dev@gmail.com",
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
    categories: [
      {
        title: "Frontend",
        icon: "fab fa-react",
        iconColor: "text-blue-600 dark:text-blue-400",
        skills: [
          "ReactJS, Next.js (SSR, SSG)",
          "Redux",
          "Zustand",
          "React Query",
        ],

      },
      {
        title: "Backend",
        icon: "fas fa-server",
        iconColor: "text-green-600 dark:text-green-400",
        skills: [
          "PHP/Laravel",
          "MySQL",
          "MVC",
          "SQL Injection",
          "Query optimization",
        ],
      },
      {
        title: "UI & Styling",
        icon: "fas fa-paint-brush",
        iconColor: "text-purple-600 dark:text-purple-400",
        skills: [
          "HTML5",
          "CSS",
          "SCSS",
          "Grid",
          "Flexbox",
          "responsive UI",
          "TailwindCSS",
          "Ant Design",
          "ShadCN",
          "Styled-components",
        ],

      },
      {
        title: "API & Data",
        icon: "fas fa-exchange-alt",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        skills: [
          "RESTful API",
          "Axios/Fetch",
          "Realtime",
          "WebSocket",
          "TypeScript",
        ],
      },
      {
        title: "Performance & SEO",
        icon: "fas fa-fire",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: [
          "Lazy loading",
          "Code splitting",
          "Clean code",
          "tối ưu SSR/SSG",
        ],
      },
      {
        title: "Tools & Workflow",
        icon: "fas fa-tools",
        iconColor: "text-orange-600 dark:text-orange-400",
        skills: ["Git (GitHub, GitLab)", "Docker", "Figma", "Scrum"],
      },
      {
        title: "Testing",
        icon: "fas fa-vial",
        iconColor: "text-green-600 dark:text-green-400",
        skills: ["Jest", "React Testing Library", "Unit Test"],
      },
      {
        title: "Other",
        icon: "fas fa-cogs",
        iconColor: "text-gray-600 dark:text-gray-400",
        skills: ["refactoring code", "review code", "Coding với AI"],
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
    strengths: [
      {
        title: {
          vi: "Thành thạo ReactJS & Next.js",
          en: "Proficient in ReactJS & Next.js",
        },
        description: {
          vi: "Có kinh nghiệm triển khai các giải pháp SSR (Server-Side Rendering) và SSG (Static Site Generation) nhằm tối ưu hiệu suất và SEO.",
          en: "Experienced in implementing Server-Side Rendering (SSR) and Static Site Generation (SSG) solutions to optimize performance and SEO.",
        },
        icon: "fab fa-react",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: {
          vi: "Kỹ năng vững chắc về Frontend",
          en: "Strong Frontend Skills",
        },
        description: {
          vi: "HTML5, CSS3, SCSS, TailwindCSS, Styled-components, TypeScript, React Query, Zustand, Redux",
          en: "HTML5, CSS3, SCSS, TailwindCSS, Styled-components, TypeScript, React Query, Zustand, Redux",
        },
        icon: "fas fa-paint-brush",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: {
          vi: "Trải nghiệm với UI Frameworks",
          en: "Experience with UI Frameworks",
        },
        description: {
          vi: "Có kinh nghiệm sử dụng các UI Frameworks như Ant Design và ShadCN/UI để xây dựng giao diện người dùng hiện đại, nhất quán.",
          en: "Experienced in using UI frameworks such as Ant Design and ShadCN/UI to build modern, consistent user interfaces.",
        },
        icon: "fas fa-layer-group",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: {
          vi: "Kinh nghiệm Backend",
          en: "Backend Experience",
        },
        description: {
          vi: "Có hơn 3 năm kinh nghiệm xây dựng, phát triển và bảo trì các ứng dụng web sử dụng PHP/Laravel kết hợp với MySQL.",
          en: "I have over 3 years of experience building, developing, and maintaining web applications using PHP/Laravel in combination with MySQL.",
        },
        icon: "fas fa-server",
        iconColor: "text-orange-600 dark:text-orange-400",
      },
      {
        title: {
          vi: "API & WebSocket",
          en: "API & WebSocket",
        },
        description: {
          vi: "Có kinh nghiệm phát triển RESTful API phục vụ kiến trúc Microservices và tích hợp với các hệ thống bên thứ ba. Thành thạo ứng dụng WebSocket để xây dựng các tính năng real-time.",
          en: "Experienced in developing RESTful APIs for Microservices architecture and integrating with third-party systems. Proficient in using WebSockets to build real-time features.",
        },
        icon: "fas fa-exchange-alt",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        title: {
          vi: "Responsive Design & SEO",
          en: "Responsive Design & SEO",
        },
        description: {
          vi: "Am hiểu Responsive Design theo hướng Mobile-First, tối ưu hiệu năng ứng dụng và SEO.",
          en: "Proficient in Responsive Design with a Mobile-First approach, optimizing application performance and SEO.",
        },
        icon: "fas fa-mobile-alt",
        iconColor: "text-pink-600 dark:text-pink-400",
      },
      {
        title: {
          vi: "Làm việc nhóm & Scrum",
          en: "Teamwork & Scrum",
        },
        description: {
          vi: "Có kinh nghiệm làm việc theo mô hình Agile/Scrum và phối hợp hiệu quả với các nhóm Designer, QA và Backend.",
          en: "Experienced in working with Agile/Scrum methodologies and effectively collaborating with Designer, QA, and Backend teams.",
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
          vi: "Chuyên ngành: Công nghệ thông tin",
          en: "Major: Information Technology",
        },
        period: "2016 – 2019",
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
          en: "Native language",
        },
        color: "text-green-600 dark:text-green-400",
      },
      {
        language: {
          vi: "Tiếng Anh",
          en: "English",
        },
        proficiency: {
          vi: "Đọc, viết, giao tiếp kỹ thuật",
          en: "Reading, writing, technical communication",
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
    items: [
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "07/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "SaaS E-Learning(LMS) - Edusavvy",
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
        links: ["https://dash.edusavvy.io"],
      },
      {
        title: "Senior Frontend Developer",
        company: "The Mona Group - Mona Host",
        period: "07/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "SaaS HPM - Hosting Provider Management",
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
        period: "07/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "CRM - The IELTS Workshop (TIW)",
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
        period: "07/2025 – Hiện tại",
        color: "text-green-600 dark:text-green-400",
        project: "LMS - Pasal LMS",
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
        period: "01/2023 – 06/2025",
        color: "text-blue-600 dark:text-blue-400",
        project: "SAP HR - QUALEE Human Resource Management SAP",
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
        project: "Logistics CRM - PNP Global Supply",
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
        project: "Transportme - AU Bus Transportation",
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
        project: "E-commerce Website",
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
    subtitle: {
      vi: "Hãy cùng nhau tạo ra những điều tuyệt vời!",
      en: "Let's create something amazing together!",
    },
    contactInfoTitle: {
      vi: "Thông tin liên hệ",
      en: "Contact Information",
    },
    contactInfo: {
      email: "truongnguyen1998.dev@gmail.com",
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
        en: "Your Name",
      },
      emailPlaceholder: {
        vi: "Email của bạn",
        en: "Your Email",
      },
      messagePlaceholder: {
        vi: "Tin nhắn của bạn",
        en: "Your Message",
      },
      submitButton: {
        vi: "Gửi tin nhắn",
        en: "Send Message",
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
      vi: "Frontend Developer với kinh nghiệm phát triển các ứng dụng web hiện đại, luôn hướng đến việc tạo ra trải nghiệm người dùng trực quan, hiệu quả và thân thiện.",
      en: "Frontend Developer with experience in developing modern web applications, always striving to create user-friendly, efficient, and intuitive web experiences.",
    },
    socialLinks: [
      {
        href: "mailto:truongnguyen1998.dev@gmail.com",
        icon: "fas fa-envelope",
        hoverColor: "hover:bg-blue-600",
      },
      {
        href: "tel:0399812700",
        icon: "fas fa-phone",
        hoverColor: "hover:bg-green-600",
      },
      {
        href: "#",
        icon: "fab fa-linkedin",
        hoverColor: "hover:bg-blue-500",
      },
      {
        href: "#",
        icon: "fab fa-github",
        hoverColor: "hover:bg-gray-700",
      },
    ],
    copyright: {
      vi: "© 2026 Nguyễn Phi Trường. Tất cả quyền được bảo lưu.",
      en: "© 2026 Nguyen Phi Truong. All rights reserved.",
    },
  },
};
