---
title: "Day 158: Success + LoadFromFile"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 22, 2025"
description: "Making a cube and loading maps from text files."
---

Hello friends,

<br>

Not only did I manage to actually make the dang cube today, but I made it possible to create maps from text files.

<br>

## The Cube

<br>

Making that shape came down to one thing in the end, origin. I had to add a value in my sheetManager in which I could define the origin of the texture. This way I would set the top tile to originate from the bottom center, the left tile from the top right, and the right tile from the top left. This way they were all being drawn from the middle point of the cube and solved any of these problems I was having. The cringe thing is that yes, I made the tiles separately because of collision, but honestly it's dumb to import the cubes textures one face at a time, I need to just import it all in one. So I ended up combining the textures and then made a sheet to store it and a few other variants of the cube. I then made sure to set the origin to the bottom left so that when it's drawn it's sticking to the bottom of the grid not floating above it.

<br>

## MapLoader

<br>

Map loading is something I've already done in a previous project so this was no issue. I just copied the code and then modified some things. The logic was also pretty familiar to me. We loop through the text file line by line searching for keys and values. In this case I wanted to store a data value which was just an array of numbers. The numbers represent the index of the tile in the sprite sheet. For example if the sprite sheet was orange cube, then purple cube, I could alternate between the two like this 0,1,0,1.

<br>

After that it was a matter of adjusting my tileMap and cubeTile accordingly. I took the texture code out of Tile.cpp and moved it up to CubeTile.cpp, since again Tile.cpp will just be there for collisions sakes, if I do need it still for that.

<br>

So that's all for today, actual progress, sick, thank you for reading today's blog, I'll see you tomorrow.

<br>

![cube image](/images/day158/cubes.png)