import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { colors } from "../../colors";

interface Job {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
}

const workData: Job[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Acutrive IT Solutions Inc.",
    year: "2023 - 2025",
    description:
      "I specialize in customizing, extending, and maintaining Acumatica ERP, a cloud-based system, using C#, .NET, ASPX, SQL, Acumatica BQL, custom DLLs, REST APIs, dashboards, business events, and system upgrades to meet client-specific business needs. \n\n I work closely with the functional team to analyze requirements, review documentation, estimate development effort, and implement custom screens, UI enhancements, dashboards, business logic, workflows, integrations, table relationships, automated documents, financial reports, and other printed outputs, while supporting system upgrades and ensuring customizations remain compatible. \n\nI also develop automation and process triggers, configure and extend business events, create and maintain Generic Inquiries, build and consume APIs, optimize BQL and SQL queries, troubleshoot and debug in UAT and production environments, perform performance tuning, and support deployments. Through these responsibilities, I deliver secure, scalable, maintainable, and efficient Acumatica solutions that meet client requirements and follow best practices.",
  },
  {
    id: 2,
    title: "Quality Engineer Intern",
    company: "Edusuite Inc.",
    year: "2023 (Mar - July)",
    description:
      "Designed and executed test cases and test steps to ensure application reliability and quality. Performed formal and informal testing, including functional and exploratory testing, to identify bugs and system issues. Logged, tracked, and documented defects using Jira (Atlassian), and coordinated closely with developers to verify fixes and improvements. \n\nActively participated in agile meetings, including sprint planning, daily stand-ups, and feature testing. Assisted in recording test results, documenting issues, and ensuring new features met expected requirements before release.",
  },
  {
    id: 3,
    title: "Game Developer",
    company: "Freelancing",
    year: "2022",
    description:
      "Developed a complete game using Unity3D as the game engine and C# for scripting, handling all aspects of development independently, including UI design, gameplay logic, and backend scripting. Built multiple mini-games such as guess-the-picture with jumbled letters, wire-connection puzzles, and hidden object challenges, focusing on smooth user interaction and engaging gameplay. \n\nAs the sole developer, I communicated directly with the client to gather requirements, provide updates, and implement feedback. This experience strengthened my understanding of object-oriented programming (OOP), system design, debugging, and problem-solving, skills which I later applied in my corporate development role.",
  },
];

export default function WorkExperience() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: colors.background.section.secondary }}
    >
      <div className="container-max">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
          style={{ color: colors.text.title }}
        >
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div
          className="w-24 h-1 mx-auto mb-12"
          style={{
            background: colors.gradient.divider,
          }}
        ></div>

        <div className="max-w-4xl mx-auto space-y-6">
          {workData.map((job) => (
            <div
              key={job.id}
              className={`rounded-lg border-l-4 transition-all duration-300 overflow-hidden ${
                openId === job.id ? "shadow-xl" : ""
              }`}
              style={{
                background: colors.workExperience.cardBackground,
                borderLeftColor:
                  openId === job.id
                    ? colors.workExperience.cardBorder.active
                    : colors.workExperience.cardBorder.default,
                boxShadow: openId === job.id ? colors.glow.cardHover : colors.glow.card,
              }}
            >
              <button
                onClick={() => toggle(job.id)}
                className="w-full p-6 text-left transition-colors duration-200"
                style={{
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(197,168,128,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: colors.text.title }}
                    >
                      {job.title}
                    </h3>
                    <p
                      className="text-lg font-semibold mb-1"
                      style={{ color: colors.workExperience.companyName }}
                    >
                      {job.company}
                    </p>
                    <p className="text-sm" style={{ color: colors.workExperience.year }}>
                      {job.year}
                    </p>
                  </div>
                  <div
                    className="flex-shrink-0"
                    style={{ color: colors.icon.default }}
                  >
                    {openId === job.id ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === job.id
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div
                    className="border-t pt-6"
                    style={{ borderTopColor: colors.border.subtle }}
                  >
                    <p
                      className="leading-relaxed whitespace-pre-line"
                      style={{ color: colors.text.body }}
                    >
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
