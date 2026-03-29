export const PROFILE_TABS = [
  { key: "new", label: "Yangi" },
  { key: "all", label: "Barchasi" },
] as const;

export type ProfileTab = typeof PROFILE_TABS[number]["key"];