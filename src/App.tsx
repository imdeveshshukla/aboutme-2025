import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CodeRain from './components/CodeRain';
import Terminal from './components/Terminal';
import SystemMonitor from './components/SystemMonitor';
import EasterEgg from './components/EasterEgg';
import VisitorCounter from './components/VisitorCounter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <CodeRain />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer/>
      <Terminal />
      <SystemMonitor />
      <EasterEgg />
    </div>
  );
}

export default App;