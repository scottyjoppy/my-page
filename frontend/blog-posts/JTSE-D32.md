---
title: "Day 32: CSS Rules"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "May 8, 2025"
description: "Going over some rules I'll follow to better style my page."
---

Hello,

<br>

Today I began work on the new layout for my page. It’s nice to go in and code with better insights into design and common problems that occur in web dev. So I’ve settled on a few rules I’ll keep in mind as I go into my styling. Also consider, in the most part, I’ll be referring to tailwind classes.

<br>

## Rules

1. **Min/Max sizing:**

Previously, I would just go about sizing things until it fits then leave it. That could mean slapping a width of 80vw then moving on, but that left no considerations for super wide screens or narrow screens, just my current screen. That’s why this rule states that in the case of adding a percentage-based size, I must define the limits or at least consider the implications of that value.

2. **Avoid element styling:**

What I mean by this is that any global values applied to HTML elements, like:

<br>

```css
h1 {
  color: blue;
}
```

<br>

Should be avoided. I’m assuming this is a common rule and should consider replacing these type of wrapper stylings with something like:

<br>

```css
.title-section > h1 {
  color: blue;
}
```

<br>

To at the very least constrain it to a specific class or section.

3. **Avoid !important:**

Sure, it’s useful to brute force a style when nothing seems to work, but in my experience, cases where I had to use !important, were cases when I was doing something wrong.

4. **Overflow-none as a band-aid:**

Besides the case where you are using this to intentionally crop and resize elements of your page, this class should raise the question: “Why are my elements overflowing in the first place?”.

5. **Keep the colours simple:**

The ShadCN bootstrap components have been super useful in setting things up quickly, but one thing I never liked was the amount of extremely similar colours staining my global.css file. In this refactor, I plan on scrapping most of the pre-made components and in turn every similar colour. I’m not sure if I’m gonna regret this but I found sometimes it’s easier to apply either a positive or negative brightness to a color whenever I need variants in shade. Otherwise revert back to tailwinds 0-900 color strength options.

<br>

I’m sure I’ll be adding more rules as time goes on but for now I hope to have fewer hiccups along the way with these.

<br>

That’s all for today, at the end of the day, I got an idea for a sort of theme for the site, which I’m sure will be tomorrow's blog title. Thank you for keeping up with today; I’ll be back tomorrow.
