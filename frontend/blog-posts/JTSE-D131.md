---
title: "Day 131: Map Editor"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 22, 2025"
description: "Creating a separate MapEditor project to generate maps."
---

Hello friends,

<br>

Today I started a new project to handle the map creation. While it's still in the early stages, today I made a grid.

<br>

## Grids

<br>

I'm always astonished by how programmers break down tasks into their simplest forms. Here I was imagining some super complicated grid creation method, when really it just comes to creating a bunch of parallel lines.

<br>

The important part is ensuring that I'm not using any magic numbers. Everything should either be a constant defined when calling Grid, or an exact calculation done in the class. For example line thickness is defined right away, as well as the amount of cells vertically and horizontally. But something like the length of a single horizontal line can be derived from existing variables.

<br>

Let's break down a problem. I want a grid of 3x3, where one cell is 16px long. I know that one line would be 16 + 16 + 16 or 48px long. While I could do:

<br>

```cpp
int horizontalLineLength = 48;
```

<br>

This doesn't account for any sort of variation in the previous variables. The smart thing to do is determine the lineLength by multiplying the amount of horizontal cells by the length of a single cell. Then finally multiplying that by the desired scale:

<br>

```cpp
int horizontalLineLength = m_totalCells.x * m_cellSize * m_scale;
```

<br>

Once I have a singular line, to create a grid all you need to do is repeat that, offsetting the position every iteration by the length of a cell. So you'd draw one horizontal line, go down by 16px, then draw another, and so on. Repeat that on the vertical axis and boom, almost a grid. The problem with doing it this way is you'll always be off-by-one, leaving the bottom and right edges missing a line. To solve this, just ensure to add one more:

<br>

```cpp
m_hLine = new sf::RectangleShape[m_totalCells.y + 1];
m_totalLines = sf::Vector2i(m_totalCells.x + 1, m_totalCells.y + 1);

for (size_t i = 0; i < m_totalLines.y; i++)
{
    m_hLine[i].setSize(sf::Vector2f(horizontalLineLength, m_lineThickness));
    // Don't forget to account for scale here
    m_hLine[i].setPosition(m_position + sf::Vector2f(0, i * m_cellSize * m_scale));
}
```

<br>

There you have it, a grid, and all the constants are initialized when you create it, sick.

<br>

Tomorrow I'll actually make these cells do something, like show a tile. But for today I'm happy with this. Thank you for reading the blog today, all the best, friend.
