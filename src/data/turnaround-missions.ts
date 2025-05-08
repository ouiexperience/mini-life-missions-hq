
export interface TurnAroundMission {
  id: number;
  title: string;
  category: "Everyday Battles" | "Big Emotions" | "Power Struggles";
  description: string;
  whyThisMatters: string;
  parentTip?: string;
}

export const categoryColors = {
  "Everyday Battles": "mission-money",
  "Big Emotions": "mission-health",
  "Power Struggles": "mission-communication"
};

export const turnAroundMissions: TurnAroundMission[] = [
  {
    id: 1,
    title: "Trap",
    category: "Battles",
    description: "together."
   
  }
  {
    id: 15,
    title: "The Bedtime Push",
    category: "Power Struggles",
    description: "Create a bedtime chart they decorate, with a 3-step wind-down routine they control.",
    whyThisMatters: "Predictable routines help children feel safe and fall asleep easier.",
    parentTip: "Soon available"
  }
];

export const getRandomTurnAroundMission = (): TurnAroundMission => {
  const randomIndex = Math.floor(Math.random() * turnAroundMissions.length);
  return turnAroundMissions[randomIndex];
};
