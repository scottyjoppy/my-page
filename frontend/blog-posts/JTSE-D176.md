---
title: "Day 176: Back To Basics"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 13, 2025"
description: "Remodelling my collision detection."
---

Hello friends,

<br>

With a new project plan came a new model for collision detection. I've been really struggling with the ground collision being so intertwined with 2D and 3D detection and I think it's because of my overreliance on getting an LLM to figure things out for me. So today I decided to clear my collision file (despite some main functions) and start from scratch, in my own words.

<br>

## How To Do Collision

<br>

So there are a few phases of how I'm doing collision:

<br>

1. Select the tiles nearest to me.
2. Filter out the ones I'm not colliding with.
3. Extra filtering.
4. Resolve the collision.

<br>

Step one is mainly to save compute so that I'm not checking collisions with thousands- or millions of tiles. I set an arbitrary distance say one three tiles, then save the tiles that are in that range. 

<br>

```cpp
bool Collision::NearTiles(const sf::Vector3f& obj1, const sf::Vector3f& obj2)
{
    // Note for my purposes I'm only considering the x and z axes
    return std::abs(obj1.x - obj2.x) <= DISTANCE && std::abs(obj1.z - obj2.z) <= DISTANCE;
}
```

<br>

For step two I decided to just look at the players foot line. I defined the coordinates of the foot line, specifically where the line starts and ends. I then consulted the following blog to write a LineLine collision function. ***[JeffreyThompson](https://www.jeffreythompson.org/collision-detection/line-line.php)***. 

<br>

```cpp
bool Collision::LineLine(const Line& l1, const Line& l2)
{
    float denominator = (l2.p2.y - l2.p1.y) * (l1.p2.x - l1.p1.x) - 
        (l2.p2.x - l2.p1.x) * (l1.p2.y - l1.p1.y);

    // Don't divide by 0 dummy
    if (denominator == 0)
        return false;

    float uA = ((l2.p2.x - l2.p1.x) * (l1.p1.y - l2.p1.y) - 
            (l2.p2.y - l2.p1.y) * (l1.p1.x - l2.p1.x)) / denominator;

    float uB = ((l1.p2.x - l1.p1.x) * (l1.p1.y - l2.p1.y) - 
            (l1.p2.y - l1.p1.y) * (l1.p1.x - l2.p1.x)) / denominator;

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
        return true;
    return false;
}
```

<br>

The line line function checks for collision on the tile tops edges, but it fails to recognize when the player is within the tile. So I also added a check to watch the endpoints of the line and check whether or not they're on top of a tile.

<br>

```cpp
bool Collision::LineRect(const Line& line, const sf::FloatRect& rect)
{
    Line leftEdge   = { sf::Vector2f(rect.left, rect.top), sf::Vector2f(rect.left, rect.top + rect.height) };
    Line rightEdge  = { sf::Vector2f(rect.left + rect.width, rect.top), sf::Vector2f(rect.left + rect.width, rect.top + rect.height) };
    Line topEdge    = { sf::Vector2f(rect.left, rect.top), sf::Vector2f(rect.left + rect.width, rect.top) };
    Line bottomEdge = { sf::Vector2f(rect.left, rect.top + rect.height), sf::Vector2f(rect.left + rect.width, rect.top + rect.height) };

    if (LineLine(line, leftEdge) ||
        LineLine(line, rightEdge) ||
        LineLine(line, topEdge) ||
        LineLine(line, bottomEdge))
    {
        return true;
    }

    bool p1Inside =
        (line.p1.x >= rect.left && line.p1.x <= rect.left + rect.width &&
         line.p1.y >= rect.top && line.p1.y <= rect.top + rect.height);

    bool p2Inside =
        (line.p2.x >= rect.left && line.p2.x <= rect.left + rect.width &&
         line.p2.y >= rect.top && line.p2.y <= rect.top + rect.height);

    if (p1Inside && p2Inside)
        return true;

    return false;
}
```

<br>

Now for the final part, resolution. I'll omit this section of the code since I'm not fully happy with it. But the good part is that it works. There's some bug fixing to consider here when it comes to latency as my players movement logic can cause it to phase through the floor with a bug known as tunneling. So to counteract that I one, handled velocity so it doesn't get out of hand, and two, added some buffering for when I resolve the players position.

<br>

And there you have it, now I have a fully functional collision file that works using grid coords instead of the mashup of garbage I had before.

<br>

Thank you for reading today's blog, until tomorrow.