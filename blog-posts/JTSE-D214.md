---
title: "Day 214: Finishing Up Projects Page"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "December 17, 2025"
description: "Putting some final touches on the projects page."
---

Hello friends,

<br>

Today I finished up the projects page. One of the main new things I learned today was how to change style attributes based on the page name. I'll go over how I did that today.

<br>

## How To Detect Page

<br>

It was actually really not that difficult since I'm using Nextjs. Next has a hook called usePathname which literally just returns the current pathname as a string. So if I'm on /projects it will return "/projects". Simple enough. From there it's just a matter of checking which path I'm on and changing the styles accordingly. I kept things pretty simple for this page and used my secondary colors to style the nav and footer differently. But otherwise that's the main thing I learned today.

<br>

I did a couple other things like touch up the tooling hover tooltip, reorder the projects better, and adjust some of my spacing. I'm gonna have to go through everything later to make it mobile friendly but I don't think that will be too challenging.

<br>

Thank you for reading today's blog, it's a long journey but I'm trying to hang in there. Just taking things day by day.