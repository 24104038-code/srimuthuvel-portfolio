import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
