
export interface Mission {
  id: number;
  title: string;
  category: "Money Smart" | "Healthy Habits" | "Confidence & Connection";
  description: string;
  whyThisMatters: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Coin Match-Up",
    category: "Money Smart",
    description: "Ask your child to find one penny, one nickel, one dime and one quarter. Together, line them up by value and say their names out loud.",
    whyThisMatters: "Kids need repeated hands-on exposure to understand money."
  },
  {
    id: 2,
    title: "Grocery Decision Duo",
    category: "Money Smart",
    description: "At the store, ask: \"We can only pick one snack—this one is $3 and the other is $5. What should we choose and why?\"",
    whyThisMatters: "Real-time trade-off thinking builds budgeting instinct."
  },
  {
    id: 3,
    title: "The $5 Wishlist",
    category: "Money Smart",
    description: "Let your child write down 3 things they want under $5. Then ask, \"Which one would you use the most?\"",
    whyThisMatters: "Helps kids prioritize based on value, not impulse."
  },
  {
    id: 4,
    title: "Jar Challenge",
    category: "Money Smart",
    description: "Give your child 3 jars or cups: Save, Spend, and Give. Hand them $1 in coins and let them decide how to divide it.",
    whyThisMatters: "Visual budgeting is powerful at this age."
  },
  {
    id: 5,
    title: "Money Memory Game",
    category: "Money Smart",
    description: "Show them 5 toy prices (real or pretend), then cover them and quiz: \"Which one was most expensive?\"",
    whyThisMatters: "Builds price awareness and memory."
  },
  {
    id: 6,
    title: "Rainbow Hunt",
    category: "Healthy Habits",
    description: "Ask your child to eat a food from 5 different colors today (e.g., red apple, green peas, orange carrots).",
    whyThisMatters: "Color variety = more nutrients."
  },
  {
    id: 7,
    title: "Label Detective",
    category: "Healthy Habits",
    description: "Grab two snacks and read the sugar grams together. Ask, \"Which has more sugar?\"",
    whyThisMatters: "Builds early nutrition label awareness."
  },
  {
    id: 8,
    title: "Snack Switch",
    category: "Healthy Habits",
    description: "Offer 2 snacks: one sugary, one whole (like fruit or cheese). Ask them to try both and describe how they feel after each.",
    whyThisMatters: "Teaches mindful eating."
  },
  {
    id: 9,
    title: "Water Buddy",
    category: "Healthy Habits",
    description: "Set a timer for 2 hours. Ask your child to drink one glass of water before it rings.",
    whyThisMatters: "Forms healthy hydration habits."
  },
  {
    id: 10,
    title: "Make-a-Plate Game",
    category: "Healthy Habits",
    description: "Have your child draw a plate with healthy items for breakfast. Let them explain their choices.",
    whyThisMatters: "Planning meals builds food literacy."
  },
  {
    id: 11,
    title: "Compliment Challenge",
    category: "Confidence & Connection",
    description: "Ask your child to give one genuine compliment to someone today. Reflect at bedtime: \"How did they react?\"",
    whyThisMatters: "Builds empathy and verbal courage."
  },
  {
    id: 12,
    title: "Feelings Freeze Frame",
    category: "Confidence & Connection",
    description: "Say an emotion (happy, mad, sad, worried) and ask your child to show it with their face and body—no words.",
    whyThisMatters: "Boosts emotional intelligence and nonverbal skills."
  },
  {
    id: 13,
    title: "Mirror Talk",
    category: "Confidence & Connection",
    description: "Look in a mirror and say one nice thing about yourself. You go first.",
    whyThisMatters: "Builds self-esteem and expressive language."
  },
  {
    id: 14,
    title: "Tell Me More",
    category: "Confidence & Connection",
    description: "At dinner, ask a question like \"What was something weird today?\" and follow up with: \"Tell me more.\"",
    whyThisMatters: "Teaches listening and deeper sharing."
  },
  {
    id: 15,
    title: "Voice Volume Practice",
    category: "Confidence & Connection",
    description: "Play with voice volume—whisper, soft, medium, loud. Ask: \"When would each be okay to use?\"",
    whyThisMatters: "Helps kids self-regulate and understand tone."
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
