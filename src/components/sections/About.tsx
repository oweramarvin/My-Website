import { colors } from "../../colors";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding"
      style={{ background: colors.background.section.secondary }}
    >
      <div className="container-max flex flex-col justify-center">
        {/* Title */}
        <h2
          className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
          style={{ color: colors.text.title }}
        >
          About <span className="text-gradient">Me</span>
        </h2>

        {/* Divider */}
        <div
          className="w-20 h-[2px] mx-auto mb-16"
          style={{
            background: colors.gradient.dividerGold,
          }}
        />

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p
            className="text-lg leading-loose text-center mb-20"
            style={{ color: colors.text.body }}
          >
            I'm a Software Developer who loves turning complex problems into
            simple solutions. I specialize in customizing{" "}
            <strong style={{ color: colors.text.subtitle }}>Acumatica</strong>,
            a cloud-based ERP system. I also build modern web applications
            (React + TypeScript), develop games using Unity, and create software
            solutions with .NET technologies.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-2xl transition-all duration-700 hover:-translate-y-1"
              style={{
                background: colors.background.card.default,
                border: `1px solid ${colors.border.subtle}`,
                boxShadow: colors.glow.card,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.background.card.hover;
                e.currentTarget.style.boxShadow = colors.glow.cardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  colors.background.card.default;
                e.currentTarget.style.boxShadow = colors.glow.card;
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: colors.text.title }}
              >
                Problem Solver
              </h3>
              <p style={{ color: colors.text.body, lineHeight: "1.8" }}>
                I enjoy breaking down complex challenges into clean,
                maintainable, and scalable solutions.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl transition-all duration-700 hover:-translate-y-1"
              style={{
                background: colors.background.card.default,
                border: `1px solid ${colors.border.subtle}`,
                boxShadow: colors.glow.card,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.background.card.hover;
                e.currentTarget.style.boxShadow = colors.glow.cardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  colors.background.card.default;
                e.currentTarget.style.boxShadow = colors.glow.card;
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: colors.text.title }}
              >
                Continuous Learner
              </h3>
              <p style={{ color: colors.text.body, lineHeight: "1.8" }}>
                I continuously explore new tools and technologies to deliver
                modern, reliable, and future-proof software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
