import { useEffect } from 'react';
import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import Stats from "./components/Stats";
import Footer from "./components/Footer";




function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="dark min-h-screen bg-black text-white antialiased">
      {/* Decorative brackets (same idea as layout.tsx) */}
      <div className="fixed top-8 left-8 w-12 h-12 opacity-40 z-0 border-t-2 border-l-2 border-white"></div>
      <div className="fixed bottom-8 right-8 w-12 h-12 opacity-40 z-0 border-b-2 border-r-2 border-white"></div>

      <TopNavBar />

      <main className="relative z-10 pt-32 px-8 md:px-24 mx-auto min-h-screen max-w-[1280px]">

        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <ProjectGallery />
        </section>

        <section id="stats">
          <Stats />
        </section>

      </main>

      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}

export default App;