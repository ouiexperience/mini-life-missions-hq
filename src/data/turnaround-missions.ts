
export interface TurnAroundMission {
  id: number;
  title: string;
  category: "Everyday Battles" | "Big Emotions" | "Power Struggles";
  description: string;
  whyThisMatters: string;
}

export const categoryColors = {
  "Everyday Battles": "mission-money",
  "Big Emotions": "mission-health",
  "Power Struggles": "mission-communication"
};

export const turnAroundMissions: TurnAroundMission[] = [
  {
    id: 1,
    title: "The Gum Trap",
    category: "Everyday Battles",
    description: "Before going to the store, ask your child what treat they want to save for and write it down together.",
    whyThisMatters: "Planning ahead builds self-control and reduces impulse demands."
  },
  {
    id: 2,
    title: "Toothbrush Standoff",
    category: "Everyday Battles",
    description: "Let your child choose a brushing song and superhero name—then race to finish before the song ends.",
    whyThisMatters: "When kids feel in charge, they're more likely to build routines they enjoy."
  },
  {
    id: 3,
    title: "Dressing Time Drama",
    category: "Everyday Battles",
    description: "Offer two pre-approved outfit choices in a 'Yes Zone' to reduce morning resistance.",
    whyThisMatters: "Giving limited choices reduces resistance and boosts confidence."
  },
  {
    id: 4,
    title: "The Why Machine",
    category: "Everyday Battles",
    description: "When they ask \"Why?\", invite them to guess first before you answer. Praise their thinking.",
    whyThisMatters: "Encouraging guessing fosters critical thinking and reduces parent frustration."
  },
  {
    id: 5,
    title: "The Bored Button",
    category: "Everyday Battles",
    description: "Create a 'Boredom Box' with 3 go-to activities they can choose without asking you.",
    whyThisMatters: "Kids learn to take responsibility for their own time and decisions."
  },
  {
    id: 6,
    title: "Leaving Without Tears",
    category: "Big Emotions",
    description: "Give a 5-minute warning and let your child help decide how to say goodbye to the place or people.",
    whyThisMatters: "Rituals make transitions feel safe and predictable for children."
  },
  {
    id: 7,
    title: "Losing Isn't the End",
    category: "Big Emotions",
    description: "Before starting a game, talk about trying your best and cheering others—win or lose.",
    whyThisMatters: "Games are great opportunities to learn resilience and emotional control."
  },
  {
    id: 8,
    title: "I Want It My Way!",
    category: "Big Emotions",
    description: "Help your child take three deep breaths, name their feeling, and choose one calming action.",
    whyThisMatters: "Naming emotions is the first step toward emotional regulation."
  },
  {
    id: 9,
    title: "Sorry Not Sorry",
    category: "Big Emotions",
    description: "Act out a short story where a character makes a mistake, apologizes, and is forgiven.",
    whyThisMatters: "Stories and play help kids understand real empathy without shame."
  },
  {
    id: 10,
    title: "The Jealous Jab",
    category: "Big Emotions",
    description: "When your child feels left out, talk about things they're proud of and what makes them special.",
    whyThisMatters: "Helping kids recognize strengths eases envy and boosts self-worth."
  },
  {
    id: 11,
    title: "No Everything!",
    category: "Power Struggles",
    description: "Offer two choices within your boundary, like \"Do you want to brush teeth now or in 2 minutes?\"",
    whyThisMatters: "Giving controlled choices supports autonomy while holding limits."
  },
  {
    id: 12,
    title: "I Do It Myself!",
    category: "Power Struggles",
    description: "Break the task into steps and use a 'Help Ladder' where they choose when to ask for help.",
    whyThisMatters: "A clear scaffold lets kids build independence without feeling overwhelmed."
  },
  {
    id: 13,
    title: "Master Negotiator",
    category: "Power Struggles",
    description: "When your child wants to negotiate, use a \"Yes–Maybe–No\" list and explain your reasoning.",
    whyThisMatters: "Kids feel heard when they know why, even if the answer is no."
  },
  {
    id: 14,
    title: "Sharing Showdown",
    category: "Power Struggles",
    description: "Set a timer and turn-taking rules using a kitchen bell or hourglass during shared play.",
    whyThisMatters: "Sharing feels safer when the rules are clear and fair to all."
  },
  {
    id: 15,
    title: "The Bedtime Push",
    category: "Power Struggles",
    description: "Create a bedtime chart they decorate, with a 3-step wind-down routine they control.",
    whyThisMatters: "Predictable routines help children feel safe and fall asleep easier."
  }
];

export const getRandomTurnAroundMission = (): TurnAroundMission => {
  const randomIndex = Math.floor(Math.random() * turnAroundMissions.length);
  return turnAroundMissions[randomIndex];
};

