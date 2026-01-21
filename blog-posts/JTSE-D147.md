---
title: "Day 147: Cloth!"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 11, 2025"
description: "Making a realistic cloth using sticks and points."
---

Hello friends,

<br>

Today I finished up making the cloth and it's sick!

<br>

## How It Started

<br>

So yesterday I made sticks and points. A point being a circular object and a stick being a line between two points. Simple enough. Today I allowed for pinning wherein I just stop updating the movement of an object to make it look still. And thanks to Verlet the movement just adapts. Sticks are kinda separate by which they just keep the two points at a certain length. I'm not sure yet how to integrate a sort of stretch but I naively think it's not too complicated.

<br>

![cloth fail](/images/blog-images/day147/cloth.gif)

<br>

So this happened. One fun little problem I had to solve was how to create this grid of sticks and points without manually doing it. Points wasn't too hard, just a double for loop with my desired w + h, but sticks was a challenge. After some time I came up with two double for loops, one indexed to create the horizontal lines, and another for the vertical lines. Then I just added some initial pinned points, and the ability to click and pin them myself and voila!

<br>

![cloth win](/images/blog-images/day147/cloth2.gif)

<br>

You may notice in the video some random balls popping up. You may also notice that they do not really interact with the cloth much. The last part of this project which I have yet to complete is how to collide circles and lines. I know how to collide squares and circles, but lines, that's a new challenge. Definitely gonna have to bust out some math to figure this one out but I'm game for the challenge. 

<br>

This physic simulation stuff has been really fun, I think once I'm done with this I'll move onto something more on the games side to put in practice some of these physics things. I'm thinking something like a platformer or whatever requires some level of math to code. Either way looking forward to it. Thank you for reading today's blog, until tomorrow.