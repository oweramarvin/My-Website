import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import profileImg from "../../assets/Image/profile.jpg";
import { colors } from "../../colors";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/marvinowera/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/oueramavuin/#",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/marvin.owera/",
  },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@marbino" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/oweramarvin" },
  { name: "Email", icon: FaEnvelope, url: "mailto:marvinowera04@gmail.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center section-padding"
      style={{ background: colors.background.section.primary }}
    >
      <div className="container-max text-center">
        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: colors.text.title }}
        >
          Get In <span className="text-gradient">Touch</span>
        </h2>

        {/* Divider */}
        <div
          className="w-20 h-[2px] mx-auto mb-8"
          style={{ background: colors.gradient.dividerGold }}
        />

        {/* Profile */}
        <div className="mb-8 flex justify-center relative">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: colors.gradient.heroGlow }}
            />
            <img
              src={profileImg}
              alt="Marvin Owera"
              className="relative w-36 h-36 rounded-full object-cover mx-auto"
              style={{
                border: `2px solid ${colors.border.accent}`,
                boxShadow: colors.glow.soft,
              }}
            />
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: colors.text.title }}
        >
          Marvin Owera
        </h3>

        {/* Subtitle */}
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: colors.text.body }}
        >
          Let’s build something meaningful together. I’m always open to
          conversations, collaborations, and new ideas.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  social.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.name}
                className="p-3 rounded-full transition-all duration-700 hover:-translate-y-1"
                style={{
                  background: colors.background.card.default,
                  border: `1px solid ${colors.border.subtle}`,
                  color: colors.icon.default,
                  boxShadow: colors.glow.card,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    colors.background.card.hover;
                  e.currentTarget.style.boxShadow = colors.glow.cardHover;
                  e.currentTarget.style.color = colors.icon.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    colors.background.card.default;
                  e.currentTarget.style.boxShadow = colors.glow.card;
                  e.currentTarget.style.color = colors.icon.default;
                }}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        <a
          href="mailto:marvinowera04@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-700 hover:-translate-y-1"
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
            e.currentTarget.style.background = colors.button.primary.background;
            e.currentTarget.style.boxShadow = colors.glow.soft;
          }}
        >
          <FaEnvelope /> Start a Conversation
        </a>
      </div>
    </section>
  );
}
