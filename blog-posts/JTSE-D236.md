---
title: "Day 236: Blog Page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 16, 2026"
description: "Finishing up the blog page."
---

Hello friends,

<br>

Another day another page down.

<br>

## Complications

<br>

Other than the regular duplicate old page, remove tailwind, add new styles, Ascii art, style again, system I've been doing this page went pretty well. The main issue I had was with the slug. This is another reason why Claude is better than ChatGPT when coding because when trying to debug this issue CGPT naturally got into it's infinite loop of *not* optimizing focusing on completely unrelated issues. The problem is I couldn't pull the params from the route name. It started to seem like it was a versioning issue with NextJS so I took to the docs to see if there were any changes. 

<br>

It seemed like that was the case but just for fun I asked Claude the same question without mentioning the version. Amazingly it got the answer right away and instead of the convoluted answer CGPT was giving, Claude just said add *async await*. Fantastic.

<br>

Making me consider paying for Claude more and more everyday.