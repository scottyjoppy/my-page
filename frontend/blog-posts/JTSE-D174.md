---
title: "Day 174: Back To Collision"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 11, 2025"
description: "Trying to get ground collision to work."
---

Hello friends,

<br>

Getting back into things today after being sick for a few, I decided to tackle some bugs before continuing to detect other sides of the cubes.

<br>

## Things Don't Work

<br>

So I was facing a few issues. But most apparent to me was that as I'm looking through all my classes, I'm noticing a distinct inconsistency when it comes to collision. Namely colliding objects in both 2D and 3D space, which has led to most of the bugs. I think this is a big problem and came about from a lack of direction when I first started this file. I just patched things together solving one problem in front of another, not considering the general architecture of how I should do things. I think my first mistake was not committing to one or another.

<br>

When you develop isometric games you have a choice, either you are creating a 2D environment, that is then projected to 3D visually. In this case you aren't considering things to be 3D, but when you get to collision, you first detect and resolve it in 2D space, and then project the results in 3D. The second option is to treat the game as 3D. Which I think I should've just stuck to in the first place. This way I can almost disregard what I'm seeing on the 2D screen and instead write collision as if it were a completely 3D game.

<br>

The lack of consistency on this topic is now coming back to haunt me. So today that's what I started trying to fix. There's a ton to do in terms of properly converting everything to 3D but if I'm looking out for how I want things to look down the road, it's a necessary change. 

<br>

Today was but the start but I'll continue to provide updates as I go. Thank you for reading the blog, friend.