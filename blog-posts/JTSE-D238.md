---
title: "Day 238: Mobile Ready"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 18, 2026"
description: "Making the home page work on mobile phones."
---

Hello friends,

<br>

Today I began the task of making the new website *mobile-friendly*. While not a terribly complicated task, it can be a bit time consuming.

<br>

## Hindsight

<br>

Thinking about it now, while it's great to have individual modules for all the pages, I am noticing a lot of repeating patterns. I think it would've been smarter starting off to limit the styling sheets, having a main sheet, a general page styling sheet, and *THEN* if needed a specific one for that page.

<br>

Because now that I have to make things mobile friendly, I'm gonna have to make the exact same media queries for a bunch of pages, yay...

<br>

## Moving On

<br>

Moving things along I kicked things off today by modifying the nav bar, specifically the dropdown menu. After struggling with a hidden *overflow-none* that caused me a headache, I got the dropdown to work for both the projects special coloring, and the home page.

<br>

Next I faced the actual home page. The first issue was how to modify the main image. It's currently bordered by pseudo selectors with fixed contents like: +====+. The issue is that if the image is now smaller, the border is way to big. Now I can either scale the font down OR just change the contents of it since it's already in the CSS.

<br>

While I can get very in-depth with the media queries I decided to just focus on three breakpoints, ~768 / 768-1024 / 1024~. I think these give good enough coverage of the variety of devices I'll be facing.

<br>

It's nice to get this page out of the way since I'm assuming it will be the most challenging. Now that that's done I can move on to getting the others polished up and this website posted!