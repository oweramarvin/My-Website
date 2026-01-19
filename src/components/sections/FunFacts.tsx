import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { colors } from "../../colors";

interface Fact {
  id: number;
  category: string;
  title: string;
  description: string;
}

const facts: Fact[] = [
  {
    id: 1,
    category: "Never Have I Ever",
    title: "Smelled a fart",
    description:
      "Yes, that's correct. I don't have a sense of smell (pang-amoy). I've never smelled farts, perfume, or anything similar - just like Blythe. I can still sense strong substances like gasoline or Vicks when they're very close, but I can't actually smell them.",
  },
  {
    id: 2,
    category: "Childhood Thoughts",
    title: "I thought we were inside the Earth",
    description:
      "When I was a kid, I was always curious about how airplanes travel. For a long time, I thought we were living inside the Earth, until I eventually realized that we live on the surface of it.",
  },
];

export default function FunFacts() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="fun-facts"
      className="section-padding flex justify-center"
      style={{ background: colors.background.section.secondary }}
    >
      <div className="max-w-2xl w-full">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 tracking-wide"
          style={{ color: colors.text.title }}
        >
          Fun <span className="text-gradient">Facts</span>
        </h2>

        <div
          className="w-24 h-1 mx-auto mb-10 rounded-full"
          style={{ background: colors.gradient.divider }}
        />

        <div className="space-y-6">
          {facts.map((fact) => {
            const isOpen = openId === fact.id;
            return (
              <div
                key={fact.id}
                className="rounded-2xl transition-all duration-300 overflow-hidden mx-auto"
                style={{
                  background: colors.background.card.default,
                  boxShadow: isOpen ? colors.glow.cardHover : colors.glow.card,
                  borderLeft: `4px solid ${
                    isOpen ? colors.brand.gold : colors.border.subtle
                  }`,
                }}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(fact.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-start hover:bg-[rgba(197,168,128,0.05)] transition-colors duration-200"
                  style={{ background: "transparent" }}
                >
                  <div className="flex-1 flex flex-col text-center gap-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FaStar style={{ color: colors.brand.gold }} />
                      <span
                        className="font-semibold text-sm uppercase tracking-wide"
                        style={{ color: colors.text.subtitle }}
                      >
                        {fact.category}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-lg sm:text-xl leading-snug"
                      style={{ color: colors.text.title }}
                    >
                      {fact.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 mt-1 sm:mt-0">
                    {isOpen ? (
                      <FaChevronUp style={{ color: colors.icon.default }} />
                    ) : (
                      <FaChevronDown style={{ color: colors.icon.default }} />
                    )}
                  </div>
                </button>

                {/* Description */}
                <div
                  className={`transition-all duration-500 overflow-hidden px-6 pb-5`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: colors.text.body }}
                  >
                    {fact.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
