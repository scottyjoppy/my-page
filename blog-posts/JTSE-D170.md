---
title: "Day 170: Collision Polygon Fix"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 04, 2025"
description: "Fixing a collision problem."
---

Hello friends,

<br>

Keeping today's blog a bit shorter, I solved the problem that when the player was within the polygon not hitting the edges, it would still detect it.

<br>

## The Issue + Fix

<br>

The main problem is that currently I'm just detecting collision between the polygon's vertices, not the inside of it itself. I decided a simple fix would be to just check the two points that form the feetLine of the player, and check if they are within a polygon. This way whenever the player stands in the center of the tile top, it would still detect.

<br>

```cpp
bool pointInPolygon(const sf::Vector2f& point, const Polygon& poly)
{
    // Determine how many vertices the polygon has
    size_t n = poly.size();

    // Loop through using a modulo to loop back to the first edge
    for (size_t i = 0; i < n; i++)
    {
        sf::Vector2f a = poly[i];
        sf::Vector2f b = poly[(i + 1) % n];
        sf::Vector2f edge = b - a;
        sf::Vector2f toPoint = point - a;
        // Use cross multiplication to determine if the point is outside or within the polygon.
        if (cross(edge, toPoint) < 0) return false;
    }
    return true;
}
```

<br>

And that's it! I can now see when the player is on a polygon, next step is to actually do something with the collision detection.