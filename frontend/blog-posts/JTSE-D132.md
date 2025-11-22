---
title: "Day 132: Snapping To Grid"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 23, 2025"
description: "How to snap an image to a grid."
---

Hello friends,

<br>

Today I made use of the grid I created yesterday. I want users to place tiles on the grid to create maps, the tiles they select should follow the mouse, but also snap to the grid.

<br>

## How To Snap

<br>

The function used in the tutorial utilizes the truncating functionality of C++. Where in floating point numbers will be rounded down to the base integer, [1.1, 1.5, 1.8] would all be 1 as integer.

<br>

So how do we snap? Looking at just the x axis, cell represents an index, the leftmost cell is 0, then 1, 2 and so on. Let's say a cell is 16px, and assume scale is 1. Then we check the mousePosition along the x axis.

<br>

```cpp
int intX = mousePosition.x / (tileSize.x * scale.x);
```

<br>

Say the mouse is at (20, 0), if you divide the mouse by the cell:

<br>

```cpp
int intX = 2 / (16 * 1);
```

<br>

You get 1.25, but recall truncation, it will actually be 1.

<br>

That's the index, but to get the actual coordinate, you need to multiply by the tileSize and scale again.

<br>

```cpp
int x = 1 * (16 * 1);
```

<br>

Which is 16, the correct x value for that cell. You repeat that for the y value then you'd get (16, 0). Knowing images are drawn from the top left corner, you can now snap to cells!

<br>

There you have it, snapping. I hope my explanation was somewhat cohesive. Thank you for reading today's blog, until tomorrow, friend.