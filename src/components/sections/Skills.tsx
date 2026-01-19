import { useEffect, useState } from "react";
import { colors } from "../../colors";

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Development",
    skills: [
      { name: "C#", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript / HTML / CSS", level: 80 },
      { name: ".NET Framework / ASPX / React", level: 80 },
      { name: "VB.NET", level: 80 },
      { name: "Unity / Vuforia / AR", level: 95 },
      { name: "Acumatica ERP Customization", level: 95 },
      { name: "REST API / JSON", level: 80 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Visual Studio / GitHub / Postman", level: 90 },
      { name: "IIS & Debugging / DLL Management", level: 95 },
      { name: "SQL Server / MySQL", level: 90 },
      { name: "Version Control: Git / GitHub", level: 80 },
      { name: "Project Management: Jira, Planner, Asana", level: 95 },
      { name: "Collaboration: MS Teams, Zoom", level: 95 },
    ],
  },
  {
    category: "Soft Skills & Attributes",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Teamwork & Communication", level: 95 },
      { name: "Adaptability & Learning", level: 80 },
      { name: "Time Management", level: 80 },
      { name: "Creativity & Innovation", level: 85 },
      { name: "ERP Troubleshooting / Attention to Detail", level: 90 },
    ],
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleGroup = (index: number) => {
    setExpandedGroup(expandedGroup === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: colors.background.section.primary }}
    >
      <div className="container-max">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
          style={{ color: colors.text.title }}
        >
          <span className="text-gradient">Skills</span>
        </h2>

        <div
          className="w-24 h-1 mx-auto mb-12"
          style={{
            background: colors.gradient.divider,
          }}
        ></div>

        <div className="max-w-5xl mx-auto space-y-6">
          {skillGroups.map((group, groupIdx) => {
            const isExpanded = expandedGroup === groupIdx;
            return (
              <div
                key={groupIdx}
                className="rounded-lg card-hover transition-all duration-300 overflow-hidden"
                style={{
                  background: colors.background.card.skills,
                  boxShadow: isExpanded ? colors.glow.cardHover : colors.glow.card,
                  cursor: "pointer",
                }}
                onClick={() => toggleGroup(groupIdx)}
              >
                {/* Category Header */}
                <div
                  className="p-6 sm:p-8 flex justify-between items-center"
                  style={{ borderBottom: `1px solid ${colors.border.subtle}` }}
                >
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: colors.text.title }}
                  >
                    {group.category}
                  </h3>
                  <span
                    className="transition-transform duration-300"
                    style={{
                      transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                      color: colors.text.subtitle,
                      fontSize: "1.5rem",
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Expandable Skills */}
                <div
                  className={`transition-all duration-500 px-6 sm:px-8 overflow-hidden`}
                  style={{
                    maxHeight: isExpanded ? `${group.skills.length * 50 + 20}px` : "0px",
                  }}
                >
                  <div className="space-y-4 mt-4 mb-6">
                    {group.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span
                            className="font-medium"
                            style={{ color: colors.text.title }}
                          >
                            {skill.name}
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: colors.skills.percentage }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <div
                          className="w-full rounded-full h-3 overflow-hidden"
                          style={{ backgroundColor: colors.skills.progressBarBackground }}
                        >
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              background: colors.skills.progressBarFill,
                              width: animate ? `${skill.level}%` : "0%",
                              transitionDelay: `${groupIdx * 100 + skillIdx * 50}ms`,
                              boxShadow: colors.glow.soft,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
