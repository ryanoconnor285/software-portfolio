import React, { useEffect } from 'react';
import './App.css';
import Main from "./screens/Main";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Connect from "./screens/Connect";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex: number = 0;

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      currentSectionIndex = Math.min(Math.max(currentSectionIndex + direction, 0), sections.length - 1);
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Main />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
