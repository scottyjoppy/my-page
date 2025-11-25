---
title: "Day 157: Isometry is Hard"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 21, 2025"
description: "Struggling to make a cube."
---

Hello friends,

<br>

Gosh I've been struggling to make a cube. A stupid cube, ughhh.

<br>

## The Issue At Hand

<br>

As it stands now here is my current setup. I have my main file which calls tileMap, which makes a triple vector of cubeTiles, which is a wrapper class for tiles, it looks like this.

<br>

```txt
main.cpp
->  TileMap.cpp
    ->  CubeTiles.cpp
        ->  Tile.cpp
```

<br>

The problem frustration comes when I have to adjust the last three constantly just to get something working. As well, I'm currently creating the cube one face at a time since in the future Tile.cpp will be just for checking bounds. And these files are not even mentioning the SheetManager & SheetLoader files that are causing problems.

<br>

It's been really enraging dealing with these textures but I'm sure when I do figure it out it will be nice to know for the future. The grind is worth it, hopefully. So while I struggle with this more, that's my progress update for today, until tomorrow, friend.