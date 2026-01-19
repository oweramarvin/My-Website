import { useEffect, useState } from "react";
import { FaArrowDown, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/Image/profile.jpg";
import { colors } from "../../colors";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative section-padding pt-24"
      style={{ background: colors.background.hero.gradient }}
    >
      <div className="container-max text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse"
                style={{
                  background: colors.gradient.heroGlow,
                }}
              ></div>
              <img
                src={profileImg}
                alt="Marvin Owera"
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 shadow-2xl mx-auto"
                style={{
                  borderColor: colors.border.accent,
                  boxShadow: colors.glow.soft,
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: colors.text.title }}
          >
            <span className="text-gradient">Marvin Owera</span>
          </h1>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6"
            style={{ color: colors.text.subtitle }}
          >
            Software Developer
          </h2>

          {/* Summary */}
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: colors.text.body }}
          >
            I am a multi-skilled software professional with experience in ERP
            systems (Acumatica), software development, data analysis,
            troubleshooting, and quality assurance. I specialize in transforming
            business requirements into reliable system solutions through logical
            problem-solving, clean UI design, accurate reporting, and continuous
            system improvement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              style={{
                background: colors.button.primary.background,
                color: colors.button.primary.text,
                boxShadow: colors.glow.soft,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  colors.button.primary.backgroundHover;
                e.currentTarget.style.boxShadow = colors.button.primary.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  colors.button.primary.background;
                e.currentTarget.style.boxShadow = colors.glow.soft;
              }}
            >
              View Projects
              <FaGithub className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="group px-8 py-4 border-2 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              style={{
                background: colors.button.secondary.background,
                color: colors.button.secondary.text,
                borderColor: colors.button.secondary.border,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  colors.button.secondary.backgroundHover;
                e.currentTarget.style.borderColor =
                  colors.button.secondary.borderHover;
                e.currentTarget.style.boxShadow = colors.glow.soft;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  colors.button.secondary.background;
                e.currentTarget.style.borderColor =
                  colors.button.secondary.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contact Me
              <FaEnvelope className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <FaArrowDown
              className="mx-auto text-2xl"
              style={{ color: colors.icon.default }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
