import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { colors } from "../../colors";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        background: colors.button.primary.background,
        color: colors.button.primary.text,
        boxShadow: colors.glow.soft,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.button.primary.backgroundHover;
        e.currentTarget.style.boxShadow = colors.button.primary.glow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = colors.button.primary.background;
        e.currentTarget.style.boxShadow = colors.glow.soft;
      }}
      aria-label="Back to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
