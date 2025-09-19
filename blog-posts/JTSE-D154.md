---
title: "Day 154: Tile Class"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 18, 2025"
description: "Redoing the Tile Class."
---

Hello friends,

<br>

While yesterday was all about the player class, today was all about the Tile class.

<br>

## Humble Beginnings

<br>

My tile class is a mess at the moment. The z axis is just called depth and is being used incorrectly. I'm defining way too much within this class, top tiles, side tiles, collision boxes- I haven't even started to do the collision! I need to restart. So I deleted 90% of the tile class and with the player class as my formatting guide, got to work. Slowly but surely I got things working.

<br>

I'm not sure if this will work forever but one fun way I like to do things is I'll just write code for like 10 minutes, then without checking everything, just run the file. I'll get my wall of errors, split screen that and my code, and use it as a sort of automatically made list of fixes. Once that's done usually I gotta run a few more compiles + bug fixes before I'm done, but after that, it runs...hopefully.

<br>

The main thing that I had to stop my brain from jumping forwards is this whole collision box thing. I'm using an  sf::Sprite to load the textures into. But these have a rectangular bounding box which can't be changed. I know that the image I want to load is a diamond type shape so my question was how to put that texture on that sprite. The answer, just do it, so long as the texture's blank areas are transparent it's no problem. In the future I'll probably do something like create a convex shape to overlay the sprite and then use that for collision, but sprite is essentially just there for position, size, and textures.

<br>

Today I just got one tile to be on the screen (in the wrong place), but tomorrow I'll want to export this into it's own class which will contain a vector of tiles. This way I can create many at a time. But thank you for reading today's blog, I'm excited to share my daily progress here, hopefully I'll get some pictures out for tomorrow!
