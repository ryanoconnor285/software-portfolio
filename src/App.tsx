import React, { useEffect } from 'react';
import './App.css';
import Main from "./screens/Main";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Connect from "./screens/Connect";
// import Sidenav from "./components/Sidenav/Sidenav";

const App = () => {
  return (
    <div className="App">
      {/* <Sidenav /> */}
      <Main />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
