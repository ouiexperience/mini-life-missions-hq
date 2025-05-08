
export interface Mission {
  id: number;
  title: string;
  category: "Money Smart" | "Healthy Habits" | "Confidence & Connection";
  description: string;
  whyThisMatters: string;
  parentTip?: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Coi",
    category: "Mne",
    description: "Ask ",
    whyThisMatters: "Kids "
  }
];

export const categoryColors = {
  "Money Smart": "money",
  "Healthy Habits": "health",
  "Confidence & Connection": "communication"
};

export const getRandomMission = (): Mission => {
  const randomIndex = Math.floor(Math.random() * missions.length);
  return missions[randomIndex];
};
