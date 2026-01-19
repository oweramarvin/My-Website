import { useEffect, useState } from "react";
import { colors } from "../../colors";

interface EducationItem {
  level: string;
  school: string;
  year: string;
  remarks?: string;
}

const educationData: EducationItem[] = [
  {
    level: "Elementary",
    school: "San Jose Elementary School",
    year: "2007 - 2013",
  },
  {
    level: "Junior High School",
    school: "Felicisimo T. San Luis Integrated SHS",
    year: "2013 - 2017",
  },
  {
    level: "Senior High School",
    school: "Polytechnic University of the Philippines - Sta. Mesa",
    year: "2017 - 2019",
  },
  {
    level: "College",
    school: "Technological University of the Philippines - Manila",
    year: "2019 - 2023",
  },
];

export default function Education() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 250); // luxury slower reveal
          }
        });
      },
      { threshold: 0.2 },
    );

    const items = document.querySelectorAll(".education-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="min-h-screen flex items-center section-padding"
      style={{ background: colors.background.section.primary }}
    >
      <div className="container-max">
        {/* Title */}
        <h2
          className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
          style={{ color: colors.text.title }}
        >
          <span className="text-gradient">Education</span>
        </h2>

        {/* Divider */}
        <div
          className="w-20 h-[2px] mx-auto mb-16"
          style={{
            background: colors.brand.gold,
            opacity: 0.6,
          }}
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 rounded"
            style={{ background: colors.education.timelineLine }}
          />

          {/* Education Items */}
          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <div
                key={index}
                data-index={index}
                className="education-item relative flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg"
                    style={{
                      background: colors.education.timelineDot,
                      color: colors.text.title,
                      boxShadow: colors.glow.soft,
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 rounded-2xl p-6 transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    background: colors.background.card.education,
                    border: `1px solid ${colors.border.subtle}`,
                    boxShadow: colors.glow.card,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: colors.text.title }}
                    >
                      {edu.school}
                    </h3>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        color: colors.education.yearBadge.text,
                        background: colors.education.yearBadge.background,
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <p
                    className="font-medium"
                    style={{ color: colors.text.body }}
                  >
                    {edu.level}
                  </p>
                  {edu.remarks && (
                    <p className="mt-2" style={{ color: colors.text.muted }}>
                      {edu.remarks}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
