import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Project';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Import global styles
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <> {/* Using Fragment to avoid extra div */}
      <Navbar />
      <main>
        <Analytics />
        <Hero id="home"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
        <Experiments id="experiments"/>
        <Contact id="contact"/>
      </main>
      <Footer />
    </>
  );
}

export default App;