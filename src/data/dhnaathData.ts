export interface DhnaathProject {
  id: string;
  title: string;
  category: 'logistics' | 'process' | 'research';
  categoryLabel: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  fullDescription: {
    id: string;
    en: string;
  };
  imageUrl: string;
  link?: string;
  driveLink?: string;
  tags: string[];
  order: number;
  highlights: {
    id: string[];
    en: string[];
  };
  metrics?: {
    label: { id: string; en: string };
    value: string;
  }[];
}

export interface DhnaathExperience {
  id: string;
  title: string;
  titleEn?: string;
  company: string;
  companyLogo?: string;
  companyLogoDark?: string;
  location: string;
  period: {
    id: string;
    en: string;
  };
  employmentType: {
    id: string;
    en: string;
  };
  descriptionPoints: {
    id: string[];
    en: string[];
  };
  tags: string[];
  images?: string[];
  companyUrl?: string;
}

export interface DhnaathData {
  personal: {
    name: string;
    degree: string;
    brandName: string;
    motto: {
      noun: string;
      adjective: string;
      verb: string;
      explanation: {
        id: string;
        en: string;
      };
    };
    quote: string;
    quoteAuthor: string;
    location: string;
    phone: string;
    whatsappUrl: string;
    email: string;
    emailAlt: string;
    website: string;
    portfolioUrl: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    github: string;
    avatarUrl: string;
    avatarThumbUrl: string;
  };
  stats: {
    label: { id: string; en: string };
    value: string;
  }[];
  experiences: DhnaathExperience[];
  projects: DhnaathProject[];
  education: {
    tertiary: {
      institution: string;
      degree: { id: string; en: string };
      faculty: { id: string; en: string };
      period: string;
      transcriptImage: string;
    };
    schools: {
      institution: string;
      level: { id: string; en: string };
      period: string;
      location: string;
    }[];
  };
  certifications: {
    title: string;
    issuer: string;
    year: string;
    score?: string;
    type: 'six-sigma' | 'sap' | 'language' | 'procurement' | 'insurance';
  }[];
  skills: {
    id: string;
    title: { id: string; en: string };
    iconName: string;
    items: string[];
  }[];
  languages: {
    name: { id: string; en: string };
    level: { id: string; en: string };
    proficiency: number;
  }[];
  principles: {
    title: { id: string; en: string };
    desc: { id: string; en: string };
  }[];
}

export const dhnaathData: DhnaathData = {
  personal: {
    name: "Dhia Najmi Athallah",
    degree: "S.Tr.Log., CSSWB",
    brandName: "Dhnaath",
    motto: {
      noun: "Systems Thinker",
      adjective: "Lifelong Learning",
      verb: "Lillāhi Ta'ālā",
      explanation: {
        id: "Saya berpikir dalam sistem, pola, dan berbagai kemungkinan. Saya percaya bahwa belajar tidak pernah berhenti. Segala hal yang saya lakukan berawal dari niat yang tulus karena Allah.",
        en: "I think in systems, patterns, and possibilities. I believe learning never ends. Everything I do begins with sincere intention for Allah.",
      },
    },
    quote: "Every great design begins with an even better story.",
    quoteAuthor: "Lorinda Mamo",
    location: "Indonesia",
    phone: "+62 851-6162-9923",
    whatsappUrl: "https://wa.me/6285161629923",
    email: "contact@dhnaath.com",
    emailAlt: "dhnaath@gmail.com",
    website: "https://dhnaath.com",
    portfolioUrl: "https://aboutme.dhnaath.com",
    linkedin: "https://linkedin.com/in/dhnaath",
    instagram: "https://instagram.com/dhnaath",
    twitter: "https://twitter.com/dhnaath",
    github: "https://github.com/dhnaath",
    avatarUrl: "/images/profile-662.webp",
    avatarThumbUrl: "/images/profile-331.webp",
  },
  stats: [
    {
      label: { id: "Pengalaman & Magang", en: "Professional Roles" },
      value: "5+",
    },
    {
      label: { id: "Gelar Akademik", en: "Tertiary Degree" },
      value: "S.Tr.Log.",
    },
    {
      label: { id: "Sertifikasi Six Sigma", en: "Six Sigma Belts" },
      value: "CSSWB",
    },
    {
      label: { id: "Skor Bahasa (CEFR)", en: "CEFR B1 Score" },
      value: "302",
    },
  ],
  experiences: [
    {
      id: "kopnus-pos",
      title: "Agen Oren by KOPNUS & Account Officer Lending",
      company: "KopnusPos — KSP Nusantara",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/5-1.webp",
      companyLogoDark: "/images/kopnus-logo-dark.webp",
      location: "Kantor PosIND KCP Putussibau 78711",
      period: {
        id: "September 2025 — Sekarang",
        en: "September 2025 — Present",
      },
      employmentType: {
        id: "Kontrak & Mandiri Berbasis Komisi",
        en: "Contract & Commission-Based Freelance",
      },
      descriptionPoints: {
        id: [
          "Memasarkan produk pinjaman pensiun (PNS, TNI, Polri) secara aktif melalui pendekatan langsung door-to-door, brosur cetak, dan pesan siaran WhatsApp.",
          "Mengelola siklus lengkap pengajuan kredit: analisis kebutuhan klien, verifikasi dokumen, koordinasi asuransi, hingga pencairan dana bersama staf PosIND.",
          "Membangun kemitraan erat dengan komunitas pensiunan dan juru bayar pensiun, serta mengedukasi penggunaan aplikasi penunjang (Taspen/Asabri).",
          "Menyusun laporan pipeline kunjungan harian dan evaluasi prospek, serta menangani konsultasi dan keluhan nasabah dengan solutif.",
        ],
        en: [
          "Marketed pension loan products (Civil Servants, Military, Police) through proactive door-to-door visits, printed collaterals, and WhatsApp broadcasts.",
          "Managed end-to-end credit processing: client needs assessment, document verification, insurance coordination, and loan disbursement with PosIND branch staff.",
          "Fostered relationships with pensioner communities and official disbursement agents, educating clients on Taspen/Asabri digital tools.",
          "Compiled daily pipeline and prospect performance reports, delivering solution-oriented customer inquiry handling.",
        ],
      },
      tags: ["Credit Analysis", "Lending", "Taspen/Asabri", "Marketing", "Documentation", "Koperasi"],
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1763565179282.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1763565039525.webp",
      ],
    },
    {
      id: "pos-indonesia",
      title: "Assistant Branch Manager",
      company: "PosIND — PT Pos Indonesia (Persero)",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/7-1.webp",
      companyUrl: "https://drive.google.com/file/d/1KOLOerblpTaKTIVoJdEpZKFegU5Yg4Kz/view?usp=sharing",
      location: "Kantor PosIND KCP Lanjak 78766",
      period: {
        id: "3 Maret — 9 April 2025",
        en: "March 3 — April 9, 2025",
      },
      employmentType: {
        id: "Magang (Internship)",
        en: "Internship",
      },
      descriptionPoints: {
        id: [
          "Mempersiapkan uang tunai untuk setoran bank, mengisi slip setoran, serta melakukan rekonsiliasi kas harian guna memastikan kesesuaian fisik uang dengan catatan sistem.",
          "Menutup sistem loket kasir secara harian dengan menyusun laporan backsheet dan menyelesaikan apabila terdapat selisih dana.",
          "Memproses dan mencatat pembayaran tagihan pelanggan via sistem PosPay Loket dan menerbitkan tanda terima sah.",
          "Memverifikasi dokumen identitas penyaluran Bantuan Sosial Tunai (BST) Kemensos dan menjaga jejak audit dokumen bersama Branch Manager.",
        ],
        en: [
          "Prepared cash deposits for commercial banks, drafted deposit slips, and conducted daily cash reconciliations matching physical balances to core systems.",
          "Executed daily cashier closing procedures, generating backsheet statements and auditing transaction variances.",
          "Processed utility payments and financial services through PosPay Loket, issuing official receipts.",
          "Audited beneficiary identification documents for the distribution of Ministry of Social Affairs Cash Social Assistance (BST).",
        ],
      },
      tags: ["BUMN", "Cash Reconciliation", "PosPay", "BST Kemensos", "Audit Trail", "Branch Operations"],
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1741149010112.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1744248285339.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1741061244804.webp",
      ],
    },
    {
      id: "astra-auto2000",
      title: "Assistant Partman",
      company: "TSO–Auto2000 — PT Astra International Tbk",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image.webp",
      companyUrl: "https://drive.google.com/file/d/1WnY9lj2eNExOMzY-hYszUR9plnWXxuiJ/view?usp=sharing",
      location: "Auto2000 Branch Logistics & Parts",
      period: {
        id: "April — Oktober 2023",
        en: "April — October 2023",
      },
      employmentType: {
        id: "Magang (Internship)",
        en: "Internship",
      },
      descriptionPoints: {
        id: [
          "Mengoptimalkan penataan rak penyimpanan suku cadang berdasarkan kode standar agar alur kerja gudang lebih rapi, teratur, dan efisien.",
          "Mengelola akurasi data inventaris di gudang melalui stock opname berkala dan memperbarui pencatatan di Warehouse Management System (WMS).",
          "Mengelola proses inbound dan outbound suku cadang: mencocokkan Goods Received Note (GRN) dengan Purchase Order (PO), picking, packing, labeling, dan distribusi ke teknisi bengkel.",
          "Melakukan rekonsiliasi data Special Service Tools (SST) serta memantau utilisasi alat oleh teknisi untuk meminimalkan risiko kehilangan sesuai SOP.",
        ],
        en: [
          "Optimized spare parts storage racking following standard alphanumeric classification codes to maximize warehouse pick-path throughput.",
          "Maintained inventory accuracy through scheduled cycle counts and perpetual stock opname within the Warehouse Management System (WMS).",
          "Managed inbound & outbound flows: verified Goods Received Notes (GRN) against Purchase Orders (PO), picking, packing, and distribution to workshop technicians.",
          "Conducted perpetual reconciliation of Special Service Tools (SST), monitoring technician tool check-in/out to prevent tool shrinkage.",
        ],
      },
      tags: ["WMS", "Warehouse Operations", "Stock Opname", "Special Service Tools", "GRN vs PO", "Automotive Logistics"],
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/08/image.webp",
      ],
    },
    {
      id: "tisce-huachuang",
      title: "Import – Export Specialist",
      company: "TISCE – Ever Trust Tools (Huachuang Singapore Pte. Ltd.)",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/4-1.webp",
      companyLogoDark: "/images/tisce-logo-dark.webp",
      location: "Singapore (Remote)",
      period: {
        id: "November 2024 — Februari 2025",
        en: "November 2024 — February 2025",
      },
      employmentType: {
        id: "Mandiri, Berbasis Komisi (Freelancer)",
        en: "Independent, Commission-Based (Freelancer)",
      },
      descriptionPoints: {
        id: [
          "Mencari dan menjaring calon pembeli lokal di Indonesia yang membutuhkan pasokan barang, perkakas, atau mesin industri dari China.",
          "Mengumpulkan dan memverifikasi spesifikasi kebutuhan barang serta detail kontak pembeli guna menyusun dokumen Request for Quotation (RFQ) yang akurat.",
          "Memantau respons dari pemasok global dan menindaklanjuti penawaran harga kepada calon pembeli untuk kelancaran pengadaan B2B.",
        ],
        en: [
          "Sourced and acquired prospective Indonesian B2B buyers requiring machinery, tools, and industrial supplies from China.",
          "Collected and audited technical specifications to compile precision Request for Quotation (RFQ) packages on the procurement platform.",
          "Tracked manufacturer RFQ responses and executed commercial follow-ups with corporate buyers to expedite cross-border transactions.",
        ],
      },
      tags: ["Global Sourcing", "RFQ", "B2B Procurement", "Cross-Border Trade", "Import-Export"],
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-031752.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-031954.webp",
      ],
    },
    {
      id: "gao-tek",
      title: "Human Resources Specialist",
      company: "GAO Tek Inc. & GAO RFID Inc.",
      companyLogoDark: "/images/gao-logo-dark.webp",
      location: "New York & Toronto (Remote)",
      period: {
        id: "Desember 2024 — Februari 2025",
        en: "December 2024 — February 2025",
      },
      employmentType: {
        id: "Magang Global Jarak Jauh (Virtual Internship)",
        en: "Virtual Global Internship",
      },
      descriptionPoints: {
        id: [
          "Mengelola koordinasi talenta global dan penjadwalan proses orientasi untuk organisasi teknologi multinasional.",
          "Memfasilitasi komunikasi internal tim jarak jauh, verifikasi presensi kerja, dan dokumentasi administrasi SDM.",
          "Menerapkan prinsip tata kelola organisasi adaptif untuk memastikan target operasional harian tercapai.",
        ],
        en: [
          "Coordinated multinational talent onboarding and scheduling for a global technology and RFID equipment provider.",
          "Facilitated virtual team communication, timesheet audit trails, and HR operational documentation.",
          "Applied agile management practices to track team performance and deliverables across time zones.",
        ],
      },
      tags: ["Global HR", "Remote Operations", "Talent Management", "Communication"],
    },
  ],
  projects: [
    {
      id: "proj-hoq",
      title: "Proyek Logistik III: House of Quality (QFD)",
      category: "process",
      categoryLabel: {
        id: "Quality & Process",
        en: "Quality & Process",
      },
      description: {
        id: "Penerapan matriks House of Quality (Quality Function Deployment) untuk menerjemahkan kebutuhan pelanggan ke dalam spesifikasi teknis operasional logistik.",
        en: "Application of the House of Quality (QFD) matrix translating voice-of-customer requirements into actionable technical logistics specifications.",
      },
      fullDescription: {
        id: "Riset rekayasa kualitas sistem rantai pasok menggunakan metode House of Quality (QFD). Proyek ini memetakan ekspektasi pelanggan (Voice of Customer) terhadap kapabilitas teknis pergudangan dan pengiriman, menganalisis korelasi antar-parameter teknis, serta merumuskan prioritas perbaikan kualitas layanan logistik untuk mencapai keunggulan kompetitif yang terukur.",
        en: "Supply chain quality engineering project utilizing the House of Quality (QFD) framework. Systematically mapped Voice of Customer (VOC) expectations against technical warehousing and fulfillment capabilities, evaluated technical correlations, and established prioritized service improvement benchmarks.",
      },
      imageUrl: "https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-1-1_11zon.webp",
      driveLink: "https://drive.google.com/file/d/1X5_K-qH_i9WjQ_gYj-8xVq/view",
      tags: ["House of Quality", "QFD", "Benchmarking", "Service Quality", "Quality Engineering"],
      order: 0,
      highlights: {
        id: [
          "Analisis matriks korelasi antara kebutuhan pengguna dan parameter teknis rantai pasok.",
          "Penetapan bobot prioritas dan target benchmark terhadap kompetitor sejenis.",
          "Rekomendasi implementasi operasional untuk mereduksi cacat penanganan barang.",
        ],
        en: [
          "Correlation matrix evaluation between customer expectations and logistics technical attributes.",
          "Competitive benchmarking and technical trade-off resolution.",
          "Actionable operational recommendations to mitigate cargo handling discrepancies.",
        ],
      },
      metrics: [
        { label: { id: "Metodologi", en: "Methodology" }, value: "QFD Matrix" },
        { label: { id: "Fokus", en: "Focus" }, value: "Quality" },
        { label: { id: "Domain", en: "Domain" }, value: "Logistics" },
      ],
    },
    {
      id: "proj-design-thinking",
      title: "Proyek Logistik II: Design Thinking",
      category: "process",
      categoryLabel: {
        id: "Human-Centered Design",
        en: "Human-Centered Design",
      },
      description: {
        id: "Pengembangan solusi inovatif alur operasional pergudangan menggunakan tahapan Design Thinking: Empathize, Define, Ideate, Prototype, dan Test.",
        en: "Developing innovative warehouse workflow solutions through the Design Thinking framework: Empathize, Define, Ideate, Prototype, and Test.",
      },
      fullDescription: {
        id: "Implementasi pendekatan Design Thinking untuk menyelesaikan bottleneck proses pergudangan. Melibatkan observasi lapangan langsung, wawancara mendalam dengan operator gudang, identifikasi pain points kritis, pembuatan purwarupa alur kerja baru, serta validasi prototipe guna meningkatkan kepuasan operator dan efisiensi waktu pengambilan barang (picking time).",
        en: "Application of human-centered Design Thinking to resolve warehouse operational bottlenecks. Involved direct field observations, operator interviews, pain point root cause mapping, lean workflow prototyping, and iterative testing to elevate worker safety and reduce order picking cycle times.",
      },
      imageUrl: "https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-3_11zon.webp",
      tags: ["Design Thinking", "Empathy Mapping", "Prototyping", "Lean Warehouse", "Problem Solving"],
      order: 1,
      highlights: {
        id: [
          "Wawancara langsung dengan pemangku kepentingan untuk membedah akar masalah operasional.",
          "Pembuatan prototipe visual alur picking dan staging area yang lebih ergonomis.",
          "Pengurangan estimasi waktu tunggu operator melalui penataan ulang alur kerja.",
        ],
        en: [
          "Direct stakeholder interviews to unearth root operational impediments.",
          "Ergonomic workflow and staging area layout prototype development.",
          "Demonstrated reduction in operator idle time through intuitive visual cues.",
        ],
      },
      metrics: [
        { label: { id: "Kerangka Kerja", en: "Framework" }, value: "5-Stage DT" },
        { label: { id: "Tipe Solusi", en: "Solution" }, value: "Lean Layout" },
      ],
    },
    {
      id: "proj-business-process",
      title: "Proyek Logistik I: Business Process Mapping",
      category: "logistics",
      categoryLabel: {
        id: "Supply Chain & BPM",
        en: "Supply Chain & BPM",
      },
      description: {
        id: "Pemodelan dan dokumentasi arsitektur proses bisnis inbound, penyimpanan, dan outbound inventaris menggunakan standar visual BPMN.",
        en: "BPMN visual modeling and comprehensive documentation of inbound receiving, inventory storage, and outbound distribution workflows.",
      },
      fullDescription: {
        id: "Proyek perancangan diagram alir proses bisnis rantai pasok secara sistematis. Memetakan interaksi multi-divisi (procurement, warehouse, quality control, dan finance) dalam pengelolaan barang masuk (GRN), pencatatan inventaris ke WMS, alokasi rak penyimpanan, hingga pembuatan surat jalan pengiriman barang.",
        en: "Systematic business process mapping project establishing standardized supply chain flowcharts. Documented cross-functional interactions between procurement, warehouse receiving, quality control, and finance spanning Goods Received Notes, WMS allocation, and outbound shipping manifests.",
      },
      imageUrl: "https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-1-1_11zon.webp",
      tags: ["Business Process", "BPMN", "Inbound/Outbound", "Inventory SOP", "Cross-Functional"],
      order: 2,
      highlights: {
        id: [
          "Standarisasi alur komunikasi antar-departemen dalam penerimaan dan pengeluaran barang.",
          "Eliminasi redundansi verifikasi dokumen dengan standard checklist terpadu.",
          "Penyusunan Standard Operating Procedure (SOP) yang siap diaudit.",
        ],
        en: [
          "Standardized inter-departmental handoffs for goods receipt and dispatch.",
          "Eliminated duplicate verification checkpoints with unified inspection checklists.",
          "Formulated audit-ready Standard Operating Procedures (SOPs).",
        ],
      },
      metrics: [
        { label: { id: "Format", en: "Standard" }, value: "BPMN Flow" },
        { label: { id: "Fokus", en: "Scope" }, value: "End-to-End" },
      ],
    },
    {
      id: "proj-seminar",
      title: "International Joint Effort Seminar on Logistics and Supply Chain",
      category: "research",
      categoryLabel: {
        id: "Seminar & Conference",
        en: "Seminar & Conference",
      },
      description: {
        id: "Presenter ilmiah pada seminar internasional logistik, meraih penghargaan 'Favourite Judges' atas paparan strategi rantai pasok.",
        en: "Scientific presenter at the International Joint Effort Seminar, awarded 'Favourite Judges' recognition for supply chain strategy presentation.",
      },
      fullDescription: {
        id: "Partisipasi aktif sebagai pemateri (Presenter) dalam forum ilmiah internasional International Joint Effort Seminar Programme on Logistics and Supply Chain. Mempresentasikan kajian terkini seputar dinamika ketahanan rantai pasok dan inovasi efisiensi logistik, serta diapresiasi dengan predikat 'Favourite Judges' oleh panel juri akademisi dan industri.",
        en: "Active scientific paper presentation at the International Joint Effort Seminar Programme on Logistics and Supply Chain. Delivered research findings regarding supply chain resilience and logistics agility, earning the prestigious 'Favourite Judges' commendation from the academic and industry evaluation panel.",
      },
      imageUrl: "https://dhnaath.com/wp-content/uploads/2026/08/IMG_1614-1_11zon.webp",
      tags: ["International Seminar", "Presenter", "Favourite Judges", "Supply Chain Research", "Academic Award"],
      order: 3,
      highlights: {
        id: [
          "Terpilih sebagai Presenter di seminar internasional logistik dan supply chain.",
          "Memperoleh penghargaan 'Favourite Judges' dari dewan juri internasional.",
          "Membuka dialog ilmiah seputar adaptabilitas rantai pasok menghadapi disrupsi global.",
        ],
        en: [
          "Selected as featured presenter at the International Logistics and Supply Chain symposium.",
          "Awarded 'Favourite Judges' certificate by the international advisory committee.",
          "Engaged in academic discourse on agile supply network adaptability under global disruptions.",
        ],
      },
      metrics: [
        { label: { id: "Penghargaan", en: "Award" }, value: "Favourite Judges" },
        { label: { id: "Peran", en: "Role" }, value: "Presenter" },
        { label: { id: "Tingkat", en: "Scale" }, value: "International" },
      ],
    },
  ],
  education: {
    tertiary: {
      institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
      degree: {
        id: "Sarjana Terapan Logistik (S.Tr.Log.)",
        en: "Bachelor of Applied Logistics (S.Tr.Log.)",
      },
      faculty: {
        id: "Fakultas Logistik dan Bisnis / Manajemen Logistik",
        en: "Faculty of Logistics and Business / Logistics Management",
      },
      period: "2020 — 2024",
      transcriptImage: "https://dhnaath.com/wp-content/uploads/2026/08/Ijazah-ULBI-1-1_11zon.webp",
    },
    schools: [
      {
        institution: "SMA Negeri 8 Pontianak",
        level: { id: "Sekolah Menengah Atas (MIPA)", en: "Senior High School (Science)" },
        period: "2017 — 2020",
        location: "Kota Pontianak, Kalimantan Barat",
      },
      {
        institution: "SMP Negeri 1 Batang Lupar",
        level: { id: "Sekolah Menengah Pertama", en: "Junior High School" },
        period: "2014 — 2017",
        location: "Kapuas Hulu, Kalimantan Barat",
      },
      {
        institution: "SD Negeri 01 Lanjak",
        level: { id: "Sekolah Dasar", en: "Elementary School" },
        period: "2008 — 2014",
        location: "Kapuas Hulu, Kalimantan Barat",
      },
    ],
  },
  certifications: [
    {
      title: "Six Sigma (64/80) – White Belt (CSSWB)",
      issuer: "Council for Six Sigma Certification / Accredited Provider",
      year: "2024",
      score: "64/80",
      type: "six-sigma",
    },
    {
      title: "Lean Six Sigma (68/80) – White Belt (CSSWB)",
      issuer: "Council for Six Sigma Certification / Accredited Provider",
      year: "2024",
      score: "68/80",
      type: "six-sigma",
    },
    {
      title: "SAP01 – SAP Overview",
      issuer: "SAP Education Partner",
      year: "2023",
      type: "sap",
    },
    {
      title: "CEFR B1 – Intermediate (Score: 302)",
      issuer: "Official English Assessment",
      year: "2024",
      score: "302",
      type: "language",
    },
    {
      title: "Dasar Procurement & Purchasing di Perusahaan",
      issuer: "Sertifikasi Profesi Pengadaan Barang & Jasa",
      year: "2024",
      type: "procurement",
    },
    {
      title: "Sertifikasi Keagenan Asuransi Jiwa Syariah (AASI)",
      issuer: "Asosiasi Asuransi Syariah Indonesia",
      year: "2023",
      type: "insurance",
    },
    {
      title: "Sertifikasi Keagenan Asuransi Jiwa (AAJI)",
      issuer: "Asosiasi Asuransi Jiwa Indonesia",
      year: "2023",
      type: "insurance",
    },
  ],
  skills: [
    {
      id: "supply-chain",
      title: {
        id: "Logistik & Pergudangan",
        en: "Logistics & Warehousing",
      },
      iconName: "package",
      items: [
        "Warehouse Management System (WMS)",
        "Inventory Stock Opname",
        "Inbound & Outbound Logistics",
        "Goods Received Note (GRN) vs PO",
        "Special Service Tools (SST) Reconciliation",
        "Spare Parts Rack Optimization",
      ],
    },
    {
      id: "quality-process",
      title: {
        id: "Quality & Process Improvement",
        en: "Quality & Process Improvement",
      },
      iconName: "shield-check",
      items: [
        "Six Sigma White Belt (CSSWB)",
        "Lean Six Sigma Methodology",
        "House of Quality (QFD)",
        "Design Thinking Approach",
        "Business Process Mapping (BPMN)",
        "Audit Trail & Compliance",
      ],
    },
    {
      id: "procurement-systems",
      title: {
        id: "Pengadaan & Sistem Usaha",
        en: "Procurement & Operations",
      },
      iconName: "file-spreadsheet",
      items: [
        "SAP01 Overview",
        "Request for Quotation (RFQ)",
        "Global Sourcing B2B",
        "PosPay Loket Financial Services",
        "Credit Analysis & Lending (KopnusPos)",
        "Document Verification",
      ],
    },
    {
      id: "systems-thinking",
      title: {
        id: "Systems Thinking & Soft Skills",
        en: "Systems Thinking & Soft Skills",
      },
      iconName: "brain",
      items: [
        "Systems Thinking Architecture",
        "Root Cause Problem Solving",
        "Lifelong Learning Mindset",
        "Inter-departmental Coordination",
        "Customer Service & Dispute Resolution",
        "Data Accuracy & Reconciliation",
      ],
    },
  ],
  languages: [
    {
      name: { id: "Bahasa Indonesia", en: "Indonesian" },
      level: { id: "Penutur Asli (Native)", en: "Native Speaker" },
      proficiency: 100,
    },
    {
      name: { id: "Bahasa Inggris", en: "English" },
      level: { id: "CEFR B1 Intermediate (Score: 302)", en: "CEFR B1 Intermediate (Score: 302)" },
      proficiency: 78,
    },
  ],
  principles: [
    {
      title: { id: "Systems Thinker", en: "Systems Thinker" },
      desc: {
        id: "Memahami bagaimana komponen-komponen terpisah dalam organisasi dan rantai pasok saling terhubung dan mempengaruhi kinerja sistem secara menyeluruh.",
        en: "Understanding how interconnected parts within organizations and supply chains interact to influence whole-system throughput and performance.",
      },
    },
    {
      title: { id: "Lifelong Learning", en: "Lifelong Learning" },
      desc: {
        id: "Menjaga rasa ingin tahu dan komitmen terus belajar mengadopsi metodologi, sertifikasi, dan teknologi mutakhir.",
        en: "Maintaining insatiable curiosity and disciplined commitment to adopting updated methodologies, certifications, and operational technologies.",
      },
    },
    {
      title: { id: "Lillāhi Ta'ālā", en: "Lillāhi Ta'ālā" },
      desc: {
        id: "Mendasari setiap ikhtiar kerja dan profesionalisme dengan integritas, kejujuran, dan niat tulus beribadah kepada Allah.",
        en: "Grounding every professional endeavor and technical rigor in uncompromising integrity, honesty, and sincere dedication to Allah.",
      },
    },
  ],
};
