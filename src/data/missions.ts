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
    title: "Coin Match-Up",
    category: "Money Smart",
    description: "Ask your child to find one penny, one nickel, one dime and one quarter. Together, line them up by value and say their names out loud.",
    whyThisMatters: "Kids need repeated hands-on exposure to understand money.",
    parentTip: "This quick activity builds coin recognition and value comparison. Saying the coin names out loud reinforces vocabulary, while lining them up helps kids connect size, color, and value. Do it regularly—at home, in the car, or before a purchase—so they start to see coins as tools, not just shiny objects."
  },
  {
    id: 2,
    title: "Grocery Decision Duo",
    category: "Money Smart",
    description: "At the store, ask: \"We can only pick one snack—this one is $3 and the other is $5. What should we choose and why?\"",
    whyThisMatters: "Real-time trade-off thinking builds budgeting instinct.",
    parentTip: "This mission helps your child think through everyday money decisions. It's not just about choosing the cheaper snack—it's about learning to consider value, sharing, and how choices affect future options. They might choose the $3 snack and say, \"Let's save the $2 for something else.\" Or they might choose the $5 snack and say, \"We can both enjoy it, and it's cheaper than buying two $3 snacks.\" These tiny decisions build real budgeting instincts over time."
  },
  {
    id: 3,
    title: "The $5 Wishlist",
    category: "Money Smart",
    description: "Let your child write down 3 things they want under $5. Then ask, \"Which one would you use the most?\"",
    whyThisMatters: "Helps kids prioritize based on value, not impulse.",
    parentTip: "This mission teaches kids to compare wants with a purpose. It nudges them to think about how much use or joy they'll get out of something—not just how fun it sounds in the moment. It also opens up great conversations about smart spending, delayed gratification, and making thoughtful choices with limited money."
  },
  {
    id: 4,
    title: "Jar Challenge",
    category: "Money Smart",
    description: "Give your child 3 jars or cups: Save, Spend, and Give. Hand them $1 in coins and let them decide how to divide it.",
    whyThisMatters: "Visual budgeting is powerful at this age.",
    parentTip: "This mission introduces your child to real-world money categories. Each jar teaches a purpose: Needs for essentials, Wants for fun and extras, Education for learning tools or experiences, Emergency for surprise problems, Giving to help others, Investment to grow money over time. Let your child decide how to divide the money and explain why. There's no right or wrong—just insight into how they think."
  },
  {
    id: 5,
    title: "Money Memory Game",
    category: "Money Smart",
    description: "Show them 5 toy prices (real or pretend), then cover them and quiz: \"Which one was most expensive?\"",
    whyThisMatters: "Builds price awareness and memory.",
    parentTip: "This game sharpens your child's awareness of how much things cost—a skill that leads to better decision-making. Use everyday objects like cereal, soap, socks, or snacks with their prices. Ask which was most expensive, least expensive, or which item felt \"worth it.\" These short memory games build price-checking habits they'll use for life."
  },
  {
    id: 6,
    title: "Rainbow Hunt",
    category: "Healthy Habits",
    description: "Ask your child to eat a food from 5 different colors today (e.g., red apple, green peas, orange carrots).",
    whyThisMatters: "Color variety = more nutrients.",
    parentTip: "The Green Challenge: Green foods like spinach, broccoli, and peas are full of chlorophyll, folate, and fiber. These nutrients support brain development, strong bones, and healthy digestion. Invite your child to pick a green food and talk about its \"superpower.\""
  },
  {
    id: 7,
    title: "Label Detective",
    category: "Healthy Habits",
    description: "Grab two snacks and read the sugar grams together. Ask, \"Which has more sugar?\"",
    whyThisMatters: "Builds early nutrition label awareness.",
    parentTip: "This mission introduces your child to the idea that not all snacks are the same—even if they look similar. Learning to read nutrition labels helps kids make smart choices early. Start with sugar, then later explore fat, fiber, or ingredients. You don't need to ban sugary snacks—just start asking, \"Is this an everyday food or a sometimes treat?\" It plants the seed for mindful eating."
  },
  {
    id: 8,
    title: "Snack Switch",
    category: "Healthy Habits",
    description: "Offer 2 snacks: one sugary, one whole (like fruit or cheese). Ask them to try both and describe how they feel after each.",
    whyThisMatters: "Teaches mindful eating.",
    parentTip: "Split this mission across two snack times or days. First, let them enjoy a sweet snack, then later try something whole and nourishing. Ask simple reflection questions after each one: \"Do you feel full or still hungry?\" \"Do you feel ready to play or kind of sleepy?\" This builds body awareness and helps kids notice how food affects focus, energy, and emotions—without guilt or pressure."
  },
  {
    id: 9,
    title: "Water Buddy",
    category: "Healthy Habits",
    description: "Set a timer for 2 hours. Ask your child to drink one glass of water before it rings.",
    whyThisMatters: "Forms healthy hydration habits.",
    parentTip: "Kids often forget to drink water unless it's part of a game or routine. This mission helps make hydration fun and easy. Drinking water regularly supports focus, digestion, mood, and energy. You can set a few \"Water Buddy\" timers throughout the day, especially during screen time or outdoor play. Let your child track how many times they beat the timer with a sticker or tally!"
  },
  {
    id: 10,
    title: "Make-a-Plate Game",
    category: "Healthy Habits",
    description: "Have your child draw a plate with healthy items for breakfast. Let them explain their choices.",
    whyThisMatters: "Planning meals builds food literacy.",
    parentTip: "This mission helps kids think ahead and recognize what a balanced meal might look like. Encourage them to include items from multiple food groups: Fruit (energy and vitamins), Grain (like toast or oatmeal for fuel), Protein (like eggs or yogurt to build muscles), Veggies (like spinach or tomatoes — yes, even at breakfast!), Dairy or healthy fats (like cheese, milk, or nut butter). Let them get creative—this isn't about perfection."
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
