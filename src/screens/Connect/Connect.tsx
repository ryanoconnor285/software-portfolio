import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import "./Connect.css";

const Connect: React.FC = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "your-linkedin-url", label: "LinkedIn" },
    { icon: FaGithub, url: "your-github-url", label: "GitHub" },
    { icon: FaXTwitter, url: "your-x-url", label: "X" },
  ];

  return (
    <section id="connect" className="component connect-section">
      <h2>Let's Connect</h2>
      <p>Find me on these platforms:</p>
      <div className="connect-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-link"
            aria-label={link.label}
          >
            <link.icon size="50%" color="#f1f1f1" aria-hidden="true" />
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect;
