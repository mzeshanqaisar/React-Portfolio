import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";

import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import ProjectGallery from "./components/ProjectGallery";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./components/NotFound";
import PageTransition from "./components/PageTransition";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <TechStack />

      <section id="projects">
        <ProjectGallery />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* HOME PAGE */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        {/* PROJECT DETAIL PAGE */}
        <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />

        {/* 404 */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const scrollPositions = new Map();

function AppShell() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const isProjectDetail = location.pathname.startsWith("/project/");
  const currentKeyRef = useRef(location.key);

  useEffect(() => {
    const onScroll = () => scrollPositions.set(currentKeyRef.current, window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    currentKeyRef.current = location.key;
    if (navigationType === "POP") {
      window.scrollTo({ top: scrollPositions.get(location.key) ?? 0, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <div className="dark min-h-screen bg-background text-on-surface antialiased">

      {!isProjectDetail && <TopNavBar />}

      <main className="relative z-10 px-8 md:px-24 mx-auto min-h-screen max-w-[1280px]">
        <AnimatedRoutes />
      </main>

      <div className={isProjectDetail ? "pb-20 md:pb-0" : ""}>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
