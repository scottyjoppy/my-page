import { nanoid } from "nanoid";

export const blogPost = {
  _type: "blog",
  title: "Day 1: Setting the pace",
  blogSeries: "Journey To: Software Engineer",
  blogLine: "From warehouse racks to full stack",
  description:
    "A look back to how it all started. Laying the groundwork for a new challenge to better myself and my skills.",
  date: "2025-04-07",
  slug: {
    _type: "slug",
    current: "JTSE-D1",
  },
  content: [
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "Hello,\u00a0",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "my name is Alexander Delisle and I am a software engineer. I first ever touched code in September 2024. I was fascinated by such basic concepts as functions and loops and quickly challenged myself to create my first web app with ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "HTML",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: " ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "CSS",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: " and ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "JavaScript",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: ".",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "The Idea",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [
        {
          _type: "link",
          _key: "link1",
          href: "https://store.steampowered.com/app/427520/Factorio/",
        },
        {
          _type: "link",
          _key: "link2",
          href: "https://store.steampowered.com/app/526870/Satisfactory/",
        },
        {
          _type: "link",
          _key: "link3",
          href: "https://store.steampowered.com/app/2691010/Assembly_Line_2_Mobile_Version/",
        },
      ],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "I've always had an interest in factory building games such as ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "Factorio",
          marks: ["em", "strong", "link1"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: " and ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "Satisfactory",
          marks: ["em", "strong", "link2"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: ". At the time, I was into one - ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "Assembly Line 2",
          marks: ["em", "strong", "link3"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: ". Through previous experience in the genre I'm used to using online tools like material calculators to plan my factories as efficiently as possible. Since the community for this game is relatively small there were no such tools available so I decided to use my newfound skills to create a calculator.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "Just Start",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "h4",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "Better to start wrong than to not start at all.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [
        {
          _type: "link",
          _key: "link4",
          href: "https://www.freecodecamp.org",
        },
      ],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "This is not true in all cases. Like doing drugs. But nonetheless I find too easily was I overcome with choices. After hearing about ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "_Tutorial Hell_",
          marks: ["em"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: " I decided I should just start. I'll learn much more from doing and failing than just watching videos. So, armed with a few completed lessons on ",
          marks: [],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: "FreeCodeCamp",
          marks: ["em", "strong", "link4"],
        },
        {
          _type: "span",
          _key: nanoid(),
          text: " and an Excel sheet database I found on Reddit, I began.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "The Code",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "code",
      _key: nanoid(),
      language: "javascript",
      code: 'function metalI(amountPS, metalIndex) {\n\u00a0 machine[0].metalNum = metal[metalIndex];\n\u00a0 levelValue = machineLevelArr[0].value;\n\u00a0 levelCalc(levelValue);\n\u00a0 starterLVL = levelValueFound;\n\u00a0 machine[0].amount = amountPS / starterLVL;\n\u00a0 totalStarter += machine[0].amount;\n\n\u00a0 metalMade =\n\u00a0 \u00a0 machine[0].amount + " " + machine[0].name + " " + machine[0].metalNum;\n\n\u00a0 return metalMade;\n}',
      filename: null,
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "For as inefficient, confusing and smelly my code was, boy did I have fun.\u00a0",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "I took a handful of concepts: functions, loops, if statements, and variables, and created something actually useful. I fell in love with coding with the endless void of learning in tech. As well as the abundance of sources to learn from online. I felt as if I've been blind to this world. I use the internet, I have a phone, a computer, but never did I think of how it all worked. I accepted that these things are beyond my understanding. But now, now a world of opportunity is ahead of me. And I'm excited to embark. To learn. To get better and better. That is the joy I felt after my first project. The hope I had. Which I'm happy to say is only stronger today.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "\n",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "Going Forward",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: nanoid(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nanoid(),
          text: "That brings us here, to this blog. I learned a lot since September, and I only plan to continue that learning everyday. I felt it necessary to document my journey somewhere. To show my path from a warehouse worker to a full time software engineer. I’ll document the various lessons, resources, and methods used to optimize my time and develop my skills. The many failures and small victories to come. And the eventual achievement of working in the tech field.",
          marks: [],
        },
      ],
    },
  ],
};
