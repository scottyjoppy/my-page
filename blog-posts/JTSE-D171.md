---
title: "Day 171: Starting Resolve"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 05, 2025"
description: "Opening up the resolve function."
---

Hello friends,

<br>

Today I wanted to make use of the collision detection by actually making the player "Stand" on tiles.

<br>

## The Plan

<br>

So in the past few days I've added collision detection for top tiles. Now I need that to actually do something. When the player is on top of a tile I need to track a few things, their grid coordinates, jumping state and then which tile I'm on. Basically I need to be able to tell when I gotta turn the physics on or not. If I'm on top of a tile I should stay put, but if I go off, let verlet take the wheel.

<br>

The complicated part is doing this in my isometric plane and dealing with intertwined 3D and 2D coordinates. I have a rough idea how this will all pan out and today I put a bit of it into motion, and all I got working was getting the player falling forever, better than nothing.

<br>

That's all I could do for today, but thanks for reading today's blog, until tomorrow.