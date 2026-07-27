const projects = [
  {
    id: "camera-inventory",
    title: "Camera Inventory System",
    description: "Real-time retail shelf inventory tracking using YOLO object detection and OpenCV, with a live React dashboard.",
    image: "/projects/camera-inventory-1.png",
    tech: ["Python", "FastAPI", "YOLOv8", "OpenCV", "SQLite", "React", "Vite"],
    overview: "A real-time mart inventory system that uses a trained YOLO model to detect visible shelf product movement from a camera feed, labels each processed frame, and streams live activity to a React dashboard over WebSockets. Camera detection tracks shelf/visible stock movement only, while actual inventory is maintained separately through billing.",
    problem: "Store staff had no way to see shelf-level product movement in real time, and camera-based counts needed to stay separate from — and never override — the trusted inventory numbers used for billing.",
    solution: "Trained a YOLOv8 model on the store's fixed product classes and ran it over an OpenCV video pipeline, splitting the camera view into configurable virtual shelf/rack zones. Added a YOLO segmentation + background-subtraction blocker check so a blocked view freezes that zone's count instead of reporting false movement, and only wrote a movement event once a changed count stayed stable. Kept actual_stock isolated, updated only when a bill is saved.",
    learnings: [
      "Building a stable object-detection pipeline that tolerates occlusion and view blockage",
      "Designing zone-based tracking so partial camera obstruction doesn't corrupt the whole count",
      "Streaming labeled detection frames and stock events to a frontend in real time over WebSockets"
    ],
    live: "#",
    github: "https://github.com/mzeshanqaisar/camera-inventory-system"
  },
  {
    id: "mryum-pos",
    title: "Mr YUM POS System",
    description: "Offline-first point-of-sale system for a bakery & general store, built with React and Supabase.",
    image: "/projects/mryum-pos-1.png",
    gallery: [
      "/projects/mryum-pos-1.png",
      "/projects/mryum-pos-2.png",
      "/projects/mryum-pos-3.png",
      "/projects/mryum-pos-4.png",
      "/projects/mryum-pos-5.png"
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "Supabase", "Dexie.js", "React Router"],
    overview: "A full offline-first POS system for Mr YUM Bakers & General Store — staff accounts with roles, a billing/register screen, an inventory dashboard with full audit trail, suppliers & purchase orders, customers, udhar/credit accounts, and sales reports. Installable as a PWA that keeps working with zero internet connection.",
    problem: "A small retail/bakery store needed a reliable point-of-sale system that keeps working during internet outages without losing sales or stock data.",
    solution: "Built a local-first architecture using Dexie.js (IndexedDB) as the source of truth for every read, with a background sync engine that pushes and pulls changes to Supabase (Postgres, Auth, Storage) whenever a connection is available. Packaged as an installable PWA with a precached app shell for fully offline cold starts.",
    learnings: [
      "Designing an offline-first sync engine with conflict-safe push/pull",
      "Modeling role-based access control with Supabase row-level security",
      "Structuring a large multi-module app (billing, inventory, suppliers, customers, reports)"
    ],
    live: "https://mryum-pos-system.vercel.app",
    github: "https://github.com/mzeshanqaisar/mryum-pos-system"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern responsive portfolio with animations and clean UI.",
    image: "/portfolio.svg",
    gallery: [
      "/projects/portfolio-website.png"
    ],
    tech: ["React", "Tailwind", "Framer Motion"],
    overview: "A personal portfolio to showcase my work and skills.",
    problem: "Traditional portfolios are static and not engaging.",
    solution: "Built a dynamic UI with animations and modern layout.",
    learnings: [
      "Improved UI/UX design",
      "Learned Framer Motion",
      "Better component structure"
    ],
    live: "#",
    github: "#"
  },
  {
    id: "weather",
    title: "Weather App",
    description: "Real-time weather app using API.",
    image: "/weather.svg",
    tech: ["React", "API"],
    overview: "Displays weather data for any city.",
    problem: "Users need quick weather updates.",
    solution: "Integrated API with clean UI.",
    learnings: ["API handling", "State management"],
    live: "#",
    github: "#"
  }
];

export default projects;
