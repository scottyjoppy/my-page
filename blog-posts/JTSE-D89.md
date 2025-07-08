---
title: "Day 89: Dates"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "July 04, 2025"
description: "Revisiting how I calculate the next water date."
---

Hello friends,

<br>

In all honesty, the last time I implemented a next water date I didn't fully understand all the AI slop I used. I knew generally how I wanted things to work and just put some rough things together. But this time around, as I'm revisiting that code, I believe I can make it more concise. As well, I want to approach it without use of AI. This project has involved a lot of AI generated code, but I think my best method of learning is do it once with AI, then the second time myself.

<br>

## Next Date

<br>

There's a few steps involved when checking the next date. First I need to separate the frequency types as they result in different calculations. If I'm selecting multiple days a week then I specify days, if I select every say: 2 weeks, then it's an interval of weeks.

<br>

```ts
switch (plant.frequency.type) {
  case "multiple-weekly":
    return plant.frequency.days;
  default:
    return plant.frequency.interval;
}
```

<br>

Once those are separate let's do the math. I think it's simplest to first normalize the times of the dates, then save them as a number.

<br>

```ts
const today = new Date().setHours(12, 0, 0, 0);
```

<br>

Then it should be easy to compare two numbers.

<br>

Now when it comes to finding the next date it's just a matter of taking the last water date variable, and adding what the frequency is. Say I'm supposed to water a plant every day. I could take the number from the previous water date, add 86400000 (one day in ms), then I know when it should be watered next. Things get slightly more complicated when walking number of weeks, months, or days of the week, but it's generally the same principle.

<br>

I still have to implement the latter part of this blog but I'm glad to come back to this next water date problem and try to solve it without an LLM. An important skill to have enough in a project like this where I'm just trying to do things quick. Thank you for joining today, I bid ye farewell friends.
