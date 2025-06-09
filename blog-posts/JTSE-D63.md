---
title: "Day 63: Responsive Layout"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "June 8, 2025"
description: "Adding in styles to better support various device screens."
---

Hello,

<br>

Today was all about style, and minor fixes, but mostly style. I had the goal today of making my plants page responsive for a variety of devices. Make the cards and sizes adjust dynamically based on the screen. It wasn’t simple but I think I got it somewhat working.

<br>

## How To: Make Big Card Small

<br>

Up until now I’ve built everything with the sole purpose of fitting my own screen. I didn’t wanna think too much about every single device my app will be on, but I did make a mental note of the various style errors I have seen and not fixed.

<br>

- Large text not getting small.
- Absolute elements extending the screen.
- Cards overflowing.
- Shouldn’t show same amount of cards per page for every screen size.
- Forms couldn’t be closed because the edges go out of the screen.

<br>

Basic layout issues. I knew I needed to limit my widths and heights. Implement some clamping, and calculation to get relative and dynamic values. But a lot of getting this stuff right came down to trial and error. Finding out what works, what doesn't, how parents affect children affect parents. I don't like the band-aid fix of overflow-hidden on elements that can be better implemented, but the overflow property in general had to be used smartly. 

<br>

There's still a lot to improve on in terms of styling but this I at least got the ball rolling today. Thank you for catching up on today's blog, I'll see ya tomorrow.