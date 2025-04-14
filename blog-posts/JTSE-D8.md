---
title: "Day 8: Animations!"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "April 14, 2025"
description: "Working more with the framer-motion library."
---

Hello,

<br>

I had a bit more time to play with the **_[Framer Motion](https://motion.dev/docs/react-animation)_** library today and it's definitely easier to understand. Here is what I learned and used:

<br>

1. To create a motion element simply prepend any existing element with "motion.".

<br>

```tsx
<motion.div />
```

<br>

2. To create an animation, use the animate property in the motion element.

<br>

```tsx
<motion.div animate={{}} />
```

<br>

3. To do something like translating an object downwards, you simply need to type x or y, then the amount; 0 being the default position. This will start the action every time the page is loaded. If you want to change the default state, adjust the "initial" property.

<br>

```tsx
<motion.div initial={{ x: -100 }} animate={{ x: 0 }} />
```

<br>

4. The fun of creating animations with this library is you can save specific movements and variants in variables and then simply pass the variables in the variants property.

<br>

```tsx
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible" />;
```

<br>

As a CSS animation noob I found this library incredibly useful. It supports gestures like whileHover, whileTap, whileInView... In making this blog site I heavily relied on Shadcn's premade components and didn't pay any mind to the animations they had created. I find that while this library does hold your hand a lot, is definitely a step to better understanding animations and beginning to create them yourself. I'm excited to keep using it and adding some flavour to this project.

<br>

I'd also love to give another huge shoutout to _**[Tom Is Loading](https://www.youtube.com/@tomisloading)**_. I watched through his **_[Framer Motion crash course video](https://www.youtube.com/watch?v=znbCa4Rr054&t=1523s)_** and he did an amazing job on explaining and guiding you through the library. He's also created tons of super helpful tutorials explaining more specific animations. I'll be sure to watch many more of them going forward.

<br>

Thank you for joining me today as I enter the world of web animations. I hope to continue to learn, and share any new insights in the days to come. Until next time.

<br>
<br>

**_[Eversport Draft Repo](https://github.com/scottyjoppy/eversports-draft)_**
