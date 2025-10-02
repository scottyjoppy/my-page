---
title: "Day 167: AABB Filter"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 1, 2025"
description: "Now that I can detect collision, let's do it better."
---

Hello friends,

<br>

So after yesterday's success I was excited to finally take a step forward. Naturally I'm taking my second step into the void of misery and struggle, fun stuff.

<br>

## Game Dev

<br>

Not to sound so gloomy but game development has given me a sort of understanding of how hard some of these things are. I'm sure I would have a much better and quicker time developing this all with a game engine like Unity or Godot, but I do think it's worth it to do it this way, at least once. I think it's important to understand how things work fundamentally. How to calculate something like collision or physics. And really understand how things work block by block. So in that sense, despite it being hard, I'm happy to push through this part of my developer journey.

<br>

## AABB

<br>

Here's my current setup. I'm looking at every single tile in relation to the player. If it falls within a certain distance I will add it to nearby tiles. My next step is to do a very general AABB checker, omitting the 3D view for a second and looking at the screen if the player's bounding box, falls within that of a nearby tile. This was not simple at all. It probably just because I'm a bit dumb but I really struggled with the whole bounding box thing and really had to take some time to get it working. Eventually I was left with something that "looks" like it works which is good enough for this.

<br>

I briefly started looking into the next stage of collision line on polygon but that will be a challenge for tomorrow.

<br>

Thank you for reading today's update and insight into my experience with game development. Despite the doom and gloom I really do like it. When I'm not so bogged down by minute details it is really fun. You can just create things, simulations, games, apps, sky's the limit. Just gotta learn how to do it well and efficiently. Here's to the journey, friend.
