import { useEffect } from "react";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    const headerTitle = document.querySelector(".header-title");
    const headerJobTitle = document.querySelector(".header-job-title");

    if (headerTitle && headerJobTitle) {
      headerTitle.classList.add("fade-in");
      headerJobTitle.classList.add("fade-in-delayed");
    } else {
      console.error("Elements not found for animation");
    }
  }, []);

  return (
    <div id="mainComponent" className="component">
      <header className="header">
        <h1 className="header-title">Ryan O'Connor</h1>
        <p className="header-job-title">Fullstack Software Engineer</p>
      </header>
    </div>
  );
};

export default Main;
