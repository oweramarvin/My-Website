
export const colors = {
  brand: {
    darkNavy: "#1A1A1D",
    charcoal: "#1A1A1D",
    navy: "#2E4057",
    burgundy: "#8B0000",
    gold: "#C5A880",
    mutedGray: "#A0A0A0",
  },

  background: {
    section: {
      primary: `linear-gradient(to bottom, #1A1A1D, #2E4057)`,
      secondary: `linear-gradient(to bottom, #2E4057, #1A1A1D)`,
      tertiary: "#1F2A38",
    },

    // Card backgrounds
    card: {
      default: `linear-gradient(135deg, rgba(46,64,87,0.9) 0%, rgba(26,26,29,0.95) 100%)`,
      highlight: `linear-gradient(135deg, rgba(139,0,0,0.2) 0%, rgba(46,64,87,0.9) 100%)`,
      hover: `linear-gradient(135deg, rgba(197,168,128,0.1) 0%, rgba(46,64,87,0.95) 100%)`,
      workExperience: `linear-gradient(135deg, rgba(46,64,87,0.85) 0%, rgba(26,26,29,0.9) 100%)`,
      projects: `linear-gradient(135deg, rgba(46,64,87,0.9) 0%, rgba(31,42,56,0.95) 100%)`,
      skills: `linear-gradient(135deg, rgba(46,64,87,0.85) 0%, rgba(26,26,29,0.9) 100%)`,
      education: `linear-gradient(135deg, rgba(46,64,87,0.9) 0%, rgba(26,26,29,0.95) 100%)`,
      niceToHave: `linear-gradient(135deg, rgba(46,64,87,0.85) 0%, rgba(31,42,56,0.9) 100%)`,
    },

    // Modal/Overlay
    modal: {
      overlay: "rgba(0, 0, 0, 0.85)",
      content: `linear-gradient(135deg, #1A1A1D 0%, #2E4057 100%)`,
    },
  },

  // ======================
  // TYPOGRAPHY COLORS
  // ======================
  text: {
    title: "#f5f5f5", 
    subtitle: "#C5A880", 
    body: "#E5E5E5",
    muted: "#A0A0A0", 
    accent: "#C5A880", 
    burgundy: "#8B0000", 
  },

  // ======================
  // BUTTON COLORS
  // ======================
  button: {
    primary: {
      background: `linear-gradient(135deg, #C5A880 0%, #B89A6F 100%)`,
      backgroundHover: `linear-gradient(135deg, #D6BE9A 0%, #C5A880 100%)`,
      text: "#1A1A1D",
      glow: "0 0 20px rgba(197,168,128,0.5)",
    },
    secondary: {
      background: "transparent",
      backgroundHover: `linear-gradient(135deg, rgba(197,168,128,0.15) 0%, rgba(46,64,87,0.8) 100%)`,
      text: "#C5A880",
      border: "#C5A880",
      borderHover: "#D6BE9A",
    },
    accent: {
      background: `linear-gradient(135deg, #8B0000 0%, #6B0000 100%)`,
      backgroundHover: `linear-gradient(135deg, #A00000 0%, #8B0000 100%)`,
      text: "#f5f5f5",
    },
  },

  // ======================
  // BORDERS & DIVIDERS
  // ======================
  border: {
    subtle: "rgba(197,168,128,0.25)",   
    accent: "#C5A880",                   
    burgundy: "rgba(139,0,0,0.5)",       
    navy: "rgba(46,64,87,0.8)",        
    divider: `linear-gradient(to right, transparent, #C5A880, transparent)`,
    dividerBurgundy: `linear-gradient(to right, transparent, rgba(139,0,0,0.6), transparent)`,
  },

  // ======================
  // ICONS
  // ======================
  icon: {
    default: "#C5A880", 
    muted: "#A0A0A0",  
    hover: "#D6BE9A",   
    burgundy: "#8B0000",
  },

  // ======================
  // GLOWS & SHADOWS
  // ======================
  glow: {
    soft: "0 0 30px rgba(197,168,128,0.35)",  
    strong: "0 0 60px rgba(197,168,128,0.5)", 
    burgundy: "0 0 40px rgba(139,0,0,0.45)",  
    card: "0 8px 32px rgba(0, 0, 0, 0.4)",  
    cardHover: "0 12px 48px rgba(197,168,128,0.2)", 
  },

  // ======================
  // GRADIENTS (Helper Functions)
  // ======================
  gradient: {
    // Hero gradients
    hero: `linear-gradient(135deg, #1A1A1D 0%, #2E4057 50%, rgba(197,168,128,0.15) 100%)`,
    heroGlow: `linear-gradient(to right, rgba(197,168,128,0.4), rgba(139,0,0,0.3))`,

    // Card gradients
    cardDefault: `linear-gradient(135deg, rgba(46,64,87,0.9) 0%, rgba(26,26,29,0.95) 100%)`,
    cardHover: `linear-gradient(135deg, rgba(197,168,128,0.1) 0%, rgba(46,64,87,0.95) 100%)`,
    cardBurgundy: `linear-gradient(135deg, rgba(139,0,0,0.2) 0%, rgba(46,64,87,0.9) 100%)`,

    // Progress bars
    progress: `linear-gradient(to right, #8B0000, #C5A880)`,
    progressReverse: `linear-gradient(to right, #C5A880, #8B0000)`,

    // Dividers
    divider: `linear-gradient(to right, #2E4057, #C5A880, #8B0000)`,
    dividerGold: `linear-gradient(to right, transparent, #C5A880, transparent)`,

    // Buttons
    buttonPrimary: `linear-gradient(135deg, #C5A880 0%, #B89A6F 100%)`,
    buttonHover: `linear-gradient(135deg, #D6BE9A 0%, #C5A880 100%)`,
  },

  // ======================
  // NAVIGATION
  // ======================
  navigation: {
    background: {
      default: "rgba(26,26,29,0.95)",
      scrolled: "rgba(46,64,87,0.98)",
      mobile: "#1A1A1D",
    },
    text: {
      default: "#C5A880",
      hover: "#F5F5F5",
      active: "#F5F5F5",
    },
    border: "rgba(197,168,128,0.3)",
  },

  // ======================
  // SPECIFIC COMPONENT COLORS
  // ======================
  workExperience: {
    cardBackground: `linear-gradient(135deg, rgba(46,64,87,0.85) 0%, rgba(26,26,29,0.9) 100%)`,
    cardBorder: {
      default: "rgba(197,168,128,0.3)",
      active: "rgb(126, 108, 82)",
    },
    title: "rgb(197, 168, 128)",
    companyName: "#f5f5f5",
    year: "#A0A0A0",
  },

  skills: {
    title: "#f5f5f5",
    skillName: "rgb(255, 227, 187)",
    progressBarBackground: "rgba(197,168,128,0.2)",
    progressBarFill: `linear-gradient(to right, #8B0000, #C5A880)`,
    percentage: "rgb(197, 168, 128)",
  },

  projects: {
    cardBackground: `linear-gradient(135deg, rgba(46,64,87,0.9) 0%, rgba(31,42,56,0.95) 100%)`,
    badge: {
      background: "rgba(197,168,128,0.15)",
      text: "#C5A880",
    },
  },

  education: {
    timelineDot: `linear-gradient(135deg, #C5A880, #8B0000)`,
    timelineLine: `linear-gradient(to bottom, rgba(197,168,128,0.4), rgba(139,0,0,0.3))`,
    yearBadge: {
      background: "rgba(197,168,128,0.15)",
      text: "#C5A880",
    },
  },

  niceToHave: {
    cardBackground: `linear-gradient(135deg, rgba(46,64,87,0.85) 0%, rgba(31,42,56,0.9) 100%)`,
    cardBorder: "#C5A880",
    statusBadge: {
      inProgress: {
        background: "rgba(197,168,128,0.2)",
        text: "#C5A880",
        border: "#C5A880",
      },
      planned: {
        background: "rgba(139,0,0,0.2)",
        text: "#8B0000",
        border: "rgba(139,0,0,0.5)",
      },
      upcoming: {
        background: "rgba(46,64,87,0.5)",
        text: "#A0A0A0",
        border: "rgba(197,168,128,0.3)",
      },
    },
  },

  resume: {
    modalBackground: `linear-gradient(135deg, #1A1A1D 0%, #2E4057 100%)`,
    inputBorder: "rgba(197,168,128,0.3)",
    errorText: "#8B0000",
    errorBackground: "rgba(139,0,0,0.15)",
  },
} as const;

// Type export for TypeScript
export type Colors = typeof colors;

// Helper function to create custom gradients
export const createGradient = (
  start: string,
  end: string,
  direction: string = "to right"
): string => {
  return `linear-gradient(${direction}, ${start}, ${end})`;
};
