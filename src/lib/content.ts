// ---------------------------------------------------------------
// All site copy lives here. Edit this file to update the portfolio.
// Search for "TODO" to find placeholders that need your real info.
// ---------------------------------------------------------------

export const profile = {
  name: "Jonathan Mendez",
  initials: "JM",
  role: "Data Analyst",
  location: "Based in Philadelphia, PA",
  photo: "/headshot.jpg",
  resumeUrl: "/resume.pdf", // TODO: add resume.pdf to /public
  email: "jwmp001@gmail.com",
  about:
    "Data analyst with a background in programmatic advertising, e-commerce, and live event operations. I use SQL, Python, and Tableau to find what matters, then turn it into a story stakeholders can act on.",
};

// Icons are matched by label: LinkedIn, GitHub, Tableau Public.
export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/TODO" },
  { label: "GitHub", href: "https://github.com/jonathanwmendez" },
  { label: "Tableau Public", href: "https://public.tableau.com/app/profile/TODO" },
];

export const skills = [
  "SQL",
  "Python",
  "Pandas",
  "NumPy",
  "Tableau",
  "Excel",
  "Git",
  "Data storytelling",
];

export type Project = {
  title: string;
  summary: string;
  tools: string[];
  thumb: "bars" | "line" | "donut" | "funnel";
  image?: string; // optional screenshot in /public, replaces the chart art
  href: string; // "Read more" link: report, dashboard, repo, or case study
};

// TODO: replace summaries and links with your real project details.
export const projects: Project[] = [
  {
    title: "Cyclistic bike-share: converting casual riders",
    summary:
      "Compared how casual riders and annual members use the service across a year of trip data, then recommended marketing moves to convert casual riders into members.",
    tools: ["SQL", "Excel", "Tableau"],
    thumb: "bars",
    href: "#",
  },
  {
    title: "Programmatic ad performance analysis",
    summary:
      "Analyzed programmatic campaign data as a COOP Creative Analyst to compare creative performance across placements and audiences, and presented findings to the team.",
    tools: ["SQL", "Excel", "Tableau"],
    thumb: "line",
    href: "#",
  },
  {
    title: "E-commerce sales and customer trends",
    summary:
      "Explored order-level e-commerce data to track revenue trends, top products, and repeat purchase behavior, with a dashboard for weekly review.",
    tools: ["Python", "Pandas", "Tableau"],
    thumb: "donut",
    href: "#",
  },
  {
    title: "Job application tracker",
    summary:
      "Built a browser-based tracker with local storage, status badges, and one-click follow-up email drafts to manage a high-volume job search.",
    tools: ["JavaScript", "HTML"],
    thumb: "funnel",
    href: "#",
  },
];

export const experience = [
  {
    period: "TODO: dates",
    title: "Data Analytics Fellow, Creative Analyst at COOP Careers",
    detail:
      "Analyzed programmatic advertising data and presented insights through data storytelling as part of a cohort-based analytics fellowship.",
    tools: ["SQL", "Excel", "Tableau"],
  },
  {
    period: "TODO: dates",
    title: "Festival Chair at Atlantic Brass Band Festival",
    detail:
      "Lead planning, vendor coordination, and day-of operations for a regional brass band festival.",
    tools: [],
  },
  {
    period: "TODO: dates",
    title: "Marketing Strategy Intern at Bull Moose Marketing",
    detail: "Supported campaign strategy and market research for clients.",
    tools: [],
  },
  {
    period: "TODO: dates",
    title: "Transaction Processing at Costco",
    detail: "Processed high-volume retail transactions with a focus on accuracy and reconciliation.",
    tools: [],
  },
];

export const education = [
  {
    year: "TODO: year",
    title: "Google Data Analytics Professional Certificate",
    detail:
      "Data cleaning, analysis, and visualization with SQL, spreadsheets, Tableau, and R, finished with a capstone case study.",
  },
  {
    year: "TODO: year",
    title: "Graduate degrees in Music, TODO: school",
    detail: "Advanced performance training. I still perform regularly.",
  },
];
