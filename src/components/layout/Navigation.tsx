import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { colors } from "../../colors";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-700 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: scrolled ? colors.navigation.background.scrolled : "transparent",
        borderBottom: scrolled ? `1px solid ${colors.navigation.border}` : "none",
      }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="text-xl font-semibold text-gradient tracking-wide"
          >
            Marvin Owera
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-medium transition-colors duration-300"
                style={{ color: colors.navigation.text.default }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.navigation.text.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.navigation.text.default)
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-colors duration-300"
            style={{ color: colors.navigation.text.default }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.navigation.text.hover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.navigation.text.default)
            }
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: colors.navigation.background.mobile,
              borderColor: colors.navigation.border,
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block font-medium transition-colors duration-300"
                  style={{ color: colors.navigation.text.default }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.navigation.text.hover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      colors.navigation.text.default)
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
