import { UserProfile } from '../types';
import portraitImg from '../assets/images/profile_portrait_professional_1790836727455.jpg';
import fintechImg from '../assets/images/project_preview_fintech_1790836742495.jpg';
import saasImg from '../assets/images/project_preview_saas_1790836755332.jpg';
import mobileImg from '../assets/images/project_preview_mobile_1790836767156.jpg';

export const initialProfileData: UserProfile = {
  name: "Hendi Junaidy",
  headline: "Senior Full-Stack & Systems Engineer",
  secondaryTitle: "Arsitek Solusi Web & Ekosistem Terdistribusi",
  location: "Jakarta, Indonesia (Tersedia Remote Global)",
  availability: "Available for Hire",
  summary: "Insinyur perangkat lunak dengan 8+ tahun pengalaman membangun sistem web berkinerja tinggi, arsitektur microservices terdistribusi, serta antarmuka modern yang cepat dan mudah diakses. Berfokus pada keandalan sistem, latensi rendah, dan kepuasan pengguna akhir.",
  extendedBio: [
    "Saya mengkhususkan diri dalam merancang sistem skala besar yang tangguh, mulai dari frontend interaktif berbasis React & TypeScript hingga backend terdistribusi bervolume transaksi tinggi.",
    "Selama karir saya, saya telah memimpin tim teknik lintas fungsi untuk mengirimkan platform fintech, analitik cloud, dan aplikasi berbasis cloud yang melayani jutaan pengguna aktif bulanan.",
    "Filosofi kerja saya bertumpu pada pragmatisme arsitektur, kesederhanaan desain, disiplin penulisan kode yang dapat dipelihara, dan komitmen kuat pada dampak bisnis yang nyata."
  ],
  email: "hendijunaidy@gmail.com",
  phone: "+62 812-8890-4321",
  portraitUrl: portraitImg,
  
  recruiterFacts: {
    currentStatus: "Aktif mencari peran Senior / Staff Engineer atau Tech Lead",
    targetRoles: [
      "Staff Software Engineer",
      "Senior Full-Stack Engineer",
      "Lead Backend / Distributed Systems",
      "Technical Architect"
    ],
    noticePeriod: "1 Bulan (dapat dinegosiasikan untuk peran strategis)",
    workArrangement: "Remote Penuh / Hybrid (Jakarta & Sekitarnya) / Relokasi Terbuka",
    location: "Jakarta, Indonesia (WIB / UTC+7)",
    timeZone: "Fleksibel untuk tumpang tindih waktu UTC-5 (EST) hingga UTC+8 (SGT)",
    experienceYears: 8,
    salaryExpectation: "Kompetitif (IDR 45.000.000 - 65.000.000 / bln atau $4.000 - $6.500 USD remote)",
    visaStatus: "Warga Negara Indonesia (WNI), Paspor Aktif, Siap Perjalanan Dinas"
  },

  socials: [
    {
      id: "linkedin",
      name: "LinkedIn",
      platform: "linkedin",
      url: "https://linkedin.com/in/hendijunaidy",
      handle: "hendijunaidy",
      description: "Jaringan profesional, riwayat karir terverifikasi, dan rekomendasi rekan kerja.",
      followerCount: "2.400+ Koneksi",
      primary: true
    },
    {
      id: "github",
      name: "GitHub",
      platform: "github",
      url: "https://github.com/hendijunaidy",
      handle: "hendijunaidy",
      description: "Repositori kode terbuka, arsitektur sistem, dan kontribusi proyek open source.",
      followerCount: "1.150+ Bintang",
      primary: true
    },
    {
      id: "x",
      name: "X (Twitter)",
      platform: "x",
      url: "https://x.com/hendijunaidy",
      handle: "@hendijunaidy",
      description: "Pemikiran seputar rekayasa perangkat lunak, sistem terdistribusi, dan ekosistem TypeScript.",
      followerCount: "4.800+ Pengikut",
      primary: true
    },
    {
      id: "blog",
      name: "Tech Journal & Essays",
      platform: "blog",
      url: "https://hendijunaidy.hashnode.dev",
      handle: "journal.hendijunaidy.id",
      description: "Artikel teknis mendalam mengenai optimasi database, caching, dan arsitektur web modern.",
      followerCount: "18+ Artikel Diterbitkan",
      primary: false
    },
    {
      id: "telegram",
      name: "Telegram Langsung",
      platform: "telegram",
      url: "https://t.me/hendijunaidy",
      handle: "@hendijunaidy",
      description: "Saluran pesan langsung untuk respon cepat perekrut dan diskusi teknis non-formal.",
      primary: false
    }
  ],

  projects: [
    {
      id: "omniflow-treasury",
      title: "OmniFlow Treasury & Liquidity Engine",
      category: "Fintech & Enterprise",
      shortDescription: "Platform otomatisasi rekonsiliasi kas dan likuiditas multi-bank dengan pemrosesan waktu-nyata bervolume $14M+ per bulan.",
      fullDescription: "Sistem enterprise tingkat perbankan yang dirancang untuk mengotomasi rekonsiliasi multi-rekening dan prediksi arus kas perusahaan skala menengah hingga multinasional. Dilengkapi dengan audit trail terenkripsi dan antarmuka analitik real-time.",
      challenge: "Proses rekonsiliasi manual sebelumnya memakan waktu 4 hari kerja di akhir bulan dengan tingkat human error 4.2% serta keterlambatan deteksi anomali transfer.",
      solution: "Membangun event-driven engine berbasis Go dan Redis Streams dengan frontend React terisolasi yang mampu menyandingkan 200.000+ transaksi dalam waktu kurang dari 3 menit secara deterministik.",
      impactMetrics: [
        "Pengurangan waktu rekonsiliasi bulanan dari 96 jam menjadi 8 menit",
        "Penanganan volume transaksi $14M+/bulan tanpa insiden data loss",
        "Peningkatan akurasi prediksi likuiditas hingga 99.4%"
      ],
      technologies: ["React", "TypeScript", "Go (Golang)", "PostgreSQL", "Redis Streams", "Docker", "Tailwind CSS"],
      year: "2024 - 2025",
      image: fintechImg,
      liveUrl: "https://omniflow-demo.example.com",
      githubUrl: "https://github.com/hendijunaidy/omniflow-treasury-engine",
      featured: true
    },
    {
      id: "katalis-cloud",
      title: "Katalis Cloud Telemetry & Observability",
      category: "DevTools & Cloud",
      shortDescription: "Alat telemetri terdistribusi untuk melacak bottleneck performa layanan mikro dan latensi database p99 dalam hitungan milidetik.",
      fullDescription: "Dashboard observabilitas modern yang mengumpulkan metrik OpenTelemetry dari kluster Kubernetes dan menyajikan visualisasi grafis ketergantungan layanan, waterfall trace, dan deteksi regresi query secara otomatis.",
      challenge: "Tim engineering kesulitan mengidentifikasi akar penyebab lonjakan latensi p99 antar microservice yang saling bergantung secara asinkron.",
      solution: "Merancang agent pengumpul metrik ringan dengan eBPF dan ingestor pipeline berdaya serap tinggi menggunakan ClickHouse dan arsitektur visualisasi visual streaming.",
      impactMetrics: [
        "Menurunkan Mean Time to Detect (MTTD) insiden sistem sebesar 68%",
        "Overhead tracing agent kurang dari 1.2% CPU pada pod produksi",
        "Digunakan oleh 14 tim engineering independen dalam lingkungan internal"
      ],
      technologies: ["TypeScript", "Next.js", "ClickHouse", "OpenTelemetry", "Node.js", "gRPC", "Tailwind CSS"],
      year: "2023 - 2024",
      image: saasImg,
      liveUrl: "https://katalis-telemetry.example.com",
      githubUrl: "https://github.com/hendijunaidy/katalis-observability",
      featured: true
    },
    {
      id: "zenith-companion",
      title: "Zenith Focus & Workflow Companion",
      category: "Mobile & UX",
      shortDescription: "Aplikasi produktivitas kerja berbasis offline-first dengan sinkronisasi CRDT dan integrasi kalender cerdas.",
      fullDescription: "Aplikasi cross-platform yang dirancang untuk profesional dengan beban kognitif tinggi. Menyediakan time-blocking tanpa gangguan, pelacakan siklus energi kerja, dan sinkronisasi instan antar perangkat tanpa bergantung koneksi internet konstan.",
      challenge: "Sebagian besar aplikasi produktivitas gagal berfungsi saat offline atau mengalami konflik data sinkronisasi saat perangkat terhubung kembali.",
      solution: "Mengimplementasikan arsitektur database lokal SQLite dengan algoritma CRDT (Conflict-free Replicated Data Types) dan desain visual monokromatik bebas distraksi.",
      impactMetrics: [
        "12.000+ pengguna aktif bulanan dengan rating rata-rata 4.9/5",
        "Waktu muat aplikasi instan (< 180ms) berkat arsitektur local-first",
        "Zero-data-loss pada uji stres koneksi terputus acak 1.000 kali berturut-turut"
      ],
      technologies: ["React Native", "TypeScript", "SQLite", "CRDTs", "Tailwind CSS", "Web Workers"],
      year: "2023",
      image: mobileImg,
      liveUrl: "https://zenith-companion.example.com",
      githubUrl: "https://github.com/hendijunaidy/zenith-focus-companion",
      featured: true
    },
    {
      id: "aura-design-system",
      title: "Aura Headless UI & Token Architecture",
      category: "Open Source",
      shortDescription: "Sistem desain modular tanpa gaya opini yang mengutamakan aksesibilitas WCAG AAA dan performa rendering kilat.",
      fullDescription: "Pustaka komponen React headless sumber terbuka yang menyediakan primitives interaktif (keyboard navigation, ARIA attributes, focus trapping) untuk membangun antarmuka web modern dengan kebebasan styling total.",
      challenge: "Pustaka UI konvensional seringkali membengkakkan ukuran bundel dan membatasi fleksibilitas kustomisasi branding klien.",
      solution: "Memisahkan logika aksesibilitas murni ke dalam custom hooks ringan tanpa dependensi eksternal, menghasilkan ukuran runtime di bawah 4.8kB gzip.",
      impactMetrics: [
        "3.400+ unduhan mingguan di npm registry",
        "Mendukung 100% kepatuhan standar aksesibilitas WCAG 2.2 Level AAA",
        "Diadopsi oleh 3 startup skala Seri A di Asia Tenggara"
      ],
      technologies: ["TypeScript", "React", "Rollup", "Accessibility (a11y)", "Tailwind CSS v4"],
      year: "2022 - 2025",
      image: saasImg,
      liveUrl: "https://aura-ui.example.com",
      githubUrl: "https://github.com/hendijunaidy/aura-headless-tokens",
      featured: false
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Lead Staff Software Engineer",
      company: "FinEdge Asia Technologies",
      location: "Jakarta & Singapura (Hybrid)",
      period: "Januari 2023 — Sekarang",
      duration: "3+ tahun",
      summary: "Memimpin arsitektur platform inti transaksi dan mengarahkan strategi teknis 18 insinyur perangkat lunak di lini produk pembayaran korporat.",
      achievements: [
        "Merancang ulang sistem pemrosesan transaksi pembayaran, memotong latensi p99 dari 480ms menjadi 54ms di bawah beban 1.800 RPS",
        "Menginisiasi standarisasi arsitektur frontend dengan TypeScript dan micro-frontends, menghemat siklus rilis fitur dari 3 minggu menjadi 4 hari kerja",
        "Membimbing 6 insinyur tingkat menengah hingga berhasil dipromosikan menjadi Senior Engineer dalam tempo 18 bulan",
        "Mengurangi biaya infrastruktur AWS cloud sebesar 32% ($14.000/bulan) melalui optimasi database query pool dan penataan caching tier"
      ],
      technologies: ["Go", "TypeScript", "React", "PostgreSQL", "AWS ECS", "Kafka", "Docker"]
    },
    {
      id: "exp-2",
      role: "Senior Full-Stack Engineer",
      company: "Nusantara Cloudworks",
      location: "Jakarta, Indonesia (Remote)",
      period: "Juli 2021 — Desember 2022",
      duration: "1.5 tahun",
      summary: "Mengembangkan dashboard multi-tenant SaaS untuk manajemen logistik kargo dan integrasi API bea cukai regional.",
      achievements: [
        "Membangun portal pelacakan armada real-time menggunakan WebSockets dan Redis Geo, melayani 40.000+ kendaraan logistik simultan",
        "Meningkatkan skor performa Core Web Vitals dari 52 menjadi 98 pada dashboard pelanggan utama",
        "Mengimplementasikan pipeline CI/CD otomatis berbasis GitHub Actions dengan cakupan unit test 88% dan zero-downtime deployment"
      ],
      technologies: ["React", "Next.js", "Node.js", "Redis", "PostgreSQL", "Docker", "Tailwind CSS"]
    },
    {
      id: "exp-3",
      role: "Systems & Frontend Engineer",
      company: "GoScale Digital Solutions",
      location: "Bandung, Indonesia",
      period: "Maret 2019 — Juni 2021",
      duration: "2.3 tahun",
      summary: "Mendesain dan mengeksekusi antarmuka e-commerce berkecepatan tinggi serta arsitektur backend GraphQL terintegrasi.",
      achievements: [
        "Membangun katalog produk e-commerce dengan Server-Side Rendering yang menangani 1.2M kunjungan saat festival belanja tahunan",
        "Mengurangi ukuran bundel JavaScript klien hingga 44% melalui pemisahan kode dinamis dan lazy-loading cerdas",
        "Membantu migrasi monolitik PHP lama ke arsitektur layanan mikro berbasis Node.js dan GraphQL"
      ],
      technologies: ["JavaScript / TypeScript", "React", "GraphQL", "Node.js", "MySQL", "Webpack"]
    }
  ],

  skillCategories: [
    {
      title: "Frontend Architecture & Web Craft",
      description: "Membangun antarmuka pengguna yang cepat, mudah diakses, responsif, dan elegan.",
      skills: [
        { name: "React / Next.js", level: "Expert · 7+ thn", highlight: "Server components, concurrent rendering, state machines" },
        { name: "TypeScript", level: "Expert · 6+ thn", highlight: "Strict type safety, generic utility types, AST tooling" },
        { name: "Tailwind CSS & Styling Systems", level: "Expert · 6+ thn", highlight: "Design tokens, fluid typography, zero-runtime overhead" },
        { name: "Web Performance & Core Web Vitals", level: "Advanced · 5+ thn", highlight: "LCP/INP/CLS optimization, bundle budget, asset streaming" },
        { name: "Accessibility (WCAG 2.2)", level: "Advanced · 4+ thn", highlight: "Screen readers, ARIA patterns, keyboard navigation flow" }
      ]
    },
    {
      title: "Backend Engineering & Distributed Systems",
      description: "Infrastruktur server, database relasional, dan streaming data berdaya tahan tinggi.",
      skills: [
        { name: "Node.js & Express / NestJS", level: "Expert · 7+ thn", highlight: "Event-loop tuning, cluster worker pools, asynchronous pipelines" },
        { name: "Go (Golang)", level: "Advanced · 4+ thn", highlight: "Goroutines concurrency, high-throughput microservices, CLI tools" },
        { name: "PostgreSQL & Database Design", level: "Expert · 6+ thn", highlight: "Indexing strategies, query optimization, ACID transactions, partitioning" },
        { name: "Redis & In-Memory Caching", level: "Advanced · 5+ thn", highlight: "Pub/Sub, Redis Streams, distributed locks, TTL strategies" },
        { name: "RESTful & GraphQL & gRPC", level: "Advanced · 5+ thn", highlight: "API versioning, schema contracts, protobuf serialization" }
      ]
    },
    {
      title: "DevOps, Cloud & Engineering Leadership",
      description: "Pengiriman perangkat lunak yang aman, teruji, dan dapat diamati di lingkungan produksi.",
      skills: [
        { name: "Docker & Containerization", level: "Advanced · 5+ thn", highlight: "Multi-stage builds, minimal production images, security scanning" },
        { name: "CI/CD & GitHub Actions", level: "Advanced · 5+ thn", highlight: "Automated regression testing, semantic release, preview deployments" },
        { name: "System Design & Architecture", level: "Expert · 6+ thn", highlight: "Fault-tolerant topologies, circuit breakers, CQRS, event sourcing" },
        { name: "Observability (OpenTelemetry)", level: "Advanced · 3+ thn", highlight: "Distributed tracing, metric aggregation, p99 alerting" },
        { name: "Mentorship & Code Review", level: "Expert · 5+ thn", highlight: "Technical RFCs, engineering culture, pairing, growth rubrics" }
      ]
    }
  ],

  recommendations: [
    {
      id: "rec-1",
      author: "Raditya Prasetya",
      role: "VP of Engineering",
      company: "FinEdge Asia Technologies",
      relationship: "Atasan langsung Hendi selama 3 tahun terakhir",
      content: "Hendi adalah salah satu insinyur terkuat yang pernah bekerja sama dengan saya. Kemampuannya mendiagnosis bottleneck arsitektur terdistribusi dan menyederhanakan kode rumit sangat luar biasa. Di bawah kepemimpinannya, platform pembayaran kami mencapai SLA 99.98% tanpa cacat. Ia akan menjadi aset tak ternilai bagi tim engineering mana pun yang ingin tumbuh cepat dengan fondasi solid.",
      date: "Februari 2025",
      avatarText: "RP"
    },
    {
      id: "rec-2",
      author: "Amanda Wijaya",
      role: "Lead Product Manager",
      company: "Nusantara Cloudworks",
      relationship: "Bekerja sama erat dalam peluncuran 4 produk enterprise",
      content: "Bekerja dengan Hendi terasa sangat menenangkan bagi seorang Product Manager. Ia bukan hanya mengeksekusi tiket; ia memahami dampak komersial dari setiap fitur, secara proaktif menyarankan penyederhanaan UX, dan selalu memberikan estimasi waktu yang akurat. Antarmuka yang ia buat selalu cepat dan disukai pengguna.",
      date: "November 2023",
      avatarText: "AW"
    },
    {
      id: "rec-3",
      author: "David Chen",
      role: "Co-Founder & Chief Technology Officer",
      company: "GoScale Digital",
      relationship: "Memimpin proyek transformasi sistem bersama Hendi",
      content: "Hendi memiliki standar kualitas kode yang sangat tinggi tanpa mengorbankan kecepatan pengiriman. Komitmennya pada penulisan pengujian dan dokumentasi memudahkan tim lain untuk berkontribusi. Beliau adalah insinyur langka yang fasih berbicara bahasa bisnis sekaligus arsitektur low-level.",
      date: "Agustus 2021",
      avatarText: "DC"
    }
  ]
};
