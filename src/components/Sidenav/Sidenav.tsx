import React, { useState, useEffect } from 'react';
import './Sidenav.css';

const Sidenav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("mainComponent");

  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY); // Log the scroll position to confirm it's firing
  
    const sections = document.querySelectorAll(".component");
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
  
      if (
        window.scrollY >= sectionTop - window.innerHeight / 3 &&
        window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3
      ) {
        currentSection = section.getAttribute("id") || "";
      }
    });
  
    if (currentSection && currentSection !== activeSection) {
      console.log(`Setting active section to: ${currentSection}`); // Debugging line
      setActiveSection(currentSection);
    }
  };
  

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    console.log(`Scrolling to section: ${sectionId}`); // Debugging line
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("useEffect running"); // Check if useEffect runs
    const handleScroll = () => {
      console.log("Scroll event triggered"); // Check if handleScroll fires
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      console.log("Cleaning up"); // Check if cleanup works
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidenav">
      <ul>
        {[
          { id: "aboutComponent", label: "About" },
          { id: "projectsComponent", label: "Projects" },
          { id: "skillsComponent", label: "Skills" },
          { id: "connectComponent", label: "Connect" }
        ].map((section) => (
          <li key={section.id} className="nav-item" onClick={() => scrollToSection(section.id)}>
            <span
              className={`nav-bar ${activeSection === section.id ? "active" : ""}`}
            ></span>
            <span className={`nav-label ${activeSection === section.id ? "active" : ""}`}>
              {section.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
