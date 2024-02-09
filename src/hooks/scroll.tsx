import { useState, useEffect } from "react";

const useScrollPosition = () => {
  // State to store the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handler to update the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Cleaning up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
