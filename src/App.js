import React from 'react';
import './app.css'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  return (
      <div className="flex flex-col bg-black text-white sm:px-10 pb-5 transition duration-500 ease-in-out scroll-smooth">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className='text-center'>@2023 Ritesh Raghuwanshi. All rights reserved.</footer>
      </div>
  );
}

export default App;
