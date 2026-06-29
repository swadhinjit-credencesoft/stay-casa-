export const heroContent = {
  backgroundImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2000",
  backgroundAlt: "Resort suites",
  breadcrumb: {
    homeLabel: "Home",
    homeHref: "/",
    currentLabel: "Suites & Rooms",
  },
  tag: "Our Collection",
  title: "Suites & Rooms",
  description: "Each suite is a self-contained world — distinct in character, united by exceptional comfort.",
} as const;

export const emptyState = {
  message: "No suites match your current filters.",
  resetLabel: "Reset Filters",
} as const;
