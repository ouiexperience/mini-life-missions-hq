
export interface TurnAroundMission {
  id: number;
  title: string;
  category: "day";
  description: string;
  whyThisMatters: string;
  parentTip?: string;
}

export const categoryColors = {
  "Evers": "m",
  "otions": "malth",
  "Pogles": "mication"
};

export const turnAroundMissions: TurnAroundMission[] = [
  {
    id: 1,
    title: "Trap",
    category: "Battles",
    description: "together."
     }
];

export const getRandomTurnAroundMission = (): TurnAroundMission => {
  const randomIndex = Math.floor(Math.random() * turnAroundMissions.length);
  return turnAroundMissions[randomIndex];
};
