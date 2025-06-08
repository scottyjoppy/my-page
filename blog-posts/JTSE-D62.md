---
title: "Day 62: Water Me Almost Works"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 7, 2025"
description: "Continued development and seeing an almost working version of Water Me."
---

Hello,

<br>

Today was a great day. Things are starting to shape up and I have a pretty good view of what things will look like. I spent the day improving on all the existing components and running some tests to see how everything works out.

<br>

## Style

<br>

I still haven't gotten around to making the stylings adaptable to every screen size. I know, sad. However, I at least made it simpler for me to edit the tags within some of the components. Sometimes I wonder if adding a className prop to the component is best the practice but for now it's more legible for me and I'll stick with it.

<br>

## useRouter / usePathname

<br>

This was my first introduction to these hooks and I'm a big fan. The main use case comes from an issue I encountered when testing. Not so much an issue but more of a quality-of-life fix. I wanted it so that when I submit a form on the home page I'm then redirected to my plants' gallery. The caveat being, that my form logic is passed through a context provider, the form itself is a reused component in two pages. So usePathname. I use this hook to first determine the page I'm on, then if it matches, redirect to the "myplants" page

<br>

```tsx
pathname === "/" ? router.push("myplants") : "";
```

<br>

Dope.

<br>

## Testing

<br>

When going into testing I really try to put myself in the shoes of the user. Sometimes even getting a user (my wife), disconnected from the project to try things out and give feedback on what works and what doesn't. Some changes are only apparent after using the app for a longer period of time, but some are immediate. For example when I created a plant, I wanted to water it every nine days. I immediately realized that my current setup does not allow for that kind of frequency. Additionally, I found some annoying glitches when trying to edit the plant. By default, once you create a plant, you set the water date to "Never", but when you edit and change say just the name, the water date is set to today. I also thought of some edge cases I'd like to consider. Like what if the plant is set to get watered every Mon and Wed? And monday comes and I haven't watered the plant. It shouldn't say the next water date is Wednesday UNTIL I water it today. On the same topic, if it's wednesday and I missed monday, it should remind me that I'm two days late on my watering. These are all cases to consider and while I can't discover these quirks all by myself, I do see the value in feedback from a variety of users who all might use the app differently.

<br>

It's great to finally have a basically working version of the web app. Now it's just a matter of making the stylings work on all screens, adding user accounts, and sending texts. The first being the simplest and the next two requiring much more research. Overall I'm incredibly happy that I've gotten to work on this project this past week. It really came outta nowhere and I feel like I learned so much in such a small amount of time. Lesson: learn by doing. Thank you for joining me today, I wish you all the best.