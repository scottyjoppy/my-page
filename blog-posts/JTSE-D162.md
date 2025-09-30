---
title: "Day 162: Player To Grid"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 26, 2025"
description: "Fixing player positioning from screen coords to grid coords."
---

Hello friends,

<br>

So despite yesterday's excitement, today I'm faced with a big problem. My player class doesn't have grid positions. In it's current state, the player is being drawn based on the screen position. This leaves me with the fun task of changing everything.

<br>

## The Struggle

<br>

I'll be honest, this has not been a successful or enjoyable day. Delving back into this class and needing to make all these modifications really makes me angry at my previous self for this oversight. I have to change a lot of logic like how scale is used, position changed, bounds, shadows, and I need to modify the function that converts grid positions to screen positions. Things are disorganized, smelly, and interdependent. This makes me super nervous when changing a single thing since I know I need to keep at least three other things in the back of my mind that will also need to be changed. I've become quite accustomed to the :vs command which allows me to split my screen in half and work on two files side by side. A command I use often when modifying a .h and .cpp file together. If I create a new variable I can immediately add it to the other.

<br>

Today I've pretty much just started digging myself into a hole, I'm not done yet, but I'll have to continue this tomorrow. Until then, friend.
