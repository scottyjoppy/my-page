---
title: "Day 145: Verlet & Collision"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 09, 2025"
description: "Making a small physics simulation with particles within a circle."
---

Hello friends,

<br>

Today I completed a small physics simulation to practice Verlet Integration and collision.

<br>

![collision gif](/images/day145/collision.gif)

<br>

## Verlet Integration

<br>

So here's my description of what it does. Verlet is a way of calculating the next position of something, by using it's current and previous positions. Velocity isn't explicitly needed but it can be extracted from Verlet. It simplifies movement since all you need to do is create the objects and let them be affected by Verlet and the math will handle the rest.

<br>

In this GIF I show a short demonstration of that. I also integrated the mouse as a kind of gravity source that attracts the particles.

<br>

The results were fairly compute efficient which you can see by the relatively consistent FPS. But I'm sure there are many improvements to be made. 

<br>

## Collision, briefly.

<br>

Collision here is not too complicated since I'm just using circles. Essentially you want to calculate the distance between two particles, and the sum of their radiuses. If the sum is greater than the distance, they need to be moved apart. 

<br>

The order of all these things is most important. That's something I'll have to get a feel for going forward and should always be considered when creating these functions.

<br>

It took quite some time to wrap my head around what Verlet was actually doing but now I think I have a basic understanding of it. Thank you for reading today's blog and I'll share some more work soon, friend.