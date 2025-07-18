const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Teknologi Telah Dikuasai" },
  { value: 3, suffix: "", label: "Stack Utama yang Dikuasai" },
  { value: 6, suffix: "", label: "Aplikasi/Website Pernah Dibangun" },
  { value: 2, suffix: "+", label: "Tahun Pengalaman"}
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Terbiasa menghadapi tantangan teknis dengan pendekatan logis dan solusi efisien.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Fast Learner",
    desc: "Cepat beradaptasi dengan teknologi baru dan mampu mempelajari framework secara mandiri.",
  },
  {
    imgPath: "/images/time.png",
    title: "Team Collaboration",
    desc: "Mampu bekerja sama dalam tim lintas divisi dan menjaga komunikasi yang efektif.",
  },
  {
    imgPath: "/images/bug.png",
    title: "Debugging & Troubleshooting",
    desc: "Cekatan dalam mengidentifikasi dan memperbaiki bug yang kompleks di berbagai lingkungan pengembangan.",
  },
  {
    imgPath: "/images/refresh.png",
    title: "Continuous Improvement",
    desc: "Selalu terbuka terhadap feedback dan berkomitmen untuk terus meningkatkan kualitas kerja.",
  },
  {
    imgPath: "/images/detail.png",
    title: "Detail Oriented",
    desc: "Fokus pada ketelitian dan kualitas dalam setiap proses pengembangan aplikasi.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Selama mengikuti program bootcamp CodeHive di Politeknik Gajah Tunggal selama enam bulan, saya belajar dan mengerjakan berbagai proyek web, mobile, dan machine learning. Program ini memperkuat kemampuan saya dalam pengembangan end-to-end.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Trainee Developer",
    date: "September 2022 – Februari 2022",
    responsibilities: [
      "Mengembangkan aplikasi web dengan Laravel, CodeIgniter 4, dan Vue.js.",
      "Membangun backend menggunakan Spring Boot dan database MySQL.",
      "Membuat aplikasi mobile menggunakan Flutter dan Firebase.",
      "Menerapkan model machine learning di Jupyter Notebook menggunakan Anaconda untuk klasifikasi gambar.",
    ],
  },
  {
    review:
      "Saya menjalani internship sebagai Full Stack Developer di GPay Digital Asia, di mana saya terlibat langsung dalam pengembangan dan pemeliharaan sistem backend dan frontend yang digunakan untuk keperluan internal.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer Intern",
    date: "Maret 2023 – September 2023",
    responsibilities: [
      "Membangun dan mengelola sistem internal dengan Native PHP dan Slim Framework.",
      "Mengembangkan dan mengintegrasikan API menggunakan Spring Boot dan SQL.",
      "Berkoordinasi dengan tim dalam proses debugging, testing, dan deployment.",
    ],
  },
  {
    review:
      "Saat ini saya bekerja di Gajah Tunggal sebagai staf maintenance. Fokus saya adalah memastikan sistem PABX dan perangkat kerja tetap berjalan optimal, serta memberikan solusi cepat untuk kendala teknis di lingkungan kerja.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Maintenance & Support Staff",
    date: "Oktober 2023 – Sekarang",
    responsibilities: [
      "Melakukan perawatan dan perbaikan perangkat jaringan seperti kabel LAN dan perangkat komunikasi PABX.",
      "Melakukan troubleshooting perangkat telepon dan jaringan di berbagai area kerja.",
      "Memberikan dukungan teknis untuk kebutuhan operasional harian dan permintaan user secara general.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dimas Santoso",
    mentions: "@dimas.codehive",
    review:
      "Adam memiliki semangat belajar yang luar biasa. Ia mampu memahami teknologi kompleks dalam waktu singkat dan selalu antusias saat menyelesaikan tantangan teknis selama bootcamp.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Reza Pratama",
    mentions: "@rezapm",
    review:
      "Selama magang di GPay, Adam menunjukkan inisiatif tinggi dan mampu menguasai alur sistem kami dengan cepat. Hasil kerjanya rapi dan bisa diandalkan, bahkan dalam proyek yang memiliki banyak dependency.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Laras Putri",
    mentions: "@larasputri",
    review:
      "Adam adalah rekan kerja yang selalu sigap. Setiap ada kendala teknis di kantor, ia dengan cepat melakukan identifikasi dan penanganan. Komitmennya terhadap kualitas dan ketepatan waktu patut diacungi jempol.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Indra Maulana",
    mentions: "@indra.ml",
    review:
      "Saya sempat bekerja bersama Adam dalam proyek machine learning. Ia sangat teliti dan cepat memahami konsep-konsep teknis. Hasil model klasifikasi gambarnya sangat akurat dan bisa langsung diterapkan.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Yuni Andriyani",
    mentions: "@yuniandriyani",
    review:
      "Adam membantu tim kami melakukan integrasi frontend dan backend pada sistem internal. Ia bekerja mandiri dengan dokumentasi yang sangat jelas dan bisa menjelaskan kompleksitas teknis dengan bahasa yang mudah dimengerti.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Fahmi Ramadhan",
    mentions: "@fahmir",
    review:
      "Saya mengandalkan Adam untuk berbagai tugas teknis di kantor, terutama terkait jaringan dan maintenance. Ia sangat responsif, disiplin, dan dapat dipercaya untuk menyelesaikan masalah tanpa harus diawasi terus-menerus.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
