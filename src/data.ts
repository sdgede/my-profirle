import { Project, TimelineEvent, AdditionalWork } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "mobile-dev",
    title: "Transitioning to Mobile Development",
    tagline: "A deep dive into cross-platform architecture, rapid learning cycles, and shipping production-ready code.",
    themeColor: "indigo",
    outcome: {
      title: "One month to learn Flutter.",
      metrics: "6",
      tags: ["4 Android", "2 IOS"]
    },
    how: {
      description: "The challenge was clear: pivot from web-centric development to native mobile ecosystems within a strict four-week deadline. This required not just learning a new syntax, but internalizing mobile-first design patterns, state management paradigms, and the nuances of the iOS and Android lifecycles.",
      points: [
        {
          title: "State Management",
          description: "Implemented robust Riverpod and Provider architectures for predictable, testable state across complex widget trees.",
          icon: "Layers"
        },
        {
          title: "REST API Integration",
          description: "Built resilient network layers with interceptors, caching, and offline-first capabilities using Dio.",
          icon: "Cpu"
        },
        {
          title: "iOS Build Pipelines",
          description: "Navigated the complexities of Xcode, provisioning profiles, and Fastlane for automated App Store deployments.",
          icon: "Terminal"
        }
      ],
      screenshots: [
        {
          title: "Ngardi Mobile",
          caption: "PT Sevanam Teknologi Solusindo & Tunas Daud School ecosystem integration app.",
          uiType: "mobile",
          primaryColor: "#0ea5e9",
          elements: [
            { type: "header", label: "Ngardi Mobile" },
            { type: "card", label: "Scanner Active", value: "QR Ready" },
            { type: "list", label: "Integration", value: "Sync ok • PT Sevanam" }
          ]
        },
        {
          title: "LPD Kelan Mobile",
          caption: "Custom fintech banking portal for local residential credit boards.",
          uiType: "mobile",
          primaryColor: "#e11d48",
          elements: [
            { type: "header", label: "LPD Kelan Mobile" },
            { type: "card", label: "Total Balance", value: "Rp 12.450.000" },
            { type: "button", label: "Transfer Funds" }
          ]
        },
        {
          title: "EDM Mobile",
          caption: "Enterprise school curriculum tracker and monitoring application.",
          uiType: "mobile",
          primaryColor: "#10b981",
          elements: [
            { type: "header", label: "EDM Mobile" },
            { type: "chart", label: "Performance Tracker" },
            { type: "list", label: "Semester 2", value: "Completed" }
          ]
        },
        {
          title: "Tunas Daud School",
          caption: "Official application facilitating student resources and grade delivery.",
          uiType: "mobile",
          primaryColor: "#4f46e5",
          elements: [
            { type: "header", label: "Tunas Daud School" },
            { type: "card", label: "Quick Announcement", value: "Exam schedule announced" },
            { type: "button", label: "Student Portal" }
          ]
        }
      ]
    },
    challenges: {
      title: "Challenges",
      description: "Scaling to production was a massive hurdle that forced complete mastery over local caching, state hydration, and secure bridge invocation.",
      items: [
        {
          label: "Production Architecture",
          content: "Scaling from prototype to production required strict adherence to Clean Architecture principles. Separating domain logic from UI presentation was critical to maintain velocity as the codebase grew."
        },
        {
          label: "Encryption & Security",
          content: "Implementing end-to-end encryption for user data at rest and in transit presented significant hurdles across different native platforms, requiring custom method channels."
        }
      ]
    },
    whatILearned: "Pivoting rapidly showed me that engineering fundamentals are highly transferrable. Once you master architectural patterns like Clean Architecture and reactive state, picking up a new ecosystem (like Flutter/Dart) is about choosing the right tools, not relearning how to build."
  },
  {
    id: "face-attendance",
    title: "Face Attendance System",
    tagline: "A scalable, hardware-agnostic approach to automated check-ins. Bridging the gap between physical spaces and digital records using computer vision.",
    themeColor: "cyan",
    outcome: {
      title: "The Why: Frictionless Entry.",
      metrics: "60%",
      tags: ["Reduced Bottleneck", "Intelligent Image Crop"]
    },
    how: {
      description: "Traditional ID cards are forgotten, shared, or lost. The goal was to build a system where the user's presence is their credential. It needed to be fast enough to prevent bottlenecks at entry points while maintaining a high degree of certainty.",
      points: [
        {
          title: "Python & OpenCV",
          description: "The core engine. Python was chosen for its robust ML ecosystem. OpenCV handled the heavy lifting of real-time video stream processing and Haar cascade implementations.",
          icon: "Binary"
        },
        {
          title: "PHP Backend",
          description: "Serving as the bridge between the edge devices and the database. PHP RESTful APIs were developed to receive verified identity payloads and log attendance records.",
          icon: "Server"
        },
        {
          title: "Async Pipeline",
          description: "To maintain a high frame rate, recognition logic was decoupled from network requests. Images were processed locally, and JSON payloads were pushed asynchronously.",
          icon: "Workflow"
        }
      ],
      screenshots: [
        {
          title: "01. Login & Identity",
          caption: "Secure landing page for student identification entry before facial verification.",
          uiType: "mobile",
          primaryColor: "#7c3aed",
          elements: [
            { type: "header", label: "Absensi Siswa" },
            { type: "input", label: "Nomor Induk Siswa" },
            { type: "button", label: "MASUK" }
          ]
        },
        {
          title: "02. Biometric Verification",
          caption: "Real-time camera interface using computer vision to confirm student presence.",
          uiType: "mobile",
          primaryColor: "#7c3aed",
          elements: [
            { type: "header", label: "Biometric Scan" },
            { type: "face_overlay", label: "Scanning...", value: "Confidence 98%" },
            { type: "button", label: "VERIFY" }
          ]
        },
        {
          title: "03. Admin Dashboard",
          caption: "Centralized administrator dashboard for monitoring real-time attendance across grades.",
          uiType: "dashboard",
          primaryColor: "#0ea5e9",
          elements: [
            { type: "header", label: "Admin Panel - Kelas Absen" },
            { type: "table", label: "Active Logs", value: "Class X • Class XI • Class XII" },
            { type: "chart", label: "Daily Rate: 96.4%" }
          ]
        }
      ]
    },
    challenges: {
      title: "Image Compression",
      description: "High-resolution camera feeds drastically impacted processing times. Sending uncompressed frames to the ML model caused a 2-second delay per recognition event—unacceptable for an entrance queue.",
      items: [
        {
          label: "Dynamic Downscaling",
          content: "Implemented a dynamic downscaling algorithm that identified the region of interest (the face), cropped it, and converted it to grayscale before feeding it to the recognizer."
        },
        {
          label: "Payload Optimization",
          content: "This downscaling reduced payload size by 85% while maintaining a 98% accuracy rate, paving the way for real-time edge processing."
        }
      ]
    },
    whatILearned: "Hardware constraints dictate software design. I initially over-engineered the ML model for accuracy, only to realize the local processing power couldn't handle it in real-time. The biggest takeaway was learning how to balance algorithm precision with performance trade-offs, specifically through intelligent image preprocessing before the ML stage."
  },
  {
    id: "student-admission",
    title: "Online PPDB • SMK Pariwisata Dalung Badung",
    tagline: "The official multi-stage student enrollment system (Penerimaan Peserta Didik Baru) customized for SMK Pariwisata Dalung Badung, featuring public onboarding, reactive seat tracking, and an AdminLTE administrative dashboard.",
    themeColor: "emerald",
    outcome: {
      title: "Centralized Enrollment Gateway",
      metrics: "6",
      tags: ["SMK Pariwisata Dalung", "AdminLTE Dashboard", "PPLG, TKC, & Kuliner"]
    },
    how: {
      description: "The manual admission process was severely bottlenecked by paper filings and coordination. Implemented a centralized database mapping candidate records to specialized local school tracks like PPLG, Perhotelan, Tata Kecantikan (TKC), and Kuliner.",
      points: [
        {
          title: "MVC & AdminLTE Workspaces",
          description: "Engineered scalable responsive portals for students and coordinators alike with comprehensive sidebar structures and dynamic record tables.",
          icon: "Layers"
        },
        {
          title: "Multi-Program Track Management",
          description: "Engineered automatic program quota allocations per department, supporting dynamic seat tracking and validations.",
          icon: "Cpu"
        }
      ],
      screenshots: [
        {
          title: "01. Landing Portal",
          caption: "Official PPDB onboarding gateway welcoming student candidates to SMK Pariwisata Dalung Badung.",
          uiType: "mobile",
          primaryColor: "#1e3a8a",
          elements: [
            { type: "header", label: "PPDB Online" },
            { type: "card", label: "Total Registrations", value: "6 Active Cards" },
            { type: "button", label: "DAFTAR AKUN BARU" }
          ]
        },
        {
          title: "02. Registration Form",
          caption: "Student intake form for NISN, WhatsApp validation, and department selections.",
          uiType: "form",
          primaryColor: "#1e3a8a",
          elements: [
            { type: "header", label: "Form Pendaftaran" },
            { type: "input", label: "Nama Siswa" },
            { type: "input", label: "NISN" },
            { type: "button", label: "SIMPAN DATA" }
          ]
        },
        {
          title: "03. Coordinator Control Panel",
          caption: "Verification console tracking student verification statuses and document integrity checks.",
          uiType: "dashboard",
          primaryColor: "#047857",
          elements: [
            { type: "header", label: "Coordinator Console" },
            { type: "table", label: "Data Calon Siswa", value: "Verified: 5 • Rejected: 1" }
          ]
        }
      ]
    },
    challenges: {
      title: "Program Matching",
      description: "Allowing students to choose specialized tracks like PPLG and TKC required dynamic field constraints and double-entry validations to prevent duplication.",
      items: [
        {
          label: "NISN Indexing",
          content: "Prevented duplicate student registration attempts using unique constraints on student identification numbers (NISN)."
        },
        {
          label: "Dashboard Reporting",
          content: "Connected the front-end candidate registrations straight to the administrative tables with responsive color badges."
        }
      ]
    },
    whatILearned: "I learned how to structure complex relational tables in automated databases, design real-time metrics, and match mockups directly to professional specifications demanded by public educational institutions."
  },
  {
    id: "intern-report",
    title: "Internship Report Automation",
    tagline: "Automating tedious administrative tasks through technical documentation comprehension and PDF generation.",
    themeColor: "amber",
    outcome: {
      title: "The HOW: FPDF Library",
      metrics: "99%",
      tags: ["Hours to Seconds", "Zero Format Errors"]
    },
    how: {
      description: "Internship reports are typically manual, repetitive, and prone to formatting errors. The goal was to build a system that takes structured data and automatically generates polished, standardized PDF reports. This project wasn't just about the final output; it was primarily an exercise in 'learning how to learn'—specifically, how to navigate and apply an unfamiliar technical library effectively.",
      points: [
        {
          title: "FPDF Library (Python)",
          description: "I chose the FPDF library (Python) for its robust, code-drive approach to PDF creation. Implementing it required deep-diving into its documentation to understand its coordinate system, font management, and cell positioning logic.",
          icon: "FileCode"
        },
        {
          title: "The Output",
          description: "A fully formatted, multi-page PDF generated instantly from raw JSON or CSV inputs, complete with headers, structured tables, and balanced, consistent typography.",
          icon: "Sparkles"
        }
      ],
      screenshots: [
        {
          title: "Code Blueprint",
          caption: "Python engine that reads JSON schemas and prints customized reports.",
          uiType: "form",
          primaryColor: "#d97706",
          elements: [
            { type: "header", label: "FPDF Generator Script" },
            { type: "card", label: "class PDF(FPDF):", value: "def header(self): sync" },
            { type: "button", label: "Run Compiler" }
          ]
        }
      ]
    },
    challenges: {
      title: "Documentation Deep-Dive",
      description: "Navigating abstract coordinate systems can feel like writing CSS in the dark. Designing table layouts that automatically warp sentences flawlessly required customized formulas.",
      items: [
        {
          label: "Multi-Cell Wrapping",
          content: "Calculated height dynamically before cell generation to avoid text overflowing borders or trailing onto second pages inelegant."
        },
        {
          label: "Formulaic Padding",
          content: "Created a scaling spacer engine that positions signatures and headers in proportion to the total calculated page length."
        }
      ]
    },
    whatILearned: "The core takeaway was reading technical documentation. FPDF's docs are thorough but dense. I learned to: Isolate specific concepts (like `multi_cell` behavior) through minimal test scripts, read source code when documentation lacked examples, and translate abstract library constraints into concrete layout solutions."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 1,
    year: "Early Phase",
    title: "Started Learning Web Development",
    description: "Initiated fundamental studies in front-end technologies, establishing a baseline understanding of web architecture and semantic markup.",
    icon: "Code",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: 2,
    year: "Mid-Term",
    title: "Built Face Attendance System",
    description: "Engineered an automated attendance tracking solution utilizing computer vision APIs, focusing on algorithmic accuracy and real-time processing constraints.",
    icon: "ScanFace",
    tech: ["Python", "OpenCV", "Haar Cascade", "PHP REST API", "MySQL"]
  },
  {
    id: 3,
    year: "Professional Project",
    title: "Built Online Student Admission System",
    description: "Developed a comprehensive full-stack application managing the entire student intake lifecycle, prioritizing secure data handling and state management.",
    icon: "GraduationCap",
    tech: ["MVC Pattern", "PHP", "Laravel/CodeIgniter", "Advanced Indexing"]
  },
  {
    id: 4,
    year: "Automation Project",
    title: "Internship & Report Automation",
    description: "Applied programming skills in a corporate environment to design scripts that automated complex reporting workflows, significantly reducing manual data entry.",
    icon: "FileJson",
    tech: ["Python", "FPDF Library", "JSON Parsing", "Automation Scanners"]
  },
  {
    id: 5,
    year: "Academy Shift",
    title: "Transitioned Into Mobile Development",
    description: "Pivoted focus toward native and cross-platform mobile frameworks, mastering platform-specific UI paradigms and resource constraints.",
    icon: "Smartphone",
    tech: ["Flutter/Dart", "Widget Trees", "Native Bridges", "Mobile Lifecycle"]
  },
  {
    id: 6,
    year: "Current Milestone",
    title: "Published Applications on Play Store & App Store",
    description: "Successfully navigated the deployment pipelines for major app marketplaces, delivering production-ready software to end users.",
    icon: "AppWindow",
    tech: ["App Store Connect", "Google Play Console", "Fastlane", "CI/CD Orchestration"]
  }
];

export const ADDITIONAL_WORKS: AdditionalWork[] = [
  {
    id: "finance-app-ui",
    title: "Finance App UI Concepts",
    category: "Design Concept",
    description: "Explorations in data density and financial dashboard readability. Focus on typography hierarchy and subtle data visualization.",
    visualType: "chart"
  },
  {
    id: "swiftui-cert",
    title: "SwiftUI Certification",
    category: "Certification • Apple Academy",
    description: "Advanced declarative UI patterns and state management strategies directly aligned with native Apple developer principles.",
    visualType: "badge"
  },
  {
    id: "iconography-set",
    title: "Iconography Set",
    category: "Asset Design",
    description: "Custom vector icons designed for high legibility at small scale, featuring smooth corners and consistent weights.",
    visualType: "iconset"
  },
  {
    id: "accessibility-workshop",
    title: "Accessibility Workshop",
    category: "Speaker • Presentation",
    description: "Led a seminar on implementing VoiceOver and dynamic type effectively in complex iOS applications, advocating inclusive experiences.",
    visualType: "slides"
  },
  {
    id: "spatial-computing",
    title: "Spatial Computing Concepts",
    category: "Interactive Design",
    description: "Early explorations into 3D interface paradigms and volumetric interactions for future spatial computing platforms.",
    visualType: "bubbles"
  }
];

export const WHY_ACADEMY = {
  theme: "Designing for Intent.",
  title: "Why Apple Developer Academy?",
  subtitle: "A culmination of diverse motivations, steadfast persistence, and a focused aspiration to craft products that resonate on a human level.",
  cards: [
    {
      title: "Relentless Curiosity",
      description: "The drive to understand how complex systems operate beneath the surface. It's not just about writing code; it's about deconstructing problems, exploring unconventional solutions, and asking 'why' until the root mechanics are exposed.",
      icon: "Cpu"
    },
    {
      title: "Calculated Persistence",
      description: "Bringing a methodical, resilient approach to team dynamics. When faced with technical roadblocks or design impasses, I contribute by breaking down the challenge into actionable iterations, ensuring forward momentum over perfectionism.",
      icon: "TrendingUp"
    }
  ],
  focusText: {
    heading: "Designing for Intent.",
    paragraph1: "Product Thinking: Moving beyond feature implementation to understand the holistic value proposition. The goal is to build solutions that align technical feasibility with overarching business objectives and market needs.",
    paragraph2: "User-Centered Design: The ultimate aspiration is empathy translated into interfaces. It's about reducing friction, honoring human cognition, and crafting digital environments that feel intuitive, accessible, and deeply respectful of the user's time."
  }
};
