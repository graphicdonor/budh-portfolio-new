export interface Project {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string;
  tagline: string;
  overview: string;
  role: string;
  duration: string;
  highlights: string[];
  challenge: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "rdash",
    title: "R'Dash",
    category: "Construction Management Platform",
    tools: "Built from scratch, surveys, BOQs, vendor allocation, collaboration automation",
    image: "/images/Maxlife.png",
    tagline: "YC Funded Startup — Built from the ground up",
    overview:
      "R'Dash is a construction management platform designed for developers, contractors, and design studios. It streamlines the entire project lifecycle from initial surveys through to final delivery, bringing all stakeholders onto a single collaborative platform.",
    role: "Product Designer",
    duration: "2021 – 2023",
    highlights: [
      "Designed end-to-end workflows for surveys, BOQs, and vendor allocation",
      "Created a unified collaboration layer for developers, contractors, and studios",
      "Built comprehensive design system and component library from scratch",
      "Automated approval flows reducing manual coordination by 60%",
      "Designed mobile-first field-worker interface for on-site usage",
    ],
    challenge:
      "Construction projects involve dozens of stakeholders with conflicting workflows and legacy paper-based processes. The challenge was to digitize these workflows without disrupting the existing mental models of field workers who had never used digital tools.",
    outcome:
      "The platform launched successfully with YC backing, onboarding 50+ construction firms in the first quarter. User research showed a 40% reduction in project delays attributed to the automated collaboration and vendor allocation features.",
  },
  {
    id: "rankwatch",
    title: "RankWatch",
    category: "AI-Powered Internet Marketing Platform",
    tools: "UI/UX standards, interaction design systems, traffic and ranking analytics",
    image: "/images/sapphire.png",
    tagline: "Defining UI/UX standards for a market-leading SEO platform",
    overview:
      "RankWatch is an AI-powered internet marketing platform that helps website owners and SEO agencies analyze traffic, backlinks, keyword rankings, and competitors. As Lead Designer, I defined and implemented the UI/UX standards and interaction design systems across the entire product.",
    role: "Lead Designer",
    duration: "2018 – Present",
    highlights: [
      "Defined and documented UI/UX standards across the entire product suite",
      "Built a scalable interaction design system used across 20+ product modules",
      "Redesigned the analytics dashboard reducing time-to-insight by 35%",
      "Introduced data visualization patterns for traffic and ranking analytics",
      "Led design for AI-powered competitor analysis and reporting features",
    ],
    challenge:
      "The platform had grown organically over years, resulting in inconsistent UI patterns across modules. Users were struggling with cognitive overload from dense data-heavy screens. A holistic design system was needed to unify the experience.",
    outcome:
      "The new design system reduced onboarding time for new users by 30%. Customer satisfaction scores improved significantly, and the platform's user retention rate increased following the design overhaul.",
  },
  {
    id: "knovelo",
    title: "Knovelo",
    category: "Reader Community App",
    tools: "Platform for readers and authors, book sharing, reading, author engagement",
    image: "/images/Solidx.png",
    tagline: "Connecting readers and authors in a shared literary universe",
    overview:
      "Knovelo is a community platform that bridges readers and authors, enabling book discovery, sharing, and direct engagement. The platform fosters a vibrant reading community with social features, curated recommendations, and author-reader interaction tools.",
    role: "UI/UX Designer",
    duration: "2020 – 2021",
    highlights: [
      "Designed the end-to-end reader onboarding and book discovery flows",
      "Created author profile and engagement dashboards",
      "Designed social sharing features and community reading lists",
      "Built accessible reading interface optimized for long reading sessions",
      "Developed a tagging and recommendation system UI",
    ],
    challenge:
      "Balancing the needs of two distinct user groups — readers who want discovery and immersion, and authors who need visibility and engagement metrics — on a single platform without one group dominating the experience.",
    outcome:
      "Knovelo launched with strong community engagement, with early users averaging 3+ books added per session and high author participation rates due to the dedicated author dashboard and analytics features.",
  },
  {
    id: "locatr",
    title: "Locatr",
    category: "Grocery Navigation App",
    tools: "Real-time product availability on maps, UX design, customer pain points",
    image: "/images/radix.png",
    tagline: "Real-time grocery navigation solving everyday shopping frustrations",
    overview:
      "Locatr is a grocery navigation app that shows real-time product availability across nearby stores on an interactive map. It solves the common pain point of visiting a store only to find the item out of stock, saving shoppers time and reducing frustration.",
    role: "UX Designer",
    duration: "2020",
    highlights: [
      "Conducted user research to identify top grocery shopping pain points",
      "Designed the real-time map interface with store and product layers",
      "Created a streamlined product search and filter experience",
      "Designed store comparison flow for price and availability",
      "Built the shopping list integration with availability alerts",
    ],
    challenge:
      "Real-time data on shelves is inherently messy — products go in and out of stock constantly. The UX challenge was communicating uncertainty and confidence levels in availability data without overwhelming the user or undermining trust in the app.",
    outcome:
      "User testing showed Locatr reduced average shopping planning time by 25 minutes per session. The map-first approach proved highly intuitive, with 85% of test users completing their first task without guidance.",
  },
  {
    id: "kockpit",
    title: "Kockpit",
    category: "BI Dashboard",
    tools: "ERP dashboards for sales, finance, inventory, production, UI systems",
    image: "/images/bond.png",
    tagline: "Enterprise BI dashboards that turn data into decisions",
    overview:
      "Kockpit is a business intelligence dashboard platform built for ERP systems, providing real-time visibility into sales, finance, inventory, and production. It transforms complex enterprise data into clear, actionable visual insights for decision-makers.",
    role: "UI/UX Designer",
    duration: "2019 – 2020",
    highlights: [
      "Designed dashboards for 5 core ERP modules: sales, finance, inventory, production, HR",
      "Created a flexible widget system for customizable dashboard layouts",
      "Designed drill-down data exploration patterns for business analysts",
      "Built a consistent data visualization language across all modules",
      "Designed role-based views for executives, managers, and analysts",
    ],
    challenge:
      "Enterprise BI tools often suffer from information overload. The challenge was designing interfaces that surface the most critical KPIs immediately while still providing access to deep analytical capabilities for power users — all within a single coherent UI system.",
    outcome:
      "Kockpit was adopted across 15+ enterprise clients. Executive users reported spending 50% less time in weekly reporting meetings due to self-serve dashboard access, and the customizable widget system received strong feedback for its flexibility.",
  },
  {
    id: "websignals",
    title: "WebSignals",
    category: "Web Monitoring & Brand Intelligence",
    tools: "Mention tracking across social, news, blogs, forums, podcasts, prototype to final",
    image: "/images/Maxlife.png",
    tagline: "Brand intelligence from prototype to production",
    overview:
      "WebSignals is a web monitoring and brand intelligence platform that tracks mentions across social media, news, blogs, forums, and podcasts. I took the product from initial prototype all the way to the final production-ready solution, shaping the entire design language.",
    role: "UI/UX Designer",
    duration: "2018 – 2020",
    highlights: [
      "Led design from early prototype through to final production release",
      "Designed the unified mention tracking feed with source filtering",
      "Created sentiment analysis visualization and trend dashboards",
      "Built the alert configuration and notification design system",
      "Designed competitive brand comparison features",
    ],
    challenge:
      "Aggregating data from wildly different sources — from Twitter threads to podcast transcripts — into a single coherent feed required designing a flexible content card system that could adapt to different data structures while remaining visually consistent.",
    outcome:
      "WebSignals launched to positive market reception with brands citing the unified feed design as a key differentiator over competitors. The prototype-to-production design process established a repeatable design workflow adopted by the team.",
  },
];
