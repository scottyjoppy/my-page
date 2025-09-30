---
title: "Day 165: PlayerGrid to Grid"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 29, 2025"
description: "Almost fixing the big problem."
---

Hello friends,

<br>

So I've have the problem for a few days now where my player was not positioned according to a grid. I've gotten the code to a point where I have grid coordinates, they're just not working correctly.

<br>

## Getting It To Work

<br>

Through various levels of print debugging I've realized that the grid my player sees is not the same as the real grid. Through further investigation I found that in my main file, I'm passing different offsets to player, template grid, and the map. Yay, another thing to fix. So I spent some time getting them all aligned, first template grid and map grid. Then map grid and it's own bounding boxes. Then finally player and map grid, the hardest of them all. After a few hours I came to the realization that I've been haven't actually defined a player size and instead have been using some vector to define both that and the grid, which is wrong. I fixed that, screamed internally a bit more, then finally when a player stood at 0 0 0, he was at 0 0 0. Insanity.

<br>

Despite how hilarious that sounds, yeah that was quite an accomplishment. Just a bunch of stupid issues stacked on top of each other but now I think it works. Well, the grid part. The player's bounding box and shadow are still completely off but that will have to be a problem for tomorrow. Bottom line is that I got the player on the same grid as the map, so now we can just fix the small issues until I can get back to collision, another dragon ahead of me.

<br>

Thank you for reading today's blog, until tomorrow friend.
