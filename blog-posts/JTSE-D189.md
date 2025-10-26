---
title: "Day 189: Decay Follows Player"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "October 26, 2025"
description: "Today I made a simple change but it really improved the gameplay."
---

Hello friends,

<br>

While yes, the game in general is a very simple one, the change I made today made it actually a bit more enjoyable.

<br>

## The Simple Change

<br>

The main change I made was in the main file, replacing some code that would make a random tile decay to this:

<br>

```cpp
if (loopAcc >= loopRate && start)
{
    std::vector<CubeTile*> allTiles = map.GetAllTiles();

    for (auto* t : allTiles)
    {
        sf::Vector3f tileGrid = sf::Vector3f
            (
                static_cast<float>(t->m_gridCoords.x),
                static_cast<float>(t->m_gridCoords.y),
                static_cast<float>(t->m_gridCoords.z)
            );

        if (Collision::NearTiles(tileGrid, p1.m_gridPos, nearSize) && !p1.isJumping)
            t->m_decay = true;
    }
}
```

<br>

Essentially what's going on here is that I'm using the previously made NearTiles function to just make tiles near the player decay. I added the nearSize so I could control the distance from the player I'd like to have decay. Then as to omit affecting tiles when the player is jumping I added the isJumping check.

<br>

The next thing I'd like to do is finally separate everything into different game states and swap the pages to load. I found a nice video series where he outlines how to do this with SFML so I'll listen to those and try to figure this all out. Thank you for reading today's blog. Until tomorrow, friend.