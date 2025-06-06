---
title: "Day 60: "
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 5, 2025"
description: "."
---

Hello,

<br>

Today I went into the project with a few goals: sort the data from Supabase, add a move up or down button to customize your gallery of plants, and figure out how to properly input the watering frequency.

<br>

## Sorting and Moving

<br>

While I lack professional experience in the realm of React file structure, I do see the need to atleast stay consistent myself. React is great in the sense you can put files anywhere and always reach them, but is also bad in the sense that too much freedom can be overwhelming. There’s no one way of structuring everything so it’s up to you to do what seems best.

<br>

Back to sorting, I bring this up because I have two main folders outside of my pages folder. The first being Components: typically holding TypeScript XML files exporting various reusable components. The other is Utils: used to hold regular TypeScript files with utility functions used throughout the app. I’m also planning on adding a Types folder to reduce repetitive type defining. I bring this up since sorting is split into two utility files, the first:

<br>

```ts
export const swapPositions = async (a: Plant, b: Plant) => {
if (a.id === b.id || a.sort_order === b.sort_order) return;
```

<br>

A swap function: swaps a and b plants.

<br>

```ts
export const movePlant = async (
  plants: Plant[],
  index: number,
  direction: "up" | "down"
) => {
  if (direction === "up" && index > 0) {
    await swapPositions(plants[index], plants[index - 1]);
  } else if (direction === "down" && index < plants.length - 1) {
    await swapPositions(plants[index], plants[index + 1]);
  }
};
```

<br>

The move function to control if the plant moves up or down. I can define the direction when calling the function and it’s important as well to not swap outside the length of the array.

<br>

The second file is for normalizing the sort index. While testing I realized that once deleted, that index was lost. Meaning that as I created and deleted plants, I ended up with say index 8, 9, 10. I could imagine this being a potential problem (not to mention ugly to look at) so I decided to always reset the sort indexes. This way once everything was sorted I could call the following function to reset the indexes from 1.

<br>

```ts
const updates = data.map((plant, index) =>
  supabase
    .from("plants")
    .update({ sort_order: index + 1 })
    .eq("id", plant.id)
);
```

<br>

Much better.

<br>

## Frequency

<br>

My original approach was to give the option to select a number which indicates how often you’d like to water your plant. If you watered every 2 days, select 2. After showing this to my wife, I could tell it was a bit confusing and disconnected from how you’d think about watering plants. So I settled on a few ways to choose.

<br>

1. Daily: water everyday.
2. \# Per Week: pick which days you should water.
3. \# Of Weeks: every week, every second week…
4. \# Of Months: same concept, with months.

<br>

I didn’t wanna add years cause I think you can just represent that with months, as well as I wanted to keep things simple. While I think this is better than the original frequency selector I still think some testing could reveal a potentially better way. Now it’s a mere matter of changing up the database, and brainstorming how to run calculations on these days.

<br>

While I love the TSX vibe of coding TypeScript alongside HTML, I sometimes feel things get too cluttered. I’m not sure if regular React devs just abstract away layers upon layers in their components, but I find too much abstracting is not always great. Maybe it's something I just need to get used to but in an effort to try and keep my code clean this does bug me.

<br>

I'm happy with today's progress and hope to continue development until the end of the week. After this week I think it's best to get back to my portfolio. That's all for today, thanks for reading; see ya tomorrow.
