---
title: "Day 235: Star Pattern"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "January 15, 2026"
description: "Creating another bordering pattern to contain the page."
---

Hello friends,

<br>

Today I kept up work with the projects page. Because I'm trying to keep things consistent I end up having many repeating styles, such as bordering Ascii images on the pages. When I made the about page I had this brick pattern, the home page the columns, and now a star pattern. It's useful as I can just reuse the same logic. But there is a downside.

<br>

## Revisiting Old Code

<br>

The same way a developer cringes looking at their own old code, I too feel the same emotions when creating duplicate pages on my website. Since the styles are defined per page (something I'll have to improve on in the future), they're similar but different. For example on every page I've had to create a bunch of rows and dividers with ::after. Because I don't want the last row to have a divider after it I needed to use the right selector. 

<br>

With every page I understand these pseudo-elements and selectors more and improve on the code. I also make smarter decisions when it comes to the HTML layout.

<br>

What I'm trying to say is that it made me cringe to have to renew the code on a page written two days ago. Tis' the life...