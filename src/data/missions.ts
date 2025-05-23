
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
    parentTip: "This quick activity builds coin recognition and value comparison. Saying the coin names out loud reinforces vocabular, while lining them up helps kids connect size, color, and value. Do it regularly—at home, in the car, or before a purchase—so they start to see coins as tools, not just shiny objects."
  },
  {
    id: 2,
    title: "Grocery Decision Duo",
    category: "Money Smart",
    description: "At the store, pick two snacks—one around $3 meant for one person, and one around $5 meant for two people. Ask your child: \"We can only choose one snack. Which one would you pick and why?\"",
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
    description: "Give your child 6 jars or cups labeled: Needs, Wants, Education, Emergency, Giving, and Investment. Hand them $1 in coins and let them decide how to divide it. Ask, \"Why did you choose to put the money there?\"",
    whyThisMatters: "Visual budgeting is powerful at this age—it helps kids internalize the idea that money has different jobs.",
    parentTip: "This mission introduces your child to real-world money categories. Each jar teaches a purpose: \"Needs for essentials\" \"Wants for fun and extras\" \"Education for learning tools or experiences\" \"Emergency for surprise problems\" \"Giving to help others \" \"Investment to grow money over time\" Let your child decide how to divide the $1 and explain why. There's no right or wrong—just insight into how they think. The goal is to spark thoughtful conversations and lay the foundation for lifelong money confidence."
  },
  {
    id: 5,
    title: "Money Memory Game",
    category: "Money Smart",
    description: "Show your child 5 items with prices (toys or household items). Then cover the prices and ask: Which one was the most expensive?",
    whyThisMatters: "Builds price awareness and memory.",
    parentTip: "This game sharpens your child's awareness of how much things cost—a skill that leads to better decision-making. Use everyday objects like cereal, soap, socks, or snacks with their prices. Ask which was most expensive, least expensive, or which item felt \"worth it.\" These short memory games build price-checking habits they'll use for life."
  },
  {
    id: 6,
    title: "Change Maker Mission",
    category: "Money Smart",
    description: "Give your child a challenge: \"Can you make 25 cents using only 4 coins?\" Let them experiment with real or play coins. Ask, \"Is there more than one way to do it?\"",
    whyThisMatters: "Strengthens coin value recognition and flexible problem solving.",
    parentTip: "This hands-on puzzle helps your child understand how different coins add up to the same value. It's not just about memorizing—it’s about thinking creatively with money. If they find one solution (2 dimes + 1 nickel), prompt them to try another (1 quarter). Let them explain their thinking—it boosts both math and money skills."
  },
  {
    id: 7,
    title: "Label Detective",
    category: "Healthy Habits",
    description: "Grab two snacks and read the sugar grams together. Ask, \"Which has more sugar?\"",
    whyThisMatters: "Builds early nutrition label awareness.",
    parentTip: "This mission introduces your child to the idea that not all snacks are the same even if they look similar. Learning to read nutrition labels helps kids make smart choices early. Start with sugar, then later explore fat, fiber, or ingredients. You don't need to ban sugary snacks—just start asking, \"Is this an everyday food or a sometimes treat?\" It plants the seed for mindful eating."
  },
  {
    id: 8,
    title: "Snack Switch",
    category: "Healthy Habits",
    description: "Offer a sugary snack one day and a whole food snack (like fruit or cheese) on another. About 20 minutes after eating, ask: \"How does your body feel?\" Bonus Tip for Parents: Set a timer if needed! You could say: \"“Let’s check in with your body in 20 minutes and see what it tells us.\"",
    whyThisMatters: "Teaches kids to notice how different foods affect their energy and mood",
    parentTip: "Split this mission across two snack times or days. First, let them enjoy a sweet snack, then later try something whole and nourishing. Ask simple reflection questions after each one: \"Do you feel full or still hungry?\" \"Do you feel ready to play or kind of sleepy?\" This builds body awareness and helps kids notice how food affects focus, energy, and emotions—without guilt or pressure."
  },
  {
    id: 9,
    title: "Water Buddy",
    category: "Healthy Habits",
    description: "Set a timer for 2 hours. Ask your child to drink one glass of water before it rings. You can name the timer something fun, like \"The Water Dragon!\"",
    whyThisMatters: "Forms healthy hydration habits.",
    parentTip: "Kids often forget to drink water unless it's part of a game or routine. This mission helps make hydration fun and easy. Drinking water regularly supports focus, digestion, mood, and energy. You can set a few \"Water Buddy\" timers throughout the day, especially during screen time or outdoor play. Let your child track how many times they beat the timer with a sticker or tally!"
  },
  {
    id: 10,
    title: "Make-a-Plate Game",
    category: "Healthy Habits",
    description: "Have your child draw a plate with healthy foods for breakfast. Ask them to explain their choices—what’s on it, and why they picked it!",
    whyThisMatters: "Planning meals builds food literacy and confidence.",
    parentTip: "This mission helps kids think ahead and recognize what a balanced meal might look like. Encourage them to include items from multiple food groups: Fruit (energy and vitamins) Grain (like toast or oatmeal for fuel) Protein (like eggs or yogurt to build muscles) Veggies (like spinach or tomatoes — yes, even at breakfast!) Dairy or healthy fats (like cheese, milk, or nut butter) Let them get creative—this isn't about perfection. Drawing and explaining builds both nutrition knowledge and decision-making skills."
  },
  {
    id: 11,
    title: "Compliment Challenge",
    category: "Confidence & Connection",
    description: "Ask your child to give one genuine compliment to someone today. Reflect at bedtime: \"How did they react?\"",
    whyThisMatters: "Builds empathy and verbal courage.",
    parentTip: "Compliments are powerful tools for connection. This mission teaches kids how words can affect others. Praise specific compliments like, 'I liked how you noticed your friend’s drawing.' At bedtime, reflect on how giving the compliment made them feel—it helps them internalize the joy of kindness."
  },
  {
    id: 12,
    title: "Feelings Freeze Frame",
    category: "Confidence & Connection",
    description: "Say an emotion (happy, mad, sad, worried) and ask your child to show it with their face and body—no words.",
    whyThisMatters: "Boosts emotional intelligence and nonverbal skills.",
    parentTip: "Nonverbal expression is a key part of emotional intelligence. This game helps kids connect body language to feelings. Make it fun—join in, guess each other's emotions, and use it later when big feelings show up to say, \"Can you show me how you feel with your body?\""
  },
  {
    id: 13,
    title: "Mirror Talk",
    category: "Confidence & Connection",
    description: "Look in a mirror and say one nice thing about yourself. You go first.",
    whyThisMatters: "Builds self-esteem and expressive language.",
    parentTip: "Many kids struggle to say kind things about themselves out loud. Go first and model it: \"I like that I kept trying today.\" This sets the tone. Mirror talk may feel silly at first, but over time it helps kids create a kind inner voice they’ll carry into tough moments."
  },
  {
    id: 14,
    title: "Tell Me More",
    category: "Confidence & Connection",
    description: "At dinner, ask a question like \"What was something weird today?\" and follow up with: \"Tell me more.\"",
    whyThisMatters: "Teaches deeper sharing.",
    parentTip: "This mission helps shift from surface-level talk to real connection. Avoid jumping in with advice or reactions—just say, 'Tell me more' and really listen. The goal is to help your child feel heard, which builds trust and opens the door to future conversations."
  },
  {
    id: 15,
    title: "Voice Volume Practice",
    category: "Confidence & Connection",
    description: "Play with voice volume—whisper, soft, medium, loud. Ask: \"When would each be okay to use?\"",
    whyThisMatters: "Helps kids self-regulate and understand tone.",
    parentTip: "Many kids get \"too loud\" warnings without ever being taught what \"loud\" or \"soft\" really means. Practicing volume playfully helps them internalize control. Link each volume to a real setting: whisper for the library, loud for the playground. This builds social awareness and self-regulation."
  },
  {
    id: 16,
    title: "The Green Challenge",
    category: "Healthy Habits",
    description: "Eat one green fruit or Veggie today. Ask: \"Can you name it and learn what it does for your body?\"",
    whyThisMatters: "Green foods support growing brains and bones.",
    parentTip: "Green foods like spinach, broccoli, and peas are full of chlorophyll, folate, and fiber. These nutrients support brain development, strong bones, and healthy digestion. Invite your child to pick a green food and talk about its `superpower`."
  },
  {
    id: 17,
    title: "The Orange Power-Up",
    category: "Healthy Habits",
    description: "Find and eat something orange (like a carrot or sweet potato). What does it do for your body?",
    whyThisMatters: "Orange foods help build strong eyesight and immunity."
  },
  {
    id: 18,
    title: "The Red Boost",
    category: "Healthy Habits",
    description: "Pick a red food and eat it today. Why might it be good for your heart?",
    whyThisMatters: "Red foods protect the heart and keep blood healthy."
  },
  {
    id: 19,
    title: "The Blue-Purple Protector",
    category: "Healthy Habits",
    description: "Eat a blue or purple food today—bonus points if it stains your tongue!",
    whyThisMatters: "These foods protect the brain and help the body heal."
  },
  {
    id: 20,
    title: "The White Energy Boost",
    category: "Healthy Habits",
    description: "Try a white or light brown food like garlic, cauliflower, or bananas. How does it help you move and think?",
    whyThisMatters: "White foods often give the body energy and fight germs."
  },
  {
    id: 21,
    title: "Brown Power Fuel",
    category: "Healthy Habits",
    description: "Eat something brown today—like whole grain bread, oats, or lentils. Ask: “What do you think this food does for your body?”",
    whyThisMatters: "Brown foods give lasting energy and support digestion."
  },
  {
    id: 22,
    title: "Black Brain Boost",
    category: "Healthy Habits",
    description: "Try a black-colored food like blackberries, black beans, or chia seeds. Ask: “How does this food help your brain or body?”",
    whyThisMatters: "Black foods are rich in antioxidants and support brain health."
  },
  {
    id: 23,
    title: "Fruit Finder",
    category: "Healthy Habits",
    description: "Today, try a new fruit or build a “fruit rainbow” on your plate. Can you name what each color does for your body?",
    whyThisMatters: "Fruits are full of vitamins and natural energy that help the body stay healthy and strong."
  },
  {
    id: 24,
    title: "Veggie Explorer",
    category: "Healthy Habits",
    description: "Eat a vegetable today you don’t usually eat—try it raw, dipped, or cooked a new way. Can you guess what its color does?",
    whyThisMatters: "Vegetables give your child the building blocks to grow, fight off sickness, and stay energized."
  },
  {
    id: 25,
    title: "Grain Brain Boost",
    category: "Healthy Habits",
    description: "Choose a whole grain food today—like oatmeal, brown bread, or popcorn. What kind of energy do you think it gives you?",
    whyThisMatters: "Whole grains give long-lasting energy and keep the brain focused."
  },
  {
    id: 26,
    title: "Protein Power-Up",
    category: "Healthy Habits",
    description: "Eat a protein-rich food today—like eggs, beans, or chicken. Ask: “How does protein help your body?”",
    whyThisMatters: "Protein helps muscles grow, repairs the body, and gives strength."
  },
  {
    id: 27,
    title: "Dairy Strong Bones",
    category: "Healthy Habits",
    description: "Drink milk or eat cheese or yogurt today. Then do 5 jumps and say “I’ve got strong bones!”",
    whyThisMatters: "Dairy builds strong bones, teeth, and muscles."
  },
  {
    id: 28,
    title: "Healthy Fat Hero",
    category: "Healthy Habits",
    description: "Try a food today with healthy fat—like avocado, peanut butter, or seeds. Ask: “What does this do for your brain?”",
    whyThisMatters: "Healthy fats help brains grow, boost focus, and protect organs."
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
