---
title: "Day 151: Grid + Cube"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "September 15, 2025"
description: "Making an isometric grid to work on."
---

Hello friends,

<br>

Today I noticed I should probably get some kind of grid going so I can better align all my isometric shapes. This was a bit challenging since I just barely figured out how to make an isometric tile, now I have to make a full grid, yay.

<br>

## How To Grid

<br>

So I quickly imported the full grid files from a previous project to have some boilerplate going. Then I had to thing, an isometric shape basically has three sides, so unlike the normal 2D grid this one will need a third axis. So in essence an isometric grid consists of two diagonal sets of lines, and one set of straight vertical lines. All of which need to me affected by isometric projection- AKA the squishing I was doing yesterday. 

<br>

Aside from making the grid I also converted the ConvexShape to an array in order to store the 3 faces of the cube. Then copied the points twice over making a few changes to get everything facing the right way. I also introduced the depth variable. I thought if a tile has a depth of 0 there's no point in even creating the two sides since they wouldn't be seen. 

<br>

I still need to add things like a scaling factor to everything but I figured I could add that in down the road. Thanks for taking your time to read today's quick update, until tomorrow.