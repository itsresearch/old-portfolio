import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import ProtectedSection from './components/ProtectedSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1">
          <main className="container mx-auto">
            <section id="home" className={activeSection === 'home' ? 'block' : 'hidden'}>
              <Home />
            </section>
            <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
              <About />
            </section>
            <section id="skills" className={activeSection === 'skills' ? 'block' : 'hidden'}>
              <Skills />
            </section>
            <section id="projects" className={activeSection === 'projects' ? 'block' : 'hidden'}>
              <Projects />
            </section>
            <section id="blogs" className={activeSection === 'blogs' ? 'block' : 'hidden'}>
              <Blogs />
            </section>
            <section id="contact" className={activeSection === 'contact' ? 'block' : 'hidden'}>
              <Contact />
            </section>
            <section id="other" className={activeSection === 'other' ? 'block' : 'hidden'}>
              <ProtectedSection />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;