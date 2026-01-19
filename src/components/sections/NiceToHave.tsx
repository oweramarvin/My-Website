import { colors } from "../../colors";

interface NiceToHaveItem {
  title: string;
  description: string;
  status: string;
}

const niceToHaveList: NiceToHaveItem[] = [
  {
    title: "CRUD System",
    description:
      "This portfolio will soon allow adding, updating, deleting, customizing, and updating pages and contents.",
    status: "In Progress",
  },
  {
    title: "User Friendly",
    description:
      "This portfolio has a lot of issues mostly in mobile, it's hard to swipe. Soon I'll fix it.",
    status: "In Progress",
  },
  {
    title: "Personal Login",
    description:
      "Admin login so I can customize this portfolio without coding.",
    status: "In Progress",
  },
  {
    title: "Template Builder",
    description: "Create new pages using customizable templates.",
    status: "Planned",
  },
  {
    title: "Media Gallery",
    description:
      "I will add my or user photos and videos organized neatly into albums.",
    status: "Upcoming",
  },
  {
    title: "Journal",
    description: "Daily thoughts, reflections, and memories.",
    status: "Planned",
  },
  {
    title: "Timeline Chart",
    description: "Life milestones visualized from birth to present.",
    status: "Planned",
  },
  {
    title: "References",
    description: "People you can contact for my reference.",
    status: "Upcoming",
  },
  {
    title: "Anonymous Messages",
    description: "Visitors can send messages without revealing their identity.",
    status: "Upcoming",
  },
  {
    title: "Achievements",
    description: "Certifications, awards, and major career milestones.",
    status: "Upcoming",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase().replace(" ", "")) {
    case "inprogress":
      return colors.niceToHave.statusBadge.inProgress;
    case "planned":
      return colors.niceToHave.statusBadge.planned;
    case "upcoming":
      return colors.niceToHave.statusBadge.upcoming;
    default:
      return {
        background: colors.background.card.default,
        text: colors.text.title,
        border: colors.border.accent,
      };
  }
};

export default function NiceToHave() {
  return (
    <section
      id="nice-to-have"
      className="section-padding"
      style={{ background: colors.background.section.primary }}
    >
      <div className="container-max">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
          style={{ color: colors.text.title }}
        >
          Nice To <span className="text-gradient">Have</span>
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-6"
          style={{
            background: colors.gradient.divider,
          }}
        ></div>

        <p
          className="text-center mb-12 max-w-3xl mx-auto text-lg"
          style={{ color: colors.text.muted }}
        >
          Future features that will transform this portfolio into an
          interactive, dynamic, and evolving space.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {niceToHaveList.map((item, index) => {
            const statusColors = getStatusColor(item.status);
            return (
              <div
                key={index}
                className="rounded-lg p-6 card-hover border-l-4 transition-all duration-300"
                style={{
                  background: colors.background.card.niceToHave,
                  borderLeftColor: colors.niceToHave.cardBorder,
                  boxShadow: colors.glow.card,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = colors.glow.cardHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = colors.glow.card;
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-xl font-bold flex-1"
                    style={{ color: colors.text.title }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ml-2"
                    style={{
                      background: statusColors.background,
                      color: statusColors.text,
                      borderColor: statusColors.border,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p
                  className="leading-relaxed"
                  style={{ color: colors.text.muted }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
