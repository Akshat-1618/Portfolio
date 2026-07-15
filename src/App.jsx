import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Resume from './components/Resume';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Spotlight from './components/Spotlight';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <Loader visible={loading} />
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Resume />
        <Now />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
