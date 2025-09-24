---
title: "Day 159: Road To Collision"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 23, 2025"
description: "Working towards good isometric collision detection."
---

Hello friends,

<br>

Today I decided to start tackling this beast of collision.

<br>

## My Vision

<br>

So I started today by creating the bounds for my tiles and the player. I defined the player with a simple rectangle. I shrunk the shape down to get a more precise area around the character. I then defined the cubeTiles with 6 faces. The top, bottom, frontLeft, frontRight, backLeft and backRight. The hope is that I could detect collision from all angles. When it comes to the sides of the cube I will have to do things a bit differently. Visually in an isometric space I want the player to look like their in front or behind a cubeTile. This means I'll have to think of some way of not fully restricting movement on these axes, and instead allow for some leeway on these angles.

<br>

The involved math is still a mystery to me. I have some knowledge that I'll have to look into polygon collision with SAT and how 3D collision works but I'm still quite unclear on how I'll move forward.

<br>

Today I got the bounds drawn up and at the very least I can visualize things better. Thank you for reading today's blog. See ya tomorrow.