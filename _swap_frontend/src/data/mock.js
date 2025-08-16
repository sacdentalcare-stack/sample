// Mock data for MetaDesign clone
export const mockData = {
  navigation: {
    logo: "MetaDesign",
    menuItems: [
      { name: "About", path: "/about" },
      { name: "Work", path: "/work" },
      { name: "Offices", path: "/offices" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
      { name: "MetaTalks", path: "/metatalks" }
    ],
    languages: [
      { code: "en", name: "En" },
      { code: "de", name: "De" }
    ]
  },

  homepage: {
    leftSection: {
      headline: "We make businesses the best they can be",
      ctaLabel: "ABOUT US",
      backgroundColor: "#f2021c" // MetaDesign brand red
    },
    rightSection: {
      headline: "Creativity with the power to transform",
      ctaLabel: "OUR WORK",
      backgroundColor: "#000000", // Black
      caseStudy: {
        client: "Cencora",
        linkText: "See this case"
      }
    }
  },

  aboutContent: {
    title: "About MetaDesign",
    description: [
      "We are a creative brand consultancy. We've been collaborating with leading organizations to solve brand and business challenges since 1979.",
      "Our approach combines strategic thinking with creative excellence to create meaningful connections between brands and people.",
      "From brand strategy to digital experiences, we help businesses become the best they can be."
    ],
    ctaText: "Learn more about us"
  },

  workContent: {
    title: "Our Work",
    projects: [
      {
        name: "Cencora",
        description: "Brand transformation for a leading healthcare company",
        featured: true
      },
      {
        name: "Deutsche Telekom",
        description: "Digital brand experience redesign",
        featured: false
      },
      {
        name: "Volkswagen",
        description: "Brand strategy and identity development",
        featured: false
      }
    ],
    ctaText: "View all projects"
  },

  footer: {
    leftLinks: [
      { name: "About", path: "/about" },
      { name: "Work", path: "/work" },
      { name: "Offices", path: "/offices" },
      { name: "MetaTalks", path: "/metatalks" }
    ],
    rightLinks: [
      { name: "Let's talk", path: "/contact" },
      { name: "Contact", path: "/contact" },
      { name: "Join our team", path: "/careers" },
      { name: "Careers", path: "/careers" }
    ],
    socialLinks: [
      { name: "LinkedIn", url: "#", icon: "linkedin" },
      { name: "WeChat", url: "#", icon: "wechat" },
      { name: "Instagram", url: "#", icon: "instagram" }
    ],
    legalLinks: [
      { name: "Imprint", path: "/imprint" },
      { name: "Data Privacy", path: "/privacy" },
      { name: "Cookies Settings", action: "openCookieSettings" }
    ],
    copyright: "© MetaDesign, part of Publicis Groupe"
  },

  cookieNotice: {
    text: "MetaDesign uses cookies that are strictly necessary for the operation of the site and in order to compile statistics of visits in order to improve its operation and its services. By clicking \"Accept All Cookies\", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. You can express your choices by using the three dedicated buttons. For more information, please consult our",
    privacyLinkText: "Privacy Notice.",
    buttons: {
      settings: "Cookies Settings",
      rejectAll: "Reject All",
      acceptAll: "Accept All Cookies"
    }
  }
};

export default mockData;