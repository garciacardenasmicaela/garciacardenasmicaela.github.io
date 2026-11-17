import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import StarTrail from './components/effects/StarTrail/StarTrail';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

export default function App() {
  return (
    <div className="contenedor">
      <StarTrail />
      <Navbar />
      <main>
        <Hero />
        <section className="grilla-2">
          <About />
          <Skills />
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
